import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { next } from '@ember/runloop';

module('Integration | Component | r-paper', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`
      <RPaper @id="test-me">
        template block text
      </RPaper>
    `);

    next(this, function() {
      const testElement = document.getElementById('test-me');
      assert.equal(testElement.textContent.trim(), 'template block text');
    });

  });
});
