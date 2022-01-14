import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, fillIn } from '@ember/test-helpers';
import { next } from '@ember/runloop';
import { TestSimpleRender } from "../standard-tests/rendering-tests";
import { hbs } from 'ember-cli-htmlbars';
import { tracked } from "@glimmer/tracking";

module('Integration | Component | r-paper-i-mask-text-field', function(hooks) {
  setupRenderingTest(hooks);

  TestSimpleRender('RPaperIMaskTextField');

  test('it displays the correct text value', async function(assert) {

    await render(hbs`
      <RPaperTextField @id="test-me" @value="some-value" />
    `);

    next(this, function() {
      const testElement = document.getElementById('test-me');
      assert.equal(testElement.nodeName, 'INPUT', `element type is an 'input'`);
      assert.equal(testElement.value, 'some-value', `input value matched passed value`);
    });
  });

  test('it applies the input mask correctly', async function(assert) {
    class MyContext {
      @tracked inputMaskTextValue = null;
      @tracked inputUnMaskedTextValue = null;
    }
    let ctx = new MyContext();
    this.setProperties({ctx});

    this.set('blocks', {
      num: {
        mask: Number,
        thousandsSeparator: ','
      }
    });

    this.set('mask', '$num');

    this.set('onInputTextInputMaskChanged', (evt) => {
      this.ctx.inputMaskTextValue = evt.target.maskedValue;
      this.ctx.inputUnMaskedTextValue =evt.target.value;
    });


    await render(hbs`
      <div>
        <RPaperIMaskTextField @id="test-me" @mask={{this.mask}} @blocks={{this.blocks}} @nativeOnChange={{true}} @value="1234" @onChange={{this.onInputTextInputMaskChanged}} />
      </div>
    `);

    next(this, async function() {
      const testElement = document.getElementById('test-me');
      assert.equal(testElement.nodeName, 'INPUT', `element type is not an 'input'`);
      assert.equal(testElement.value, '$1,234', `masked text value is what it should be: '$1,234'`)
      await fillIn(testElement, '1235');
      assert.equal(this.ctx.inputUnMaskedTextValue, '1235', `unmasked text value is what it should be: '1235'`);
      assert.equal(this.ctx.inputMaskTextValue, '$1,235', `masked text value is what it should be: '$1,235`);
    });
  });
});




