import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { tracked } from '@glimmer/tracking';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';


module('Integration | Component | r-paper-time-picker', function(hooks) {
  setupRenderingTest(hooks);

  test('it creates a time picker and opens correctly', async function(assert) {

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
      <RPaperTimePicker @id="test-me"
                        @value={{this.ctx.value}}
                        @onChange={{this.onChange}}
                        @PopperProps={{this.popperProps}}/>
    `);


    const datePicker = document.getElementsByClassName('ember-paper-react-time-picker')[0];
    assert.ok(datePicker, 'TimePicker found');

    const inputElement = document.getElementById('test-me');
    const calendarIconButton = inputElement.parentElement.getElementsByClassName('MuiIconButton-root')[0];
    assert.ok(calendarIconButton, 'TimePicker button found');
    await click(calendarIconButton);
    const popperElement = document.getElementsByClassName('test-popper-class')[0];
    assert.ok(popperElement, 'Clock Opened');
  });
});

