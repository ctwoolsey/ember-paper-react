import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import BaseEmberPaperReact from 'ember-paper-react/components/base/base-ember-paper-react';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { TestPropObj } from "../../../addon/prop-files/test/test-props";

module('Integration | Component | base-code', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    class MyTestComponent extends BaseEmberPaperReact {
      // overrides
      /*constructor() {
        super(...arguments);
        console.log('I WAS CREATED***********');
      }*/
    }
    this.setProperties({ MyTestComponent });
    //await render(hbs`<MyTestComponent />`);
    assert.equal(1, 1);
  });
});
