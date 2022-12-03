import { module, test } from 'qunit';
import { ALERT } from "ember-paper-react/constants/alert";
import { setupRenderingTest } from 'ember-qunit';
import { TestStandardLocationRender } from "../standard-tests/rendering-tests";
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | r-paper-alert', function(hooks) {
  setupRenderingTest(hooks);

  TestStandardLocationRender('RPaperAlert');

  test('it renders content into the correct location', async function(assert) {
    await render(hbs`
      <div>
        <RPaperAlert @id="test-me" @component="div">
          <:message>template block text</:message>
          <:action><button id='ok-button'>OK</button></:action>
        </RPaperAlert>
      </div>
    `);

    const testElement = document.getElementById('test-me');
    assert.equal(testElement.querySelector(`.${ALERT.MESSAGE_SPAN}`).textContent.trim(), 'template block text');
    assert.equal(testElement.querySelector(`.${ALERT.ACTION_SPAN}`).textContent.trim(), 'OK');

  });
});

