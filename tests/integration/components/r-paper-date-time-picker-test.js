import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { tracked } from '@glimmer/tracking';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | r-paper-date-time-picker', function(hooks) {
  setupRenderingTest(hooks);

  test('it creates a date time picker', async function(assert) {

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
      <RPaperDateTimePicker
                        @id='test-me'
                        @value={{this.ctx.value}}
                        @onChange={{this.onChange}}
                        @PopperProps={{this.popperProps}}
                       />
    `);

    const dateTimePicker = document.getElementsByClassName('ember-paper-react-date-time-picker')[0];
    assert.ok(dateTimePicker, 'DateTimePicker found');

    const inputElement = document.getElementById('test-me');
    const calendarIconButton = inputElement.parentElement.getElementsByClassName('MuiIconButton-root')[0];
    assert.ok(calendarIconButton, 'DateTimePicker button found');
    await click(calendarIconButton);
    const popperElement = document.getElementsByClassName('test-popper-class')[0];
    assert.ok(popperElement, 'Calendar Opened');
  });
});

