import { module, test } from "qunit";
import { setupRenderingTest } from 'ember-qunit';
import { tracked } from "@glimmer/tracking";
import AccessAlarmRounded from "@mui/icons-material/AccessAlarmRounded";
import { click, render, settled } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";
import AcUnit from "@mui/icons-material/AcUnit";
import Service from '@ember/service';

module('Integration | Component | r-paper-fab', function(hooks) {
  setupRenderingTest(hooks);

  class RouterStub extends Service {
    transitionToHrefValue = null;

    transitionTo = (href) => {
      this.transitionToHrefValue = href;
    };
  }

  test('it renders with react Icon', async function(assert) {
    class MyContext {
      @tracked reactIcon = AccessAlarmRounded;
    }
    let ctx = new MyContext();
    this.setProperties({ctx});

    await render(hbs`
      <div>
        <RPaperFab @id='test-me' >
          <RPaperIcon @reactIcon={{this.ctx.reactIcon}} />
        </RPaperFab>
      </div>
    `);

    let testElement = document.getElementById('test-me');
    assert.ok(testElement, `found button`);
    let testElementSVGIcon = testElement.firstElementChild;
    assert.ok(testElementSVGIcon, `found icon`);
    assert.equal(testElementSVGIcon.nodeName, 'svg', `icon is SVG`);
    assert.equal(testElementSVGIcon.dataset.testid, 'AccessAlarmRoundedIcon', `correct icon found initially`);

    this.ctx.reactIcon = AcUnit;
    await settled();
    testElement = document.getElementById('test-me');
    assert.ok(testElement, `found button`);
    testElementSVGIcon = testElement.firstElementChild;
    assert.ok(testElementSVGIcon, `found icon`);
    assert.equal(testElementSVGIcon.nodeName, 'svg', `icon is SVG`);
    assert.equal(testElementSVGIcon.dataset.testid, 'AcUnitIcon', `correct icon found after icon update`);
  });

  test('it calls transitionTo when using href', async function(assert) {
    this.owner.register('service:router', RouterStub);
    const routerService = this.owner.lookup('service:router');

    await render(hbs`
      <div>
        <RPaperFab @id='test-me' @href="my-href-value" @variant="extended">
          Some Text
        </RPaperFab>
      </div>
    `);

    const testElement = document.getElementById('test-me');
    assert.notOk(routerService.transitionToHrefValue, `'transitionToHrefValue' was null`);
    await click(testElement);
    assert.equal(routerService.transitionToHrefValue, 'my-href-value', `transitionTo was called with correct href`);
  });
});

