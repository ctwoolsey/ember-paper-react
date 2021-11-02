import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled } from "@ember/test-helpers";
import { next } from '@ember/runloop';
import { tracked } from "@glimmer/tracking";
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | r-paper-tooltip', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders and renders dynamic content correctly', async function(assert) {
    class MyContext {
      @tracked tooltipButtonText = 'Click Me';
      @tracked tooltipText = 'this is a tooltip';
    }
    let ctx = new MyContext();
    this.setProperties({ctx});
    this.set('tooltipId', 'this-is-tooltip');

    await render(hbs`
                  <RPaperTooltip @id={{this.tooltipId}} @open={{true}} @title={{this.ctx.tooltipText}} >
                    {{this.ctx.tooltipButtonText}}
                  </RPaperTooltip>
                `);

    let tooltipClasses = null;
    let tooltipContentWrapper = null;
    let tooltipTextElement = null;
    let tooltipPopup = null;
    next(this, function() {
      tooltipClasses = document.getElementsByClassName('ember-paper-react-tooltip');
      assert.equal(tooltipClasses.length, 1, 'Too many tooltipClasses found');
      tooltipClasses[0].className.includes('tooltip-cursor-pointer-enabled');
      tooltipContentWrapper = tooltipClasses[0].children[0]
      assert.ok(tooltipContentWrapper.className.includes('ember-paper-react-tooltip-content-wrapper'), `Wrong child`);
      assert.equal(tooltipContentWrapper.textContent.trim(), this.ctx.tooltipButtonText, `Tooltip didn't wrap component correctly`);
      tooltipPopup = document.getElementById(this.tooltipId);
      assert.ok(tooltipPopup, `Tooltip pop-up not found`);
      tooltipTextElement = tooltipPopup.children[0].firstChild;
      assert.equal(tooltipTextElement.textContent.trim(), this.ctx.tooltipText, `Tooltip text is not correct`);
    });

    await settled();
    ctx.tooltipButtonText = 'A';
    ctx.tooltipText = 'B';
    await settled();
    tooltipClasses = document.getElementsByClassName('ember-paper-react-tooltip');
    assert.equal(tooltipClasses.length, 1, 'Too many tooltipClasses found after modification');
    assert.ok(tooltipContentWrapper.className.includes('ember-paper-react-tooltip-content-wrapper'), `Wrong child after modification`);
    assert.equal(tooltipContentWrapper.textContent.trim(), this.ctx.tooltipButtonText, `Tooltip didn't wrap component correctly after modification`);
    assert.ok(tooltipPopup, `Tooltip pop-up not found after modification`);
    assert.equal(tooltipTextElement.textContent.trim(), this.ctx.tooltipText, `Tooltip text is not correct after modification`);
  });
});
