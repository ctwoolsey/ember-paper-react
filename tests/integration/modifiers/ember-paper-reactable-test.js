import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled } from '@ember/test-helpers';
import BaseEmberPaperReact from 'ember-paper-react/components/base/base-ember-paper-react';
import { hbs } from 'ember-cli-htmlbars';
import { tracked } from "@glimmer/tracking";

module('Integration | Modifier | ember-paper-reactable', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function(hooks) {
    this.component = null;

    class MyTestComponent extends BaseEmberPaperReact {
      constructor() {
        super(...arguments);
      }

      createReactComponent() {

      }

      renderChildren() {
        this.renderChildrenCalled = true;
      }

      doneRendering() {
        this.doneRenderingCalled = true;
      }
    }
    this.setProperties({ MyTestComponent });

    this.set('removeAttributeCalled', false);
    this.set('removeAttribute', () => {
        this.set('removeAttributeCalled', true);
      }
    );
  });

  test('it renders', async function(assert) {
    class MyContext {
      @tracked a = 1;
      @tracked b = 10;
      @tracked c = 20;
    }

    let ctx = new MyContext();
    this.setProperties({ctx});

    this.set('wasInserted', false);
    this.set('onInserted', () => {
      this.wasInserted = true;
    });

    this.set('stateChanged', null);
    this.set('stateValue', null);
    this.set('onStateChange', (propName, value) => {
      this.stateChanged = propName;
      this.stateValue = value;
    });

    this.set('resetStateChecker', () => {
      this.stateChanged = null;
      this.stateValue = null;
    });

    this.set('checkState', (expectedPropName, expectedValue) => {
      assert.equal(expectedPropName, this.stateChanged, `Expected prop name: ${expectedPropName} to equal ${this.stateChanged}`);
      assert.equal(expectedValue, this.stateValue, `Expected prop value: ${expectedValue} to equal ${this.stateValue}`);
    });

    this.get('changeArgs', () => {
      let changeObj = {};
      changeObj['a'] = this.ctx.a;
      changeObj['b'] = this.ctx.b;

      return changeObj;
    });

    assert.false(this.wasInserted, `not inserted yet`);
    await render(hbs`<div>
                        <div {{ember-paper-reactable this.onInserted this.onStateChange this.changeArgs}}

                        >Dummy Button</div>
                      </div>`);
    assert.true(this.wasInserted, `was inserted`);

    this.checkState(null, null);
    this.ctx.a = 2;
    await settled();
    this.checkState('a', 2);


  });
});
