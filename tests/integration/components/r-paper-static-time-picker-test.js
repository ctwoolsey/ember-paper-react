import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { tracked } from '@glimmer/tracking';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | r-paper-static-time-picker', function(hooks) {
  setupRenderingTest(hooks);

  test('it creates a static time picker', async function(assert) {

    class MyContext {
      @tracked value = '';
    }
    let ctx = new MyContext();
    this.setProperties({ctx});
    this.set('onChange', (newValue) => {
      this.ctx.value = newValue;
    });


    await render(hbs`
      <RPaperStaticTimePicker
                        @value={{this.ctx.value}}
                        @onChange={{this.onChange}}
                       />
    `);

    const staticTimePicker = document.getElementsByClassName('ember-paper-react-static-time-picker')[0];
    assert.ok(staticTimePicker, 'StaticTimePicker found');
  });
});

