import { module, test } from "qunit";
import { setupRenderingTest } from 'ember-qunit';
import { tracked } from "@glimmer/tracking";
import AccessAlarmRounded from "@mui/icons-material/AccessAlarmRounded";
import { render, settled } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";
import AcUnit from "@mui/icons-material/AcUnit";

module('Integration | Component | r-paper-icon-button', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders native react Icon', async function(assert) {
    class MyContext {
      @tracked reactIcon = AccessAlarmRounded;
    }
    let ctx = new MyContext();
    this.setProperties({ctx});

    await render(hbs`
      <div>
        <RPaperIconButton @id='test-me' >
          <RPaperIcon @reactIcon={{this.ctx.reactIcon}} />
        </RPaperIconButton>
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
});

