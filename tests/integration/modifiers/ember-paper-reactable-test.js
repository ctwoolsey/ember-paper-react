import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled, pauseTest } from '@ember/test-helpers';
import BaseEmberPaperReact from 'ember-paper-react/components/base/base-ember-paper-react';
import EmberPaperReactableModifier from 'ember-paper-react/modifiers/ember-paper-reactable';
//import { ModifierPropObj } from "../../dummy/app/prop-files/modifier-props";
import { hbs } from 'ember-cli-htmlbars';
import { setComponentTemplate } from '@ember/component';
import { tracked } from "@glimmer/tracking";
import ReactableTestComponent from 'dummy/components/reactable-test-component';

module('Integration | Modifier | ember-paper-reactable', function(hooks) {
  setupRenderingTest(hooks);

 hooks.beforeEach(function(hooks) {
    this.component = null;

    this.set('getComponentReference', (reference) => {
      this.component = reference;
    });


    class MyContext {
      @tracked a = 1;
      @tracked b = 10;
      @tracked c = 20;
      @tracked d = 30;
      @tracked e = 40;
    }

    let ctx = new MyContext();
    this.setProperties({ctx});

    this.setProperties({ReactableTestComponent});

  });

  test('it renders', async function(assert) {
    assert.expect(21);

    this.set('checkState', (expectedPropName, expectedValue) => {
      assert.equal(expectedPropName, this.component.stateChanged, `Expected prop name: ${expectedPropName} to equal ${this.component.stateChanged}`);
      assert.equal(expectedValue, this.component.stateValue, `Expected prop value: ${expectedValue} to equal ${this.component.stateValue}`);
    });

    assert.notOk(this.component, `Component is null before initialization`);

    await render(hbs`<this.ReactableTestComponent
                        @setReference={{this.getComponentReference}}
                        @a={{this.ctx.a}}
                        @b={{this.ctx.b}}
                        @c={{this.ctx.c}}
                        @d={{this.ctx.d}}
                        @e={{this.ctx.e}}
                     />`);

    assert.ok(this.component, `Component is assigned after initialization`);
    assert.true(this.component.wasInserted, `Component has been inserted`);
    this.checkState(null, null);

    this.ctx.a = 2;
    await settled();
    this.checkState('a', 2);
    this.component.resetStateChecker();
    this.checkState(null, null);

    this.ctx.b = 11;
    await settled();
    this.checkState('b', 11);
    this.component.resetStateChecker();
    this.checkState(null, null);

    this.ctx.c = 22;
    await settled();
    this.checkState('c', 22);
    this.component.resetStateChecker();
    this.checkState(null, null);

    this.ctx.d = 33;
    await settled();
    this.checkState(null, null);

    this.ctx.e = 44;
    await settled();
    this.checkState(null, null);

  });
});
