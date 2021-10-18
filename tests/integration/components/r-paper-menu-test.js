import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled, click} from '@ember/test-helpers';
import { A } from '@ember/array';
import { hbs } from 'ember-cli-htmlbars';
import { tracked } from "@glimmer/tracking";

module('Integration | Component | r-paper-menu', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    class MyContext {
      @tracked menuOpen = false;
      @tracked contentList = A(['Menu A', 'Menu B', 'Menu C']);
    }
    let ctx = new MyContext();
    this.setProperties({ctx});

    this.set('onToggleMenu', () => {
      this.ctx.menuOpen = !this.ctx.menuOpen;
    });
    this.set('onMenuClose', () => {
      this.ctx.menuOpen = false;
    });


    await render(hbs`
        <div>
          <button id='menuTrigger' onclick={{this.onToggleMenu}}>Toggle Menu by triggerId</button>
          <RPaperMenu @id='test-me' @triggerId="menuTrigger" @open={{this.ctx.menuOpen}} @onClose={{this.onMenuClose}}>
            {{#each this.ctx.contentList as |contentItem|}}
              <RPaperMenuItem>{{contentItem}}</RPaperMenuItem>
            {{/each}}
          </RPaperMenu>
        </div>
    `);

    const menuTrigger = document.getElementById('menuTrigger');
    assert.ok(menuTrigger, `found menu trigger button`);
    assert.false(this.ctx.menuOpen, `menu is initially closed`);
    await click(menuTrigger);
    assert.true(this.ctx.menuOpen, `menu is open`);

    let testElement = document.getElementById('test-me');
    assert.ok(testElement, `found menu block`);
    let listItems = testElement.querySelectorAll('li');
    assert.equal(listItems.length, 3, `correct number of menu items found`);

    this.ctx.contentList.pushObject('Menu D');
    await settled();
    listItems = testElement.querySelectorAll('li');
    assert.equal(listItems.length, 4, `correct number of menu items found`);

    this.ctx.contentList.popObject();
    this.ctx.contentList.popObject();
    await settled();
    listItems = testElement.querySelectorAll('li');
    assert.equal(listItems.length, 2, `correct number of menu items found`);

    await click(menuTrigger);
    assert.false(this.ctx.menuOpen, `menu is closed again`);

  });
});
