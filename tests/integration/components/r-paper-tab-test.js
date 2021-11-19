import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from "@ember/test-helpers";
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | r-paper-tab', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<div><RPaperTab @value={{3}} @label="my-tab" /></div>`);

    const testElement = document.getElementById('simple-tab-3');
    assert.equal(testElement.nodeName, 'BUTTON', 'tab element is a button');
    assert.equal(testElement.getAttribute('aria-controls'), 'simple-tabpanel-3', 'aria-controls set correctly');
    assert.equal(testElement.textContent.trim(), 'my-tab', 'tab is correctly labeled');
  });

  test('it renders with an href', async function(assert) {
    await render(hbs`<div><RPaperTab id="test-me" @href="my-link" @value={{3}} @label="my-tab" /></div>`);

    const testElement = document.getElementById('test-me');
    assert.equal(testElement.nodeName, 'A', 'tab element is an anchor');
    assert.equal(testElement.getAttribute('href'), 'my-link', 'href set correctly');
    assert.equal(testElement.textContent.trim(), 'my-tab', 'tab is correctly labeled');
  });
});

