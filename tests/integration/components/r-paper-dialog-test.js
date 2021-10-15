import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { tracked } from "@glimmer/tracking";

module('Integration | Component | r-paper-dialog', function(hooks) {
  setupRenderingTest(hooks);

  test('it opens dialog', async function(assert) {
    class MyContext {
      @tracked dialogOpen = false;
    }
    let ctx = new MyContext();
    this.setProperties({ctx});

    await render(hbs`
      <div>
        <RPaperDialog @id='test-me' @open={{this.ctx.dialogOpen}} >
          template block text
        </RPaperDialog>
      </div>
    `);

    let dialogPresentationElement = document.getElementById('test-me');
    assert.notOk(dialogPresentationElement, `dialogPresentationElement not open`);

    this.ctx.dialogOpen = true;
    await settled();

    dialogPresentationElement = document.getElementById('test-me');
    assert.ok(dialogPresentationElement, `dialogPresentationElement opened`);
    assert.equal(dialogPresentationElement.textContent.trim(), 'template block text', `dialog content rendered correctly`);

    this.ctx.dialogOpen = false;
  });

});
