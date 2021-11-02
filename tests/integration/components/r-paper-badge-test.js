import { module, test } from "qunit";
import { setupRenderingTest } from 'ember-qunit';
import { GLOBAL_STRINGS } from "ember-paper-react/constants/constants";
import { BADGE } from "ember-paper-react/constants/badge";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module('Integration | Component | r-paper-badge', function(hooks) {
  setupRenderingTest(hooks);

  test('it places text in children-holder of badge', async function(assert) {
    await render(hbs`
      <div>
        <RPaperBadge @id='test-me' @badgeContent={{4}}>
          Some Badge Text
        </RPaperBadge>
      </div>
    `);

    const testElement = document.getElementById('test-me');
    assert.ok(testElement, `test-me found`);
    const badgeContent = testElement.querySelector(`.${GLOBAL_STRINGS.CHILDREN_HOLDER_CLASS_NAME}`);
    assert.ok(badgeContent, `Badge content found`);
    assert.equal(badgeContent.textContent.trim(), 'Some Badge Text', `Text matched`);
    assert.true(badgeContent.nextSibling.className.includes(`${BADGE.BADGE_CLASS_NAME}`), `Badge content was preserved`);

  });
});

