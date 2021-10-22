import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { AVATAR } from 'ember-paper-react/constants/avatar';
import { render, settled } from '@ember/test-helpers';
import { A } from '@ember/array';
import { hbs } from 'ember-cli-htmlbars';
import { tracked } from "@glimmer/tracking";

module('Integration | Component | r-paper-avatar-group', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders correctly', async function(assert) {
    class MyContext {
      @tracked avatarContentList = A(['A', 'B', 'C']);
      @tracked avatarVariant = 'circular';
    }
    let ctx = new MyContext();
    this.setProperties({ctx});

    await render(hbs`
      <div>
        <RPaperAvatarGroup @id='test-me' @variant={{this.ctx.avatarVariant}}>
          {{#each this.ctx.avatarContentList as |avatarContentItem|}}
            <RPaperAvatar>{{avatarContentItem}}</RPaperAvatar>
          {{/each}}
        </RPaperAvatarGroup>
      </div>
    `);

    let testElement = document.getElementById('test-me');
    assert.ok(testElement,`avatar group rendered`);
    assert.equal(testElement.childElementCount, `3`, `avatar group has correct number of children`);
    for(let i = 0; i < testElement.children.length; i++) {
      assert.true(testElement.children[i].className.includes(AVATAR.VARIATION_CIRCULAR_CLASS), `avatar group passes correct variant to children`);
    }
    this.ctx.avatarContentList.pushObject('D');
    await settled();
    assert.equal(testElement.childElementCount, `4`, `avatar group has correct number of added children`);
    this.ctx.avatarContentList.popObject();
    this.ctx.avatarContentList.popObject();
    this.ctx.avatarVariant = 'square';
    await settled();
    assert.equal(testElement.childElementCount, `2`, `avatar group has correct number of removed children`);
    for(let i = 0; i < testElement.children.length; i++) {
      assert.true(testElement.children[i].className.includes(AVATAR.VARIATION_SQUARE_CLASS), `avatar group passes updated correct variant to children`);
    }
  });
});
