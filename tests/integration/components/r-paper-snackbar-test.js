import { module, test } from 'qunit';
import { SNACKBAR } from "ember-paper-react/constants/snackbar";
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | r-paper-snackbar', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders action content into the correct location', async function(assert) {
    await render(hbs`
      <div>
        <RPaperSnackbar @id="test-me" @open={{true}}>
          <:action><button id='ok-button'>OK</button></:action>
        </RPaperSnackbar>
      </div>
    `);

    const testElement = document.getElementById('test-me');
    const actionSpan = testElement.querySelector(`.${SNACKBAR.ACTION_SPAN}`);
    assert.equal(actionSpan.children[0].nodeName, 'BUTTON', 'found button element');
    assert.equal(actionSpan.children[0].textContent.trim(), 'OK', 'action button text matches');

  });

  test('it renders secondary content correctly', async function(assert) {
    await render(hbs`
      <div>
        <RPaperSnackbar @id="test-me" @open={{true}}>
          <span id='test-span'>OK</span>
        </RPaperSnackbar>
      </div>
    `);

    const testElement = document.getElementById('test-me');
    const reactWrapChildrenSpan = testElement.querySelector(`.react-wrap-children`);
    assert.ok(reactWrapChildrenSpan, `wrap span found`);
    assert.equal(reactWrapChildrenSpan.children[0].nodeName, 'SPAN', 'span found');
    assert.equal(reactWrapChildrenSpan.children[0].textContent.trim(), 'OK', 'span text matches');

  });
});

