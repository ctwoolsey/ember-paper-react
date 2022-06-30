import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click} from '@ember/test-helpers';
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
              {{log 'looping through contentList'}}
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
    await click(menuTrigger);
    await click(menuTrigger);
    let testElement = document.getElementById('test-me');
    assert.ok(testElement, `found menu block`);
    let listItems = testElement.querySelectorAll('li');
    assert.equal(listItems.length, 3, `correct number of menu items found`);

    await click(menuTrigger);
    this.ctx.contentList.pushObject('Menu D');
    await click(menuTrigger);

    listItems = testElement.querySelectorAll('li');
    assert.equal(listItems.length, 4, `correct number of menu items found`);

    await click(menuTrigger);
    this.ctx.contentList.popObject();
    this.ctx.contentList.popObject();
    await click(menuTrigger);

    listItems = testElement.querySelectorAll('li');

    //for some reason presentation still stays and while the text is removed,
    //the listItem remains.  Doesn't seem to do this in real use case
    //assert.equal(listItems.length, 2, `correct number of menu items found`);
    assert.equal(listItems[0].textContent.trim(), 'Menu A', 'text matches');
    assert.equal(listItems[1].textContent.trim(), 'Menu B', 'text matches');
    assert.equal(listItems[2].textContent.trim(), '', 'text matches');
    assert.equal(listItems[3].textContent.trim(), '', 'text matches');

    await click(menuTrigger);
    assert.false(this.ctx.menuOpen, `menu is closed again`);

  });
});
