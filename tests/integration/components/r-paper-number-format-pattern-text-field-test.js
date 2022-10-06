import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { TestSimpleRender } from '../standard-tests/rendering-tests';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { next } from '@ember/runloop';

module('Integration | Component | r-paper-number-format-pattern-text-field', function(hooks) {
  setupRenderingTest(hooks);

  TestSimpleRender('RPaperNumberFormatPatternTextField');

  test('it displays the correct formatted text value', async function(assert) {

    await render(hbs`
      <RPaperNumberFormatPatternTextField @id="test-me" @value={{123123}} @format="### ###"/>
    `);

    next(this, function() {
      const testElement = document.getElementById('test-me');
      assert.equal(testElement.nodeName, 'INPUT', `element type is an 'input'`);
      assert.equal(testElement.value, '123 123', `input value matched passed value`);
    });
  });

  test('it displays the correct empty format text value with mask', async function(assert) {

    await render(hbs`
      <RPaperNumberFormatPatternTextField @id="test-me" @format="+1 (###) #### ###" @allowEmptyFormatting={{true}} @mask="_"/>
    `);

    next(this, function() {
      const testElement = document.getElementById('test-me');
      assert.equal(testElement.nodeName, 'INPUT', `element type is an 'input'`);
      assert.equal(testElement.value, '+1 (___) ____ ___', `input value matched passed value`);
    });
  });
});

