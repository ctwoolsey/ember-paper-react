import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, settled, tap, waitUntil, pauseTest } from '@ember/test-helpers';
import { fireEvent, act } from '@testing-library/react'
import { hbs } from 'ember-cli-htmlbars';
import { A } from '@ember/array';
import { tracked } from "@glimmer/tracking";

module('Integration | Component | r-paper-autocomplete', function(hooks) {
  setupRenderingTest(hooks);
  hooks.beforeEach(function(hooks) {
    class MyContext {
      @tracked groupHeaders;
      @tracked customFilmOptions;
    }
    let ctx = new MyContext();
    this.setProperties({ctx});

    this.set('movieOptionLabel', (option) => {
      if (option) {
        return option.title + ' (' + option.year + ') ';
      } else {
        return '';
      }
    });

    this.set('movieGrouping', (option) => {
      return option.firstLetter;
    });

    const top100Films =  [
      { title: 'B', year: 1994 },
      { title: 'BB', year: 1972 },
      { title: 'A', year: 1974 },
      { title: 'AA', year: 2008 },
      { title: 'D', year: 1957 },
      { title: "C", year: 1993 },
      { title: 'CC', year: 1994 },
      { title: 'BBB', year: 2010 }
    ];


    this.set('optionsFilter', (options, state) => {
      const optionsFiltered = [];
      options.forEach((option) => {
        const showValue = option.title + ' ' + option.year;
        if (showValue.toLowerCase().includes(state.inputValue.toLowerCase())) {
          optionsFiltered.push(option);
        }
      });
      this.ctx.customFilmOptions = optionsFiltered;

      this.createGroupHeaders();

      return optionsFiltered;
    });

    let films = top100Films.map((option) => {
      const firstLetter = option.title[0].toUpperCase();
      return {
        firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
        ...option,
      };
    });

    let filmSorter = (a,b) => {
      let str2 = a.firstLetter;
      let str1 = b.firstLetter;
      return -str1.localeCompare(str2);
    };

    films.sort(filmSorter);
    this.set('filmOptions', films);

    this.set('createGroupHeaders', () => {
      this.groupHeaders = A();
      this.filmOptionsFiltered.forEach((filmOption) => {
        if (!this.ctx.groupHeaders.includes(filmOption.firstLetter)) {
          this.ctx.groupHeaders.addObject(filmOption.firstLetter);
        }
      });
    });

    this.set('countOfListItemsInGroups', () => {
      const presentationElement = document.getElementsByClassName('MuiAutocomplete-popper');
      const ulComponents = presentationElement[0].querySelectorAll('.MuiAutocomplete-groupUl');
      let count = 0;
      for(let i = 0; i < ulComponents.length; i++) {
        count += ulComponents[i].children.length;
      }
      return count;
    });

    this.set('getFirstListIteminGroupText', () => {
      const presentationElement = document.getElementsByClassName('MuiAutocomplete-popper');
      const ulComponents = presentationElement[0].querySelectorAll('.MuiAutocomplete-groupUl');
      return ulComponents[0].firstElementChild.textContent.trim();
    });

    this.set('getFirstGroupItemText', () => {
      const presentationElement = document.getElementsByClassName('MuiAutocomplete-popper');
      return presentationElement[0].querySelectorAll('li')[0].firstElementChild.textContent.trim();
    });

    this.set('createGroupHeaders', () => {
      this.ctx.groupHeaders = A();
      this.ctx.customFilmOptions.forEach((filmOption) => {
        if (!this.ctx.groupHeaders.includes(filmOption.firstLetter)) {
          this.ctx.groupHeaders.addObject(filmOption.firstLetter);
        }
      });
    });

  });

  test('it renders and updates options', async function(assert) {
    class MyContext {
      @tracked options = ['A', 'B', 'C'];
    }
    let ctx = new MyContext();
    this.setProperties({ctx});

    await render(hbs`<div><RPaperAutocomplete @id='test-me' @label='my-label' @options={{this.ctx.options}} /></div>`);

    let testElement = document.getElementById('test-me');
    assert.ok(testElement, `rendered basic autocomplete`);
    await click(testElement);
    let presentationElement = document.getElementsByClassName('MuiAutocomplete-popper');
    assert.ok(presentationElement, `options pop up found`);
    let foundOptions = presentationElement[0].querySelectorAll(`li`);
    assert.equal(foundOptions.length, 3, `correct number of options`);
    assert.equal(foundOptions[0].textContent.trim(), 'A', `'A' options matches`);
    assert.equal(foundOptions[1].textContent.trim(), 'B', `'B' options matches`);
    assert.equal(foundOptions[2].textContent.trim(), 'C', `'C' options matches`);

    this.ctx.options = ['D', 'E'];
    await settled();
    presentationElement = document.getElementsByClassName('MuiAutocomplete-popper');
    assert.ok(presentationElement, `options pop up found`);
    foundOptions = presentationElement[0].querySelectorAll(`li`);
    assert.equal(foundOptions.length, 2, `correct number of options`);
    assert.equal(foundOptions[0].textContent.trim(), 'D', `'D' options matches`);
    assert.equal(foundOptions[1].textContent.trim(), 'E', `'E' options matches`);
  });

  test('it renders and filters options', async function(assert) {
    await render(hbs`<div>
                      <RPaperAutocomplete  @id="test-me"
                         @options={{this.filmOptions}} @label="my-label"
                         @getOptionLabel={{this.movieOptionLabel}}
                         >
                      </RPaperAutocomplete>
                    </div>`);

    let testElement = document.getElementById('test-me');
    assert.ok(testElement, `rendered basic autocomplete`);

    act(() => {
      testElement.focus();
      fireEvent.change(document.activeElement, { target: { value: 'B' } });
    });
    let presentationElement = document.getElementsByClassName('MuiAutocomplete-popper');
    assert.ok(presentationElement, `options pop up found`);
    let foundOptions = presentationElement[0].querySelectorAll(`li`);
    assert.equal(foundOptions.length, 3, `correct number of options`);

    act(() => {
      testElement.focus();
      fireEvent.change(document.activeElement, { target: { value: 'BB' } });
    });
    presentationElement = document.getElementsByClassName('MuiAutocomplete-popper');
    assert.ok(presentationElement, `options pop up found for 'BB'`);
    foundOptions = presentationElement[0].querySelectorAll(`li`);
    assert.equal(foundOptions.length, 2, `correct number of options for input: 'BB'`);
  });

  test('it renders custom options', async function(assert) {
    await render(hbs`<div>
                      <RPaperAutocomplete  @id="test-me"
                         @label="my-label"
                         @options={{this.filmOptions}}
                         @getOptionLabel={{this.movieOptionLabel}}
                         @filterOptions={{this.optionsFilter}}
                         >
                         <:options>
                            {{#each this.ctx.customFilmOptions as |film|}}
                              <li>Modified {{film.title}} ({{film.year}})</li>
                            {{/each}}
                          </:options>
                      </RPaperAutocomplete>
                    </div>`);

    let testElement = document.getElementById('test-me');
    assert.ok(testElement, `rendered basic autocomplete`);

    act(() => {
      testElement.focus();
      fireEvent.change(document.activeElement, { target: { value: 'B' } });
    });

    let presentationElement = document.getElementsByClassName('MuiAutocomplete-popper');
    assert.ok(presentationElement, `options pop up found`);

    /*
      With custom options, react will render the options, then ember will replace the options with the custom options,
      if we don't wait, only the react rendered options will be examined.
    */
    await waitUntil(() => {
      return presentationElement[0].querySelectorAll(`li`)[0].textContent.trim() === 'Modified B (1994)';
    }, { timeout: 2000 });


    let foundOptions = presentationElement[0].querySelectorAll(`li`);
    assert.equal(foundOptions.length, 3, `correct number of options`);
    assert.equal(foundOptions[0].textContent.trim(), 'Modified B (1994)', `'Modified B (1994)' received as expected`);

    act(() => {
      testElement.focus();
      fireEvent.change(document.activeElement, { target: { value: 'BB' } });
    });
    presentationElement = document.getElementsByClassName('MuiAutocomplete-popper');
    assert.ok(presentationElement, `options pop up found`);

    await waitUntil(() => {
      return presentationElement[0].querySelectorAll(`li`)[0].textContent.trim() === 'Modified BB (1972)';
    }, { timeout: 2000 });

    foundOptions = presentationElement[0].querySelectorAll(`li`);
    assert.equal(foundOptions[0].textContent.trim(), 'Modified BB (1972)', `'Modified BB (1972)' received as expected`);
  });

  test('it renders custom options, with non custom grouping', async function(assert) {
    await render(hbs`<div>
                      <RPaperAutocomplete  @id="test-me"
                         @label="my-label"
                         @options={{this.filmOptions}}
                         @getOptionLabel={{this.movieOptionLabel}}
                         @filterOptions={{this.optionsFilter}}
                         @groupBy={{this.movieGrouping}}
                         >
                         <:options>
                            {{#each this.ctx.customFilmOptions as |film|}}
                              <li>Modified {{film.title}} ({{film.year}})</li>
                            {{/each}}
                          </:options>
                      </RPaperAutocomplete>
                    </div>`);

    let testElement = document.getElementById('test-me');
    assert.ok(testElement, `rendered basic autocomplete`);

    act(() => {
      testElement.focus();
      fireEvent.change(document.activeElement, { target: { value: 'B' } });
    });

    let presentationElement = document.getElementsByClassName('MuiAutocomplete-popper');
    assert.ok(presentationElement, `options pop up found`);

    /*
      With custom options, react will render the options, then ember will replace the options with the custom options,
      if we don't wait, only the react rendered options will be examined.
    */
    let self = this;
    await waitUntil(() => {
      return self.getFirstListIteminGroupText() === 'Modified B (1994)';
    }, { timeout: 2000 });


    assert.equal(this.countOfListItemsInGroups(), 3, `correct number of options`);
    assert.equal(this.getFirstListIteminGroupText(), 'Modified B (1994)', `'Modified B (1994)' received as expected`);

    act(() => {
      testElement.focus();
      fireEvent.change(document.activeElement, { target: { value: 'BB' } });
    });
    presentationElement = document.getElementsByClassName('MuiAutocomplete-popper');
    assert.ok(presentationElement, `options pop up found`);

    await waitUntil(() => {
      return self.getFirstListIteminGroupText() === 'Modified BB (1972)';
    }, { timeout: 2000 });


    assert.equal(this.countOfListItemsInGroups(), 2, `correct number of options`);
    assert.equal(this.getFirstListIteminGroupText(), 'Modified BB (1972)', `'Modified BB (1972)' received as expected`);

  });

  test('it renders custom options and custom grouping', async function(assert) {
    await render(hbs`<div>
                      <RPaperAutocomplete  @id="test-me"
                         @label="my-label"
                         @options={{this.filmOptions}}
                         @getOptionLabel={{this.movieOptionLabel}}
                         @filterOptions={{this.optionsFilter}}
                         @groupBy={{this.movieGrouping}}
                         >
                         <:groupHeaders>
                            {{#each this.ctx.groupHeaders as |groupHeader|}}
                              <li>
                                Group: {{groupHeader}}
                              </li>
                            {{/each}}
                        </:groupHeaders>
                         <:options>
                            {{#each this.ctx.customFilmOptions as |film|}}
                              <li>Modified {{film.title}} ({{film.year}})</li>
                            {{/each}}
                          </:options>
                      </RPaperAutocomplete>
                    </div>`);

    let testElement = document.getElementById('test-me');
    assert.ok(testElement, `rendered basic autocomplete`);

    act(() => {
      testElement.focus();
      fireEvent.change(document.activeElement, { target: { value: 'B' } });
    });

    let presentationElement = document.getElementsByClassName('MuiAutocomplete-popper');
    assert.ok(presentationElement, `options pop up found`);

    /*
      With custom options, react will render the options, then ember will replace the options with the custom options,
      if we don't wait, only the react rendered options will be examined.
    */

    let self = this;
    await waitUntil(() => {
      return self.getFirstListIteminGroupText() === 'Modified B (1994)';
    }, { timeout: 2000 });


    assert.equal(this.countOfListItemsInGroups(), 3, `correct number of options`);
    assert.equal(this.getFirstListIteminGroupText(), 'Modified B (1994)', `'Modified B (1994)' received as expected`);
    assert.equal(this.getFirstGroupItemText(), 'Group: B', `'Group: B' received as expected`);


    act(() => {
      testElement.focus();
      fireEvent.change(document.activeElement, { target: { value: 'C' } });
    });
    presentationElement = document.getElementsByClassName('MuiAutocomplete-popper');
    assert.ok(presentationElement, `options pop up found`);

    await waitUntil(() => {
      return self.getFirstListIteminGroupText() === 'Modified C (1993)';
    }, { timeout: 2000 });


    assert.equal(this.countOfListItemsInGroups(), 2, `correct number of options`);
    assert.equal(this.getFirstListIteminGroupText(), 'Modified C (1993)',`'Modified C (1993)' received as expected`);
    assert.equal(this.getFirstGroupItemText(), 'Group: C', `'Group: C' received as expected`);

  });

  test('it renders custom grouping no custom options', async function(assert) {
    await render(hbs`<div>
                      <RPaperAutocomplete  @id="test-me"
                         @label="my-label"
                         @options={{this.filmOptions}}
                         @getOptionLabel={{this.movieOptionLabel}}
                         @filterOptions={{this.optionsFilter}}
                         @groupBy={{this.movieGrouping}}
                         >
                         <:groupHeaders>
                            {{#each this.ctx.groupHeaders as |groupHeader|}}
                              <li>
                                Group: {{groupHeader}}
                              </li>
                            {{/each}}
                        </:groupHeaders>
                      </RPaperAutocomplete>
                    </div>`);

    let testElement = document.getElementById('test-me');
    assert.ok(testElement, `rendered basic autocomplete`);

    act(() => {
      testElement.focus();
      fireEvent.change(document.activeElement, { target: { value: 'B' } });
    });

    let presentationElement = document.getElementsByClassName('MuiAutocomplete-popper');
    assert.ok(presentationElement, `options pop up found`);
    /*
      With custom options, react will render the options, then ember will replace the options with the custom options,
      if we don't wait, only the react rendered options will be examined.
    */

    let self = this;
    await waitUntil(() => {
      return self.getFirstGroupItemText() === 'Group: B';
    }, { timeout: 2000 });

    assert.equal(this.getFirstGroupItemText(), 'Group: B', `'Group: B' received as expected`);

    act(() => {
      testElement.blur();
    });

    tap(testElement);

    presentationElement = document.getElementsByClassName('MuiAutocomplete-popper');
    assert.ok(presentationElement, `options pop up found`);

    await waitUntil(() => {
      return self.getFirstGroupItemText() === 'Group: A';
    }, { timeout: 2000 });

    assert.equal(this.getFirstGroupItemText(), 'Group: A', `'Group: B' received as expected`);

  });
});
