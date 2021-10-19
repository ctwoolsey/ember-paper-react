import { module, test } from "qunit";
import { setupRenderingTest } from 'ember-qunit';
import { render, settled } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";
import { tracked } from "@glimmer/tracking";

module('Integration | Component | r-paper-card-media', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders content into the correct location', async function(assert) {
    await render(hbs`
      <div>
        <RPaperCardMedia @id="test-me" @component="div">
          template block text
        </RPaperCardMedia>
      </div>
    `);

    const testElement = document.getElementById('test-me');
    assert.equal(testElement.textContent.trim(), 'template block text');

  });


  test('it renders dynamic content correctly', async function(assert) {

    class MyContext {
      @tracked eachTest = [1,2,3];
    }
    let ctx = new MyContext();
    this.setProperties({ctx});

    await render(hbs`
      <div>
        <RPaperCardMedia @id="test-me" @component="div">
          {{#each this.ctx.eachTest}}
            <div>A</div>
          {{/each}}
        </RPaperCardMedia>
      </div>
    `);

    let testElement;
    testElement = document.getElementById('test-me');
    assert.equal(testElement.childElementCount, 3, `Children count does not match initial count`);

    ctx.eachTest = [1,2,3,4];
    await settled();
    assert.equal(testElement.childElementCount, 4, `Children count does not match added count`);

    ctx.eachTest = [1,2];
    await settled();
    assert.equal(testElement.childElementCount, 2, `Children count does not match removed count`);
  });


  test('it has text content that can be updated', async function(assert) {
    class MyContext {
      @tracked changeableContent = 'A';
    }
    let ctx = new MyContext();
    this.setProperties({ctx});

    await render(hbs`
      <div>
        <RPaperCardMedia @id="test-me" @component="div">
          {{this.ctx.changeableContent}}
        </RPaperCardMedia>
      </div>
    `);

    let testElement;
    testElement = document.getElementById('test-me');
    assert.equal(testElement.textContent.trim(), 'A', `Initial text content is incorrect`);

    ctx.changeableContent = 'B';
    await settled();
    assert.equal(testElement.textContent.trim(), 'B', `Changed text content is incorrect`);

  });
});


