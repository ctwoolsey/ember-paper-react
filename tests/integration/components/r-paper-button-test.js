import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled} from '@ember/test-helpers';
import { next } from '@ember/runloop';
import { TestSimpleRender, TestStandardLocationChangingContent } from "../standard-tests/rendering-tests";
import { hbs } from 'ember-cli-htmlbars';
import { tracked } from "@glimmer/tracking";
import AccessAlarmRounded from '@mui/icons-material/AccessAlarmRounded';

module('Integration | Component | r-paper-button', function(hooks) {
  setupRenderingTest(hooks);

  //Render just button text
  TestSimpleRender('RPaperButton');
  TestStandardLocationChangingContent('RPaperButton');

  test('it places button text between icons', async function(assert) {
    setupRenderingTest(hooks);
    this.set('iconToUse', {icon: AccessAlarmRounded});
    await render(hbs`
      <div>
        <RPaperButton @id='test-me' @startIcon={{this.iconToUse}} @endIcon={{this.iconToUse}}>
          Some Button Text
        </RPaperButton>
      </div>
    `);

    next(this, async function() {
      const testElement = document.getElementById('test-me');
      assert.ok(testElement, `test-me found`);
      assert.equal(testElement.nodeName, 'BUTTON', `found button element`);
      const buttonTextElement = testElement.querySelector('.ember-paper-button-content');
      assert.ok(buttonTextElement, `Button text element found`);
      assert.equal(buttonTextElement.textContent.trim(), 'Some Button Text', `Button text matched`);
      const startSVGIconElement = testElement.querySelectorAll('[data-testid]');
      assert.equal(startSVGIconElement.length, '2', `SVG count matched expected`);
    });
  });


});



