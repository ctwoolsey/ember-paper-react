import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import BaseEmberPaperReact from 'ember-paper-react/components/base/base-ember-paper-react';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { TestPropObj } from "../../prop-files/test-props";

module('Integration | Component | base-code', function(hooks) {
  setupRenderingTest(hooks);

  test('it creates props correctly', async function(assert) {
    this.component = null;

    this.set('getComponentReference', (reference) => {
      this.component = reference;
    });

    class MyTestComponent extends BaseEmberPaperReact {
      // overrides
      constructor() {
        super(...arguments);
        this.args.setReference(this);
        console.log('I WAS CREATED***********');
      }
    }
    this.setProperties({ MyTestComponent });
    await render(hbs`<this.MyTestComponent @setReference={{this.getComponentReference}}/>`);
    assert.equal(1, 1);
    assert.ok(this.component, 'Component is not null');

    this.component.loadPropObject(TestPropObj);

    assert.ok(Object.prototype.hasOwnProperty.call(this.component.props,'a'), `props found 'a'`);
    assert.ok(Object.prototype.hasOwnProperty.call(this.component.props,'b', `props found 'b'`));
    assert.ok(Object.prototype.hasOwnProperty.call(this.component.props,'c', `props found 'c'`));
    assert.ok(Object.prototype.hasOwnProperty.call(this.component.props,'d', `props found 'd'`));
    assert.equal(Object.keys(this.component.props).length, 4, `props length is 4`);

    assert.ok(Object.prototype.hasOwnProperty.call(this.component.stateProps,'b', `stateProps found 'b'`));
    assert.ok(Object.prototype.hasOwnProperty.call(this.component.stateProps,'c', `stateProps found 'c'`));
    assert.equal(Object.keys(this.component.stateProps).length, 2, `stateProps length is 2`);

    assert.ok(Object.prototype.hasOwnProperty.call(this.component.propsNotForComponent,'e'), `propsNotForComponent found 'e'`);
    assert.equal(Object.keys(this.component.propsNotForComponent).length, 1, `propsNotForComponent length is 1`);

    assert.ok(Object.prototype.hasOwnProperty.call(this.component.statefulPropsNotForComponent,'d', `statefulPropsNotForComponent found 'd'`));
    assert.equal(Object.keys(this.component.statefulPropsNotForComponent).length, 1, `statefulPropsNotForComponent length is 1`);
  });
});
