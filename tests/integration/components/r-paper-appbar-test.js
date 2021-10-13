import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled } from "@ember/test-helpers";
import { hbs } from 'ember-cli-htmlbars';
import { next } from '@ember/runloop';
import { tracked } from "@glimmer/tracking";

module('Integration | Component | r-paper-appbar', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders content into the correct location', async function(assert) {
    await render(hbs`
      <div>
        <RPaperAppbar @id="test-me">
          template block text
        </RPaperAppbar>
      </div>
    `);

    next(this, function() {
      const testElement = document.getElementById('test-me');
      assert.equal(testElement.textContent.trim(), 'template block text');
    });
  });

  test('it renders dynamic content correctly', async function(assert) {
    class MyContext {
      @tracked eachTest = [1,2,3];
    }
    let ctx = new MyContext();
    this.setProperties({ctx});

    await render(hbs`
      <div>
        <RPaperAppbar @id="test-me">
          {{#each this.ctx.eachTest}}
            <div>A</div>
          {{/each}}
        </RPaperAppbar>
      </div>
    `);

    let testElement;

    next(this, function() {
      testElement = document.getElementById('test-me');
      assert.equal(testElement.childElementCount, 3, `Children count does not match initial count`);
    });

    await settled();
    ctx.eachTest = [1,2,3,4];
    await settled();
    assert.equal(testElement.childElementCount, 4, `Children count does not match added count`);

    await settled();
    ctx.eachTest = [1,2];
    await settled();
    assert.equal(testElement.childElementCount, 2, `Children count does not match removed count`);
  });
});
