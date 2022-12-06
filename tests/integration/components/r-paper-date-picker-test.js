import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import { next } from '@ember/runloop';
import { hbs } from 'ember-cli-htmlbars';
import { tracked } from '@glimmer/tracking';

module('Integration | Component | r-paper-date-picker', function(hooks) {
  setupRenderingTest(hooks);

  test('it creates a date picker', async function(assert) {

    class MyContext {
      @tracked value = '';
    }
    let ctx = new MyContext();
    this.setProperties({ctx});
    this.set('onChange', (newValue) => {
      this.ctx.value = newValue;
    });

    this.set('popperProps', { className: 'test-popper-class'});

    await render(hbs`
      <RPaperDatePicker @id="test-me"
                        @value={{this.ctx.value}}
                        @onChange={{this.onChange}}
                        @PopperProps={{this.popperProps}}/>
    `);


    const datePicker = document.getElementsByClassName('ember-paper-react-date-picker')[0];
    assert.ok(datePicker, 'DatePicker found');

    const inputElement = document.getElementById('test-me');
    const calendarIconButton = inputElement.parentElement.getElementsByClassName('MuiIconButton-root')[0];
    assert.ok(calendarIconButton, 'DatePicker button found');
    await click(calendarIconButton);
    const popperElement = document.getElementsByClassName('test-popper-class')[0];
    assert.ok(popperElement, 'Calendar Opened');
    const calendarButton = document.querySelector('button.MuiPickersDay-root');
    await click(calendarButton);
    next(this, function() {
      const dateObj = new Date();
      let month = dateObj.getUTCMonth() + 1;
      if (month < 10) {
        month = '0' + month;
      }
      const year = dateObj.getUTCFullYear();
      assert.equal(inputElement.value, `${month}/01/${year}`, 'Displays the date correctly');
    });
  });

  test('it displays errors correctly', async function(assert) {

    this.set('errors', ['Test Error']);
    class MyContext {
      @tracked value = '';
    }
    let ctx = new MyContext();
    this.setProperties({ctx});
    this.set('onChange', (newValue) => {
      this.ctx.value = newValue;
    });

    await render(hbs`
      <RPaperDatePicker @id="test-me"
                        @value={{this.ctx.value}}
                        @onChange={{this.onChange}}
                        @isTouched={{true}}
                        @errors={{this.errors}} />
    `);

    next(this, function() {
      const errorSpan = document.getElementsByClassName('ember-paper-react-validation-helper-text-span')[0];
      assert.ok(errorSpan, 'Error span found');
      assert.equal(errorSpan.textContent, 'Test Error', 'Displays the error correctly');
    });
  });
});

