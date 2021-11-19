import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { RunStandardTests } from "../standard-tests/rendering-tests";
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | r-paper-tab-panel', function(hooks) {
  setupRenderingTest(hooks);

  RunStandardTests('RPaperTabPanel');

  test('it hides the tab', async function(assert) {
    await render(hbs`<div><RPaperTabPanel  @id="test-me" @value={{1}} @index={{0}}>PaperTab Item</RPaperTabPanel></div>`);

    const testElement = document.getElementById('test-me');
    assert.true(testElement.hasAttribute('hidden'));
  });

  test('it shows the tab', async function(assert) {
    await render(hbs`<div><RPaperTabPanel  @id="test-me" @value={{0}} @index={{0}}>PaperTab Item</RPaperTabPanel></div>`);

    const testElement = document.getElementById('test-me');
    assert.false(testElement.hasAttribute('hidden'));
  });
});

