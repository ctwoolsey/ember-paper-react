import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, fillIn } from '@ember/test-helpers';
import { next } from '@ember/runloop';
import { TestSimpleRender } from "../standard-tests/rendering-tests";
import { hbs } from 'ember-cli-htmlbars';
import { tracked } from "@glimmer/tracking";
import { act, fireEvent } from '@testing-library/react';

module('Integration | Component | r-paper-number-format-text-field', function(hooks) {
  setupRenderingTest(hooks);

  TestSimpleRender('RPaperNumberFormatTextField');

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

    this.set('thousandSeparator', true);
    this.set('prefix', '$ ');
    this.set('decimalScale', 0);

    this.set('onInputTextInputMaskChanged', (evt) => {
      this.ctx.inputMaskTextValue = evt.target.maskedValue;
      this.ctx.inputUnMaskedTextValue =evt.target.value;
    });


    await render(hbs`
      <div>
        <RPaperNumberFormatTextField @id="test-me" @thousandSeparator={{this.thousandSeparator}} @prefix={{this.prefix}} @decimalScale={{this.decimalScale}} @nativeOnChange={{true}} @value="1234" @onChange={{this.onInputTextInputMaskChanged}} />
      </div>
    `);

    next(this, async function() {
      const testElement = document.getElementById('test-me');
      assert.equal(testElement.nodeName, 'INPUT', `element type is not an 'input'`);
      assert.equal(testElement.value, '$ 1,234', `masked text value is what it should be: '$ 1,234'`)
      act(() => {
        testElement.focus();
        fireEvent.change(document.activeElement, {target: {value: '1235'}});
      });
      assert.equal(this.ctx.inputUnMaskedTextValue, '1235', `unmasked text value is what it should be: '1235'`);
      assert.equal(this.ctx.inputMaskTextValue, '$ 1,235', `masked text value is what it should be: '$ 1,235`);
    });
  });
});






