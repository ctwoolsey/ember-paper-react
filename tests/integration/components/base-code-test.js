import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import BaseEmberPaperReact from 'ember-paper-react/components/base/base-ember-paper-react';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { TestPropObj } from "../../prop-files/test-props";
import Service from '@ember/service';

module('Integration | Component | base-code', function(hooks) {
  setupRenderingTest(hooks);
  class ThemeManagerStub extends Service {
    theme = 'myTheme';
  }

  hooks.beforeEach(function(hooks) {
    this.owner.register('service:theme-manager', ThemeManagerStub);
    this.component = null;

    this.set('getComponentReference', (reference) => {
      this.component = reference;
    });
    class MyTestComponent extends BaseEmberPaperReact {
      constructor() {
        super(...arguments);
        this.args.setReference(this);
        this.createComponentCalled = false;
      }

      createReactComponent() {
        this.createComponentCalled = true;
      }
    }
    this.setProperties({ MyTestComponent });

    this.set('removeAttributeCalled', false);
    this.set('removeAttribute', () => {
        this.set('removeAttributeCalled', true);
      }
    );
  });

  test('it creates props correctly', async function(assert) {
    await render(hbs`<this.MyTestComponent @setReference={{this.getComponentReference}}/>`);
    assert.ok(this.component, 'Component is null');

    this.component.loadPropObject(TestPropObj);

    assert.ok(Object.prototype.hasOwnProperty.call(this.component.props,'a'), `props not found 'a'`);
    assert.ok(Object.prototype.hasOwnProperty.call(this.component.props,'b', `props not found 'b'`));
    assert.ok(Object.prototype.hasOwnProperty.call(this.component.props,'c', `props not found 'c'`));
    assert.ok(Object.prototype.hasOwnProperty.call(this.component.props,'d', `props not found 'd'`));
    assert.ok(Object.prototype.hasOwnProperty.call(this.component.props,'label', `props not found 'label'`));
    assert.ok(Object.prototype.hasOwnProperty.call(this.component.props,'id', `props not found 'id'`));
    assert.ok(Object.prototype.hasOwnProperty.call(this.component.props,'ref', `props not found 'ref'`));
    assert.ok(Object.prototype.hasOwnProperty.call(this.component.props,'class', `stateProps not found 'class'`));
    assert.equal(Object.keys(this.component.props).length, 8, `props length is not correct`);

    assert.ok(Object.prototype.hasOwnProperty.call(this.component.stateProps,'b', `stateProps not found 'b'`));
    assert.ok(Object.prototype.hasOwnProperty.call(this.component.stateProps,'c', `stateProps not found 'c'`));
    assert.ok(Object.prototype.hasOwnProperty.call(this.component.stateProps,'label', `stateProps not found 'label'`));
    assert.ok(Object.prototype.hasOwnProperty.call(this.component.stateProps,'class', `stateProps not found 'class'`));
    assert.equal(Object.keys(this.component.stateProps).length, 4, `stateProps length not correct`);

    assert.ok(Object.prototype.hasOwnProperty.call(this.component.propsNotForComponent,'e'), `propsNotForComponent not found 'e'`);
    assert.equal(Object.keys(this.component.propsNotForComponent).length, 1, `propsNotForComponent length not correct`);

    assert.ok(Object.prototype.hasOwnProperty.call(this.component.statefulPropsNotForComponent,'d', `statefulPropsNotForComponent not found 'd'`));
    assert.ok(Object.prototype.hasOwnProperty.call(this.component.statefulPropsNotForComponent,'theme', `statefulPropsNotForComponent not found 'theme'`));
    assert.equal(Object.keys(this.component.statefulPropsNotForComponent).length, 2, `statefulPropsNotForComponent length not correct`);
  });

  test('it initializes props correctly', async function(assert) {
    await render(hbs`<this.MyTestComponent @setReference={{this.getComponentReference}}
                                           @a="A" @b="B" @c="C" @d="D" @e="E"
                                           @class="myClass" @label="myLabel" @id="myId"
                     />`);
    assert.ok(this.component, 'Component is null');

    this.component.loadPropObject(TestPropObj);
    const elementStandIn = { attributes: []};
    assert.notOk(this.component.el, `el was initialized`);
    assert.notOk(this.component.reactRef, `reactRef was initialized`);
    assert.false(this.component.createComponentCalled, `createComponent already set`);
    this.component.inserted(elementStandIn);
    assert.true(this.component.createComponentCalled, `createComponent not called`);

    assert.equal(this.component.el, elementStandIn, 'element was not initialized correctly');
    assert.ok(this.component.reactRef, `reactRef not set`);

    assert.equal(this.component.propsToPass.a, 'A', `propsToPass 'a' incorrectly initialized`);
    assert.equal(this.component.propsToPass.b, 'B', `propsToPass 'b' incorrectly initialized`);
    assert.equal(this.component.propsToPass.c, 'C', `propsToPass 'c' incorrectly initialized`);
    assert.equal(this.component.propsToPass.d, 'D', `propsToPass 'd' incorrectly initialized`);
    assert.equal(this.component.propsToPass.e, 'E', `propsToPass 'e' incorrectly initialized`);
    assert.equal(this.component.propsToPass.class.trim(), 'myClass', `propsToPass 'class' incorrectly initialized`);
    assert.equal(this.component.propsToPass.label, 'myLabel', `propsToPass 'label' incorrectly initialized`);
    assert.equal(this.component.propsToPass.id, 'myId', `propsToPass 'id' incorrectly initialized`);
    assert.equal(this.component.propsToPass.theme, 'myTheme', `propsToPass 'theme' incorrectly initialized`);
    assert.equal(this.component.propsToPass.ref, this.component.reactRef, `propsToPass 'ref' incorrectly initialized`);
    //all unique props will be passed
    assert.equal(Object.keys(this.component.propsToPass).length, 10, `propsToPass length is incorrect`);

  });

  test('it sets id correctly', async function(assert) {
    await render(hbs`<this.MyTestComponent @setReference={{this.getComponentReference}} />`);
    this.component.loadPropObject(TestPropObj);
    assert.false(this.removeAttributeCalled, 'removeAttributeCalled already set');

    this.component.inserted({ attributes: [{nodeName: 'id', nodeValue: 'someId'}], removeAttribute: this.removeAttribute });
    assert.equal(this.component.propsToPass.id, 'someId', `propsToPass 'id' incorrectly initialized`);
    assert.true(this.removeAttributeCalled, 'removeAttribute not called');
  });

  test('it sets label to string correctly', async function(assert) {
    await render(hbs`<this.MyTestComponent @setReference={{this.getComponentReference}} />`);
    this.component.loadPropObject(TestPropObj);
    assert.equal(this.component.props.label, null, `'props.label' is not null`);
    this.component.inserted({ attributes: []});
    assert.equal(this.component.propsToPass.label, '', `propsToPass 'label' incorrectly initialized`);
  });

  test(`it keeps props null`, async function(assert) {
    await render(hbs`<this.MyTestComponent @setReference={{this.getComponentReference}} />`);
    this.component.loadPropObject(TestPropObj);
    this.component.inserted({ attributes: []});
    assert.equal(this.component.propsToPass.a, null, `props 'a' not null`);
    assert.equal(this.component.propsToPass.b, null, `props 'b' not null`);
    assert.equal(this.component.propsToPass.c, null, `props 'c' not null`);
    assert.equal(this.component.propsToPass.d, null, `props 'd' not null`);
    assert.equal(this.component.propsToPass.e, null, `props 'e' not null`);
  });

  test(`it correctly sets class`, async function(assert) {
    await render(hbs`<this.MyTestComponent @setReference={{this.getComponentReference}} @class='argClass'/>`);
    this.component.loadPropObject(TestPropObj);
    this.component.inserted({ attributes: []});
    assert.equal(this.component.propsToPass.class.trim(), 'argClass', `'class' not equal to 'arg.class'`);

    await render(hbs`<this.MyTestComponent @setReference={{this.getComponentReference}} @class='argClass'/>`);
    this.component.loadPropObject(TestPropObj);
    this.component.inserted({ attributes: [{nodeName: 'class', nodeValue: 'attributeClass'}], removeAttribute: this.removeAttribute });
    assert.equal(this.component.propsToPass.class.trim(), 'attributeClass argClass', `'class' not equal to 'attr.class + ' ' + arg.class'`);

    await render(hbs`<this.MyTestComponent @setReference={{this.getComponentReference}} />`);
    this.component.loadPropObject(TestPropObj);
    this.component.inserted({ attributes: [{nodeName: 'class', nodeValue: 'attributeClass'}], removeAttribute: this.removeAttribute });
    assert.equal(this.component.propsToPass.class.trim(), 'attributeClass', `'class' not equal to 'attr.class'`);
  });

  /*
  changeArgs,
  changeReactState,
  renderElement,
  renderElementItems,
  checkIfCanRender,
  createReactComponent
   */

});
