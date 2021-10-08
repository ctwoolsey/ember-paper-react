import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { next } from '@ember/runloop';

module('Integration | Component | attribute-node-child', function(hooks) {
  setupRenderingTest(hooks);

  test('it correctly returns loadAttribute data', async function(assert) {
    this.attributeName = null;
    this.fragment = null;
    this.moveMethod = null;

    this.set('onLoadAttributes', (attributeName, fragment, moveMethod) => {
      this.attributeName = attributeName;
      this.fragment = fragment;
      this.moveMethod = moveMethod;
    });

    await render(hbs`<AttributeNodeChild @attribute="testAttribute" @loadAttributeInfo={{this.onLoadAttributes}}>
                      <div>A</div>
                      <div>B</div>
                    </AttributeNodeChild>`);

    assert.equal(this.attributeName, 'testAttribute');
    assert.equal(this.fragment.childElementCount, 2);
    assert.equal(this.fragment.children[0].textContent, 'A');

    const movedDiv = document.createElement('div');
    this.moveMethod(movedDiv);
    next(this, function() {
      assert.equal(this.fragment.childElementCount, 0);
      assert.equal(movedDiv.childElementCount, 2);
      assert.equal(movedDiv.children[0].textContent, 'A');
      assert.equal(movedDiv.children[1].textContent, 'B');
    });
  });
});
