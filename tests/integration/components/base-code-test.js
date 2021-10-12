import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import BaseEmberPaperReact from 'ember-paper-react/components/base/base-ember-paper-react';
import { render, settled } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { TestPropObj } from "../../prop-files/test-props";
import Service from '@ember/service';

module('Integration | Component | base-code', function(hooks) {
  setupRenderingTest(hooks);
  class ThemeManagerStub extends Service {
    theme = 'myTheme';
  }

  class RenderStackStub extends Service {
    renderNextCalled = false;
    addRenderCallbackCalled = false;

    renderNext = () => { this.renderNextCalled = true };
    addRenderCallback = () => { this.addRenderCallbackCalled = true };
    canStartRendering = () => { return true; };
  }

  hooks.beforeEach(function(hooks) {
    this.owner.register('service:theme-manager', ThemeManagerStub);
    this.owner.register('service:render-stack', RenderStackStub);
    this.component = null;

    this.set('getComponentReference', (reference) => {
      this.component = reference;
    });
    class MyTestComponent extends BaseEmberPaperReact {
      constructor() {
        super(...arguments);
        this.args.setReference(this);
        this.createComponentCalled = false;
        this.renderChildrenCalled = false;
        this.doneRenderingCalled = false;
      }

      createReactComponent() {
        this.createComponentCalled = true;
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

  test(`it properly creates changeObj`, async function(assert) {
    await render(hbs`<this.MyTestComponent @setReference={{this.getComponentReference}}
                                           @a="A" @b="B" @c="C" @d="D" @e="E"
                                           @class="myClass" @label="myLabel"
                     />`);
    this.component.loadPropObject(TestPropObj);
    const changeObj = this.component.changeArgs;

    assert.equal(Object.keys(changeObj).length, 6, `changeObj length is not correct`);
    assert.equal(changeObj.b, 'B', `changeObj 'b' incorrect`);
    assert.equal(changeObj.c, 'C', `changeObj 'c' incorrect`);
    assert.equal(changeObj.label, 'myLabel', `changeObj 'label' incorrect`);
    assert.equal(changeObj.class.trim(), 'myClass', `changeObj 'class' incorrect`);
    assert.equal(changeObj.d, 'D', `changeObj 'd' incorrect`);
    assert.equal(changeObj.theme, 'myTheme', `changeObj 'theme' incorrect`);
  });

  test(`it correctly called change react state`, async function(assert) {
    this.set('stateName', null);
    this.set('stateValue', null);
    this.set('setStateProp', (stateName, value) => {
      this.stateName = stateName;
      this.stateValue = value;
    });
    await render(hbs`<this.MyTestComponent @setReference={{this.getComponentReference}} @class="myClass" />`);
    this.component.reactRef = {
      current: {setStateProp: this.setStateProp}
    }

    this.component.changeReactState('class');
    assert.equal(this.stateName, 'class', `'stateName' 'class' not set correctly`);
    assert.equal(this.stateValue.trim(), 'myClass', `'stateValue' for 'class' not set correctly`);

    this.component.changeReactState('hello', 'myHello');
    assert.equal(this.stateName, 'hello', `'stateName' 'hello' not set correctly`);
    assert.equal(this.stateValue, 'myHello', `'stateValue' for 'hello' not set correctly`);

    this.component.changeReactState('helloNull');
    assert.equal(this.stateName, 'helloNull', `'stateName' 'helloNull' not set correctly`);
    assert.equal(this.stateValue, null, `'stateValue' for 'helloNull' not set correctly`);
  });

  test(`it correctly renders the element`, async function(assert) {
    this.set('whereString', null);
    this.set('reactElement', null);
    this.set('insertAdjacentElement', (whereString, reactElement) => {
      this.whereString = whereString;
      this.reactElement = reactElement;
    });

    await render(hbs`<this.MyTestComponent @setReference={{this.getComponentReference}} />`);

    this.component.reactRef = {
      current: {
        componentRef: {
          current: 'myElement'
        }
      }
    }

    this.component.el = {
      insertAdjacentElement: this.insertAdjacentElement,
      hidden: false
    }
    const renderStackService = this.owner.lookup('service:render-stack');
    renderStackService.renderNextCalled = false;
    assert.false(this.component.el.hidden, 'el hidden');
    assert.false(this.component.renderChildrenCalled, 'renderChildren already called');
    assert.false(this.component.doneRenderingCalled, 'doneRendering already called');
    this.component.renderElement();
    assert.equal(this.whereString, 'afterend', `'whereString' not properly set`);
    assert.equal(this.reactElement, 'myElement', `'reactElement' not properly set`);
    assert.true(this.component.el.hidden, 'el not hidden');
    assert.true(renderStackService.renderNextCalled, 'renderNext not called');
    assert.true(this.component.renderChildrenCalled, 'renderChildren not called');
    await settled();
    assert.true(this.component.doneRenderingCalled, 'doneRendering not called');
  });

  test(`it correctly creates the react element`, async function(assert) {
    class MyTestComponent2 extends BaseEmberPaperReact {
      constructor() {
        super(...arguments);
        this.args.setReference(this);
      }
    }
    this.setProperties({ MyTestComponent2 });
    await render(hbs`<this.MyTestComponent2 @setReference={{this.getComponentReference}} />`);
    const renderStackService = this.owner.lookup('service:render-stack');
    this.component.loadPropObject(TestPropObj);

    this.component.inserted({ attributes: []});
    assert.ok(this.component.reactRef, `react ref is not set`);
    await settled();
    assert.true(renderStackService.addRenderCallbackCalled, 'addRenderCallbackCalled not called');
    assert.true(renderStackService.renderNextCalled, 'renderNext not called');
  });
});
