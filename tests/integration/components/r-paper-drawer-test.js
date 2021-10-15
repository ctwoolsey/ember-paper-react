import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { tracked } from "@glimmer/tracking";

module('Integration | Component | r-paper-drawer', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders and opens persistent drawer', async function(assert) {
    class MyContext {
      @tracked drawerOpen = false;
    }
    let ctx = new MyContext();
    this.setProperties({ctx});

    await render(hbs`
      <div>
        <RPaperDrawer @id='test-me' @open={{this.ctx.drawerOpen}} @variant="persistent">
          <div>drawer content</div>
        </RPaperDrawer>
      </div>
    `);

    let drawerElement = document.getElementById('test-me');
    assert.ok(drawerElement, `persistent drawer already open`);
    assert.equal(drawerElement.firstElementChild.style.visibility, `hidden`, `unopened drawer is hidden`);


    this.ctx.drawerOpen = true;
    await settled();

    drawerElement = document.getElementById('test-me');
    assert.ok(drawerElement, `drawer opened`);
    await settled();
    assert.equal(drawerElement.textContent.trim(), 'drawer content', `drawer content rendered correctly`);

    this.ctx.drawerOpen = false;
  });

  test('it renders and opens dynamic drawer', async function(assert) {
    class MyContext {
      @tracked drawerOpen = false;
    }
    let ctx = new MyContext();
    this.setProperties({ctx});

    await render(hbs`
      <div>
        <RPaperDrawer @id='test-me' @open={{this.ctx.drawerOpen}} >
          <div>drawer content</div>
        </RPaperDrawer>
      </div>
    `);

    let drawerElement = document.getElementById('test-me');
    assert.notOk(drawerElement, `drawer is not open`);

    this.ctx.drawerOpen = true;
    await settled();


    drawerElement = document.getElementById('test-me');
    assert.ok(drawerElement, `drawer opened`);
    await settled();
    assert.equal(drawerElement.textContent.trim(), 'drawer content', `drawer content rendered correctly`);

    this.ctx.drawerOpen = false;

  });

});
