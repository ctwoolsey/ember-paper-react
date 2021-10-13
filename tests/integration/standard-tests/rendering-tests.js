import { test } from "qunit";
import { render, settled } from "@ember/test-helpers";
import { next } from '@ember/runloop';
import { compileTemplate } from '@ember/template-compilation';
import { tracked } from "@glimmer/tracking";

const TestStandardLocationRender = (ComponentToRender) => {
  test('it renders content into the correct location', async function(assert) {
    await render(compileTemplate(`
      <div>
        <${ComponentToRender} @id="test-me">
          template block text
        </${ComponentToRender}>
      </div>
    `));
    next(this, function() {
      const testElement = document.getElementById('test-me');
      assert.equal(testElement.textContent.trim(), 'template block text');
    });
  });
};

const TestStandardLocationDynamicRender = (ComponentToRender) => {
  test('it renders dynamic content correctly', async function(assert) {
    class MyContext {
      @tracked eachTest = [1,2,3];
    }
    let ctx = new MyContext();
    this.setProperties({ctx});

    await render(compileTemplate(`
      <div>
        <${ComponentToRender} @id="test-me">
          {{#each this.ctx.eachTest}}
            <div>A</div>
          {{/each}}
        </${ComponentToRender}>
      </div>
    `));

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
};

export {
  TestStandardLocationRender,
  TestStandardLocationDynamicRender
}
