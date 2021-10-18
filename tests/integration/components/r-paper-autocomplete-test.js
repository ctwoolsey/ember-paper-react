import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, settled } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { A } from '@ember/array';
import { tracked } from "@glimmer/tracking";

module('Integration | Component | r-paper-autocomplete', function(hooks) {
  setupRenderingTest(hooks);

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

  test('it renders custom headers and options', async function(assert) {
    class MyContext {
      @tracked filmOptionsFiltered;
      @tracked groupHeaders;
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

    this.set('filterOptions', (options, state) => {
      return this.filteredOptions(options, state.inputValue);
    });

    this.set('top100Films', [
        { title: 'B', year: 1994 },
        { title: 'BB', year: 1972 },
        { title: 'A', year: 1974 },
        { title: 'AA', year: 2008 },
        { title: 'D', year: 1957 },
        { title: "C", year: 1993 },
        { title: 'CC', year: 1994 }
      ]);

    this.set('filteredOptions', (options, inputValue) => {
      this.ctx.filmOptionsFiltered = [];
      options.forEach((option) => {
        const showValue = option.title + ' ' + option.year;
        if (showValue.toLowerCase().includes(inputValue.toLowerCase())) {
          this.ctx.filmOptionsFiltered.push(option);
        }
      });

      this.createGroupHeaders();
      return this.ctx.filmOptionsFiltered;
    });
    let films = this.top100Films.map((option) => {
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

    await render(hbs`<div>
                      <RPaperAutocomplete  @id="test-me"
                         @options={{this.filmOptions}} @label="my-label" @value={{this.acValue}}
                         @onChange={{this.onAcChange}} @getOptionLabel={{this.movieOptionLabel}} @groupBy={{this.movieGrouping}}
                         @filterOptions={{this.filterOptions}}>

                         <:groupHeaders>
                            {{#each this.groupHeaders as |groupHeader|}}
                              <li>
                                Group: {{groupHeader}}
                              </li>
                            {{/each}}
                          </:groupHeaders>
                          <:options>
                            {{#each this.filmOptionsFiltered as |film|}}
                              <li><u>{{film.title}} ({{film.year}})</u></li>
                            {{/each}}
                          </:options>
                      </RPaperAutocomplete>
                    </div>`);

    let testElement = document.getElementById('test-me');
    assert.ok(testElement, `rendered basic autocomplete`);
  });
});
