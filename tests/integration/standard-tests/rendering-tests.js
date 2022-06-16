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
    testElement = document.getElementById('test-me');
    assert.equal(testElement.childElementCount, 3, `Children count does not match initial count`);

    ctx.eachTest = [1,2,3,4];
    await settled();
    assert.equal(testElement.childElementCount, 4, `Children count does not match added count`);

    ctx.eachTest = [1,2];
    await settled();
    assert.equal(testElement.childElementCount, 2, `Children count does not match removed count`);
  });
};

const TestStandardLocationChangingContent = (ComponentToRender) => {
  test('it has text content that can be updated', async function(assert) {
    class MyContext {
      @tracked changeableContent = 'A';
    }
    let ctx = new MyContext();
    this.setProperties({ctx});

    await render(compileTemplate(`
      <div>
        <${ComponentToRender} @id="test-me">
          {{this.ctx.changeableContent}}
        </${ComponentToRender}>
      </div>
    `));

    let testElement;
    testElement = document.getElementById('test-me');
    assert.equal(testElement.textContent.trim(), 'A', `Initial text content is incorrect`);

    ctx.changeableContent = 'B';
    await settled();
    assert.equal(testElement.textContent.trim(), 'B', `Changed text content is incorrect`);

  });
};

const TestSimpleRender = (ComponentToRender) => {
  test('it renders', async function(assert) {
    await render(compileTemplate(`
      <div>
        <${ComponentToRender} @id="test-me" />
      </div>
    `));

    next(this, function() {
      assert.ok(document.getElementById('test-me'));
    });
  });
};

const RunStandardTests = (ComponentToRender) => {
  TestStandardLocationRender(ComponentToRender);
  TestStandardLocationDynamicRender(ComponentToRender);
  TestStandardLocationChangingContent(ComponentToRender);
}

export {
  RunStandardTests,
  TestStandardLocationRender,
  TestStandardLocationDynamicRender,
  TestStandardLocationChangingContent,
  TestSimpleRender
}
