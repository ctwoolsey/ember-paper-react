import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled } from '@ember/test-helpers';
import { A } from '@ember/array';
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
      @tracked contentList = A(['A', 'B', 'C']);
    }
    let ctx = new MyContext();
    this.setProperties({ctx});

    await render(hbs`
      <div>
        <RPaperDrawer @id='test-me' @open={{this.ctx.drawerOpen}} @variant="temporary" >
          {{#each this.ctx.contentList as |contentItem|}}
            <div>{{contentItem}}</div>
          {{/each}}
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
    let contentContainer = drawerElement.querySelector('.MuiDrawer-paper');
    assert.equal(contentContainer.children.length, 3, `rendered children correctly`);
    assert.equal(contentContainer.children[0].textContent.trim(), 'A', `'A' rendered as expected`);
    assert.equal(contentContainer.children[1].textContent.trim(), 'B', `'B' rendered as expected`);
    assert.equal(contentContainer.children[2].textContent.trim(), 'C', `'C' rendered as expected`);

    this.ctx.contentList = A(['A', 'B', 'C', 'D']);
    await settled();
    contentContainer = drawerElement.querySelector('.MuiDrawer-paper');
    assert.equal(contentContainer.children.length, 4, `rendered added children correctly`);
    assert.equal(contentContainer.children[3].textContent.trim(), 'D', `'D' rendered as expected`);

    this.ctx.contentList = A(['A', 'B']);
    await settled();
    contentContainer = drawerElement.querySelector('.MuiDrawer-paper');
    assert.equal(contentContainer.children.length, 2, `rendered removed children correctly`);
    assert.equal(contentContainer.children[0].textContent.trim(), 'A', `'A' rendered as expected`);
    assert.equal(contentContainer.children[1].textContent.trim(), 'B', `'B' rendered as expected`);

    this.ctx.drawerOpen = false;

  });

});
