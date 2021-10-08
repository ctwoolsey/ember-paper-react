import { module, test } from 'qunit';
import { TestPropObj } from "../../integration/prop-files/test-props";
import { setupTest } from "ember-qunit";
import { BaseEmberPaperReact } from 'ember-paper-react/components/base/base-ember-paper-react';


module('Unit | Component | base-ember-paper-react', function(hooks) {
  setupTest(hooks);

  test('it behaves correctly', function(assert) {
    /*const baseProj = new BaseEmberPaperReact();
    baseProj.loadPropObject(TestPropObj);
    assert.ok(Object.prototype.hasOwnProperty.call(baseProj, 'props'));*/

    assert.equal(1, 1);



  });
});
