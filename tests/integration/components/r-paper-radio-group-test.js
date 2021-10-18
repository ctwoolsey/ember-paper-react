import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled, click } from '@ember/test-helpers';
import { A } from '@ember/array';
import { hbs } from 'ember-cli-htmlbars';
import { tracked } from "@glimmer/tracking";

module('Integration | Component | r-paper-radio-group', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    class MyContext {
      @tracked radioGroups = A(['car', 'truck', 'mini-van']);
    }
    let ctx = new MyContext();
    this.setProperties({ctx});
    this.set('radioGroupValue', 'truck');

    this.set('onRadioGroupChange', (event) => {
      this.radioGroupValue = event.currentTarget.value;
    });

    await render(hbs`
      <div>
        <RPaperRadioGroup @id='test-me' @name='my-radio-group' @defaultValue={{this.radioGroupValue}} @onChange={{this.onRadioGroupChange}}>
          {{#each this.ctx.radioGroups as |radioGroup|}}
            <RPaperRadio @label={{radioGroup}} @value={{radioGroup}}/>
          {{/each}}
        </RPaperRadioGroup>
      </div>
    `);

    let testElement = document.getElementById('test-me');
    assert.ok(testElement,`radio group rendered`);
    assert.equal(testElement.childElementCount, `3`, `radio group has correct number of children`);
    assert.equal(this.radioGroupValue, 'truck', `radio group = default value`);
    await click(testElement.children[2]);
    assert.equal(this.radioGroupValue, 'mini-van', `radio group updates value correctly`);

    this.ctx.radioGroups.pushObject('semi');
    await settled();
    assert.equal(testElement.childElementCount, `4`, `radio group has correct number of added children`);
    this.ctx.radioGroups.popObject();
    this.ctx.radioGroups.popObject();
    await settled();
    assert.equal(testElement.childElementCount, `2`, `radio group has correct number of removed children`);
  });
});
