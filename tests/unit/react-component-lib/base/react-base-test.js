import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { ReactBase } from 'ember-paper-react/react-component-lib/base/react-base';
import { TestPropObj } from '../../../prop-files/test-props';
import { props } from '../../../prop-files/test-props-for-react';

module('Unit | React Component Lib Base | react-base', function(hooks) {
  setupTest(hooks);

  let reactBase = null;


  hooks.beforeEach(function(hooks) {
    reactBase = new ReactBase(props);
    reactBase.setState  = (stateObj) => {
      Object.assign(reactBase.state, stateObj);
    };
  });

  test('it initializes componentRef and props', function(assert) {
    assert.ok(reactBase.componentRef, `componentRef initialized`);
    assert.equal(Object.keys(reactBase.props).length, 10, `props length is correct`);
    assert.ok(Object.prototype.hasOwnProperty.call(reactBase.props,'a'), `props found 'a'`);
    assert.ok(Object.prototype.hasOwnProperty.call(reactBase.props,'b'), `props found 'b'`);
    assert.ok(Object.prototype.hasOwnProperty.call(reactBase.props,'c'), `props found 'c'`);
    assert.ok(Object.prototype.hasOwnProperty.call(reactBase.props,'d'), `props found 'd'`);
    assert.ok(Object.prototype.hasOwnProperty.call(reactBase.props,'e'), `props found 'e'`);
    assert.ok(Object.prototype.hasOwnProperty.call(reactBase.props,'label'), `props found 'label'`);
    assert.ok(Object.prototype.hasOwnProperty.call(reactBase.props,'id'), `props found 'id'`);
    assert.ok(Object.prototype.hasOwnProperty.call(reactBase.props,'ref'), `props found 'ref'`);
    assert.ok(Object.prototype.hasOwnProperty.call(reactBase.props,'class'), `props found 'class'`);
    assert.ok(Object.prototype.hasOwnProperty.call(reactBase.props,'theme'), `props found 'theme'`);
  });

  test('it correctly separates props', function(assert) {
    reactBase.initialize(TestPropObj);
    assert.equal(Object.keys(reactBase.state).length, 6, `state length is correct`);
    assert.ok(Object.prototype.hasOwnProperty.call(reactBase.state,'b'), `state found 'b'`);
    assert.ok(Object.prototype.hasOwnProperty.call(reactBase.state,'c'), `state found 'c'`);
    assert.ok(Object.prototype.hasOwnProperty.call(reactBase.state,'label'), `state found 'label'`);
    assert.ok(Object.prototype.hasOwnProperty.call(reactBase.state,'class'), `state found 'class'`);
    assert.ok(Object.prototype.hasOwnProperty.call(reactBase.state,'d'), `state found 'd'`);
    assert.ok(Object.prototype.hasOwnProperty.call(reactBase.state,'theme'), `state found 'theme'`);

    assert.equal(Object.keys(reactBase.staticProps).length, 3, `staticProps length is correct`);
    assert.ok(Object.prototype.hasOwnProperty.call(reactBase.staticProps,'a'), `staticProps found 'a'`);
    assert.ok(Object.prototype.hasOwnProperty.call(reactBase.staticProps,'id'), `staticProps found 'id'`);
    assert.ok(Object.prototype.hasOwnProperty.call(reactBase.staticProps,'ref'), `staticProps found 'ref'`);

    assert.equal(Object.keys(reactBase.statePropsForComponent).length, 4, `statePropsForComponent length is correct`);
    assert.ok(Object.prototype.hasOwnProperty.call(reactBase.statePropsForComponent,'b'), `statePropsForComponent found 'b'`);
    assert.ok(Object.prototype.hasOwnProperty.call(reactBase.statePropsForComponent,'c'), `statePropsForComponent found 'c'`);
    assert.ok(Object.prototype.hasOwnProperty.call(reactBase.statePropsForComponent,'label'), `statePropsForComponent found 'label'`);
    assert.ok(Object.prototype.hasOwnProperty.call(reactBase.statePropsForComponent,'class'), `statePropsForComponent found 'class'`);
  });

  test('it correctly creates staticPropsObj', function(assert) {
    reactBase.initialize(TestPropObj);
    const staticPropsToPlace = reactBase.placeStaticProps(reactBase.staticProps);
    assert.equal(Object.keys(staticPropsToPlace).length, 1, `staticPropsToPlace length is correct`);
    assert.ok(Object.prototype.hasOwnProperty.call(staticPropsToPlace,'a'), `staticPropsToPlace found 'a'`);
    assert.equal(staticPropsToPlace.a, 'A', `staticPropsToPlace a is correct`);
  });

  test('it correctly creates statePropsObj', function(assert) {
    reactBase.initialize(TestPropObj);
    reactBase.setState({c: undefined}); //set c to undefined so test can confirm that 'c' is not passed on
    const statePropsToPlace = reactBase.placeStateProps(reactBase.statePropsForComponent);
    assert.equal(Object.keys(statePropsToPlace).length, 3, `statePropsToPlace length is correct`);
    assert.ok(Object.prototype.hasOwnProperty.call(statePropsToPlace,'b'), `statePropsToPlace found 'b'`);
    assert.equal(statePropsToPlace.b, 'B', `statePropsToPlace b is correct`);
    assert.ok(Object.prototype.hasOwnProperty.call(statePropsToPlace,'label'), `statePropsToPlace found 'label'`);
    assert.equal(statePropsToPlace.label, '', `statePropsToPlace label is correct`);
    assert.ok(Object.prototype.hasOwnProperty.call(statePropsToPlace,'className'), `statePropsToPlace found 'className'`);
    assert.equal(statePropsToPlace.className, 'myClass', `statePropsToPlace className is correct`);
  });

  test('it correctly formats style', function(assert) {
    let styleString = 'a:my-a;b:my-b';
    let styleObj = reactBase.formatStyle(styleString);
    assert.equal(Object.keys(styleObj).length, 2, `style object from string correct length`);
    assert.equal(styleObj.a, 'my-a', `styleObj from string 'a' set correctly`);
    assert.equal(styleObj.b, 'my-b', `styleObj from string 'b' set correctly`);

    styleObj = reactBase.formatStyle({background: 'yellow', foreground: 'green', middleground: 'red'});
    assert.equal(Object.keys(styleObj).length, 3, `style object from object correct length`);
    assert.equal(styleObj.background, 'yellow', `styleObj from string 'background' set correctly`);
    assert.equal(styleObj.foreground, 'green', `styleObj from string 'foreground' set correctly`);
    assert.equal(styleObj.middleground, 'red', `styleObj from string 'middleground' set correctly`);
  });

  test('it correctly sets state', function(assert) {
    reactBase.initialize(TestPropObj);
    reactBase.setStateProp('b', 'banana');
    assert.equal(reactBase.state.b, 'banana', `did correctly set state 'b'`);
    reactBase.formatStyle = () => { return 'style set'};
    reactBase.setState({style: null}); //add style to state to test that style runs through formatStyle
    reactBase.setStateProp('style', {myStyle: 'someStyle'});
    assert.equal(reactBase.state.style, 'style set', `did correctly set state 'style'`);

    let stateSet = false;
    reactBase.setState = () => {
      stateSet = true;
    }

    reactBase.setStateProp('c', 'should set state');
    assert.true(stateSet, `setting state property 'c' did call setState`);
    stateSet = false;
    reactBase.setStateProp('z', 'should be ignored');
    assert.false(stateSet, `setting state property 'z' did not call setState`);
  });
});

