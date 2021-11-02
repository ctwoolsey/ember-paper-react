import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, settled } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { tracked } from "@glimmer/tracking";

module('Integration | Component | r-paper-card-header', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders with all sub react nodes', async function(assert) {
    class MyContext {
      @tracked cardTitle = 'A';
      @tracked avatarText = 'B';
      @tracked subheader = 'D';
    }
    let ctx = new MyContext();
    this.setProperties({ctx});
    this.set('changeCardTitle', () => {
      this.ctx.cardTitle = 'C';
    });

    await render(hbs`
      <div>
        <RPaperCardHeader @id='test-me'>
          <:avatar><RPaperAvatar>{{this.ctx.avatarText}}</RPaperAvatar></:avatar>
          <:action><RPaperButton @id='test-button' @onClick={{this.changeCardTitle}}>Change Card Title</RPaperButton></:action>
          <:subheader>{{this.ctx.subheader}}</:subheader>
          <:title>{{this.ctx.cardTitle}}</:title>
        </RPaperCardHeader>
      </div>
    `);

    let testElement = document.getElementById('test-me');
    assert.ok(testElement, `found card header`);

    let avatar = testElement.querySelector('.MuiCardHeader-avatar');
    assert.ok(avatar, `found avatar in header`);
    assert.equal(avatar.firstElementChild.textContent.trim(), 'B', `Avatar content matches expected`);

    let content = testElement.querySelector('.MuiCardHeader-content');
    assert.ok(content, `found content in header`);
    assert.equal(content.childElementCount, 2, `content has correct number of children`);
    assert.equal(content.querySelector('.MuiCardHeader-title').textContent.trim(), 'A', `Title is correct`);
    assert.equal(content.querySelector('.MuiCardHeader-subheader').textContent.trim(), 'D', `Subheader is correct`);


    let action = testElement.querySelector('.MuiCardHeader-action');
    assert.ok(action, `found action in header`);
    assert.equal(action.firstElementChild.nodeName, 'BUTTON', `action is a button`);
    assert.equal(action.firstElementChild.textContent.trim(), 'Change Card Title', `button text is as expected`);

    this.ctx.avatarText = 'X';
    this.ctx.subheader = 'Y';
    const testButton = document.getElementById('test-button');
    await click(testButton);

    avatar = testElement.querySelector('.MuiCardHeader-avatar');
    assert.equal(avatar.firstElementChild.textContent.trim(), 'X', `updated avatar content matches expected`);

    content = testElement.querySelector('.MuiCardHeader-content');
    assert.equal(content.querySelector('.MuiCardHeader-title').textContent.trim(), 'C', `updated title is correct`);
    assert.equal(content.querySelector('.MuiCardHeader-subheader').textContent.trim(), 'Y', `updated subheader is correct`);
  });

  test('it renders with all only title and sub-header as attributes', async function(assert) {
    class MyContext {
      @tracked cardTitle = 'A';
      @tracked subheader = 'D';
    }
    let ctx = new MyContext();
    this.setProperties({ctx});

    await render(hbs`
      <div>
        <RPaperCardHeader @id='test-me' @title={{this.ctx.cardTitle}} @subheader={{this.ctx.subheader}} />
      </div>
    `);

    const testElement = document.getElementById('test-me');
    assert.ok(testElement, `found card header`);
    assert.equal(testElement.childElementCount, 1, `correct number of children found for header`);

    let content = testElement.querySelector('.MuiCardHeader-content');
    assert.ok(content, `found content in header`);
    assert.equal(content.childElementCount, 2, `content has correct number of children`);
    assert.equal(content.querySelector('.MuiCardHeader-title').textContent.trim(), 'A', `Title is correct`);
    assert.equal(content.querySelector('.MuiCardHeader-subheader').textContent.trim(), 'D', `Subheader is correct`);

  });

  test('it renders with only avatar and blank title', async function(assert) {
    class MyContext {
      @tracked avatarText = 'B';
    }
    let ctx = new MyContext();
    this.setProperties({ctx});

    await render(hbs`
      <div>
        <RPaperCardHeader @id='test-me' >
          <:avatar><RPaperAvatar>{{this.ctx.avatarText}}</RPaperAvatar></:avatar>
        </RPaperCardHeader>
      </div>
    `);

    const testElement = document.getElementById('test-me');
    assert.ok(testElement, `found card header`);
    assert.equal(testElement.childElementCount, 2, `correct number of children found for header`);

    let content = testElement.querySelector('.MuiCardHeader-content');
    assert.ok(content, `found content in header`);
    assert.equal(content.childElementCount, 2, `content has correct number of children`);
    assert.equal(content.querySelector('.MuiCardHeader-title').textContent.trim(), '', `Title is correct`);
    assert.equal(content.querySelector('.MuiCardHeader-subheader').textContent.trim(), '', `Subheader is correct`);

    let avatar = testElement.querySelector('.MuiCardHeader-avatar');
    assert.ok(avatar, `found avatar in header`);
    assert.equal(avatar.firstElementChild.textContent.trim(), 'B', `Avatar content matches expected`);

  });
});
