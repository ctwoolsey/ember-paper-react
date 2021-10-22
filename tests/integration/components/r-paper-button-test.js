import { module, test } from 'qunit';
import { BUTTON } from "ember-paper-react/constants/button";
import { setupRenderingTest } from 'ember-qunit';
import { render, click} from '@ember/test-helpers';
import { TestSimpleRender, TestStandardLocationChangingContent } from "../standard-tests/rendering-tests";
import { hbs } from 'ember-cli-htmlbars';
import AccessAlarmRounded from '@mui/icons-material/AccessAlarmRounded';
import Service from '@ember/service';



module('Integration | Component | r-paper-button', function(hooks) {
  setupRenderingTest(hooks);

  class RouterStub extends Service {
    transitionToHrefValue = null;

    transitionTo = (href) => {
      this.transitionToHrefValue = href;
    };
  }

  //Render just button text
  TestSimpleRender('RPaperButton');
  TestStandardLocationChangingContent('RPaperButton');

  test('it places button text between icons', async function(assert) {
    this.set('iconToUseFront', {icon: AccessAlarmRounded});
    this.set('iconToUseBack', AccessAlarmRounded);
    await render(hbs`
      <div>
        <RPaperButton @id='test-me' @startIcon={{this.iconToUseFront}} @endIcon={{this.iconToUseBack}}>
          Some Button Text
        </RPaperButton>
      </div>
    `);

    const testElement = document.getElementById('test-me');
    assert.ok(testElement, `test-me found`);
    assert.equal(testElement.nodeName, 'BUTTON', `found button element`);
    const buttonTextElement = testElement.querySelector(`.${BUTTON.CONTENT_SPAN_CLASS_NAME}`);
    assert.ok(buttonTextElement, `Button text element found`);
    assert.equal(buttonTextElement.textContent.trim(), 'Some Button Text', `Button text matched`);
    const startSVGIconElement = testElement.querySelectorAll('[data-testid]');
    assert.equal(startSVGIconElement.length, '2', `SVG count matched expected`);
  });

  test('it calls transitionTo when using href', async function(assert) {
    this.owner.register('service:router', RouterStub);
    const routerService = this.owner.lookup('service:router');

    await render(hbs`
      <div>
        <RPaperButton @id='test-me' @href="my-href-value">
          Some Button Text
        </RPaperButton>
      </div>
    `);

    const testElement = document.getElementById('test-me');
    assert.notOk(routerService.transitionToHrefValue, `'transitionToHrefValue' was null`);
    await click(testElement);
    assert.equal(routerService.transitionToHrefValue, 'my-href-value', `transitionTo was called with correct href`);
  });
});



