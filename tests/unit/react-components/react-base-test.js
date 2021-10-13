import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { ReactBase } from 'ember-paper-react/react-component-lib/base/react-base';
import { TestPropObj } from '../../prop-files/test-props';
import { props } from '../../prop-files/test-props-for-react';

module('Unit | React Component | react-base', function(hooks) {
  setupTest(hooks);

  let reactBase = null;


  hooks.beforeEach(function(hooks) {
    reactBase = new ReactBase(props);
    reactBase.setState  = (stateObj) => {
      Object.assign(reactBase.state, stateObj);
    };
  });

  test('it initializes componentRef and props', function(assert) {
    assert.ok(reactBase.componentRef, `componentRef not initialized`);
    assert.equal(Object.keys(reactBase.props).length, 10, `props length is not correct`);
    assert.ok(Object.prototype.hasOwnProperty.call(reactBase.props,'a'), `props not found 'a'`);
    assert.ok(Object.prototype.hasOwnProperty.call(reactBase.props,'b'), `props not found 'b'`);
    assert.ok(Object.prototype.hasOwnProperty.call(reactBase.props,'c'), `props not found 'c'`);
    assert.ok(Object.prototype.hasOwnProperty.call(reactBase.props,'d'), `props not found 'd'`);
    assert.ok(Object.prototype.hasOwnProperty.call(reactBase.props,'e'), `props not found 'e'`);
    assert.ok(Object.prototype.hasOwnProperty.call(reactBase.props,'label'), `props not found 'label'`);
    assert.ok(Object.prototype.hasOwnProperty.call(reactBase.props,'id'), `props not found 'id'`);
    assert.ok(Object.prototype.hasOwnProperty.call(reactBase.props,'ref'), `props not found 'ref'`);
    assert.ok(Object.prototype.hasOwnProperty.call(reactBase.props,'class'), `props not found 'class'`);
    assert.ok(Object.prototype.hasOwnProperty.call(reactBase.props,'theme'), `props not found 'theme'`);
  });

  test('it correctly separates props', function(assert) {
    reactBase.initialize(TestPropObj);
    assert.equal(Object.keys(reactBase.state).length, 6, `state length is not correct`);
    assert.ok(Object.prototype.hasOwnProperty.call(reactBase.state,'b'), `state not found 'b'`);
    assert.ok(Object.prototype.hasOwnProperty.call(reactBase.state,'c'), `state not found 'c'`);
    assert.ok(Object.prototype.hasOwnProperty.call(reactBase.state,'label'), `state not found 'label'`);
    assert.ok(Object.prototype.hasOwnProperty.call(reactBase.state,'class'), `state not found 'class'`);
    assert.ok(Object.prototype.hasOwnProperty.call(reactBase.state,'d'), `state not found 'd'`);
    assert.ok(Object.prototype.hasOwnProperty.call(reactBase.state,'theme'), `state not found 'theme'`);

    assert.equal(Object.keys(reactBase.staticProps).length, 3, `staticProps length is not correct`);
    assert.ok(Object.prototype.hasOwnProperty.call(reactBase.staticProps,'a'), `staticProps not found 'a'`);
    assert.ok(Object.prototype.hasOwnProperty.call(reactBase.staticProps,'id'), `staticProps not found 'id'`);
    assert.ok(Object.prototype.hasOwnProperty.call(reactBase.staticProps,'ref'), `staticProps not found 'ref'`);

    assert.equal(Object.keys(reactBase.statePropsForComponent).length, 4, `statePropsForComponent length is not correct`);
    assert.ok(Object.prototype.hasOwnProperty.call(reactBase.statePropsForComponent,'b'), `statePropsForComponent not found 'b'`);
    assert.ok(Object.prototype.hasOwnProperty.call(reactBase.statePropsForComponent,'c'), `statePropsForComponent not found 'c'`);
    assert.ok(Object.prototype.hasOwnProperty.call(reactBase.statePropsForComponent,'label'), `statePropsForComponent not found 'label'`);
    assert.ok(Object.prototype.hasOwnProperty.call(reactBase.statePropsForComponent,'class'), `statePropsForComponent not found 'class'`);
  });

  test('it correctly creates staticPropsObj', function(assert) {
    reactBase.initialize(TestPropObj);
    const staticPropsToPlace = reactBase.placeStaticProps(reactBase.staticProps);
    assert.equal(Object.keys(staticPropsToPlace).length, 1, `staticPropsToPlace length is not correct`);
    assert.ok(Object.prototype.hasOwnProperty.call(staticPropsToPlace,'a'), `staticPropsToPlace not found 'a'`);
    assert.equal(staticPropsToPlace.a, 'A', `staticPropsToPlace a is wrong value`);
  });

  test('it correctly creates statePropsObj', function(assert) {
    reactBase.initialize(TestPropObj);
    reactBase.setState({c: null}); //set c to null so test can confirm that 'c' is not passed on
    const statePropsToPlace = reactBase.placeStateProps(reactBase.statePropsForComponent);
    assert.equal(Object.keys(statePropsToPlace).length, 3, `statePropsToPlace length is not correct`);
    assert.ok(Object.prototype.hasOwnProperty.call(statePropsToPlace,'b'), `statePropsToPlace not found 'b'`);
    assert.equal(statePropsToPlace.b, 'B', `statePropsToPlace b is wrong value`);
    assert.ok(Object.prototype.hasOwnProperty.call(statePropsToPlace,'label'), `statePropsToPlace not found 'label'`);
    assert.equal(statePropsToPlace.label, '', `statePropsToPlace label is wrong value`);
    assert.ok(Object.prototype.hasOwnProperty.call(statePropsToPlace,'className'), `statePropsToPlace not found 'className'`);
    assert.equal(statePropsToPlace.className, 'myClass', `statePropsToPlace className is wrong value`);
  });

  test('it correctly formats style', function(assert) {
    let styleString = 'a:my-a;b:my-b';
    let styleObj = reactBase.formatStyle(styleString);
    assert.equal(Object.keys(styleObj).length, 2, `style object from string not correct length`);
    assert.equal(styleObj.a, 'my-a', `styleObj from string 'a' not set correctly`);
    assert.equal(styleObj.b, 'my-b', `styleObj from string 'b' not set correctly`);

    styleObj = reactBase.formatStyle({background: 'yellow', foreground: 'green', middleground: 'red'});
    assert.equal(Object.keys(styleObj).length, 3, `style object from object not correct length`);
    assert.equal(styleObj.background, 'yellow', `styleObj from string 'background' not set correctly`);
    assert.equal(styleObj.foreground, 'green', `styleObj from string 'foreground' not set correctly`);
    assert.equal(styleObj.middleground, 'red', `styleObj from string 'middleground' not set correctly`);
  });

  test('it correctly sets state', function(assert) {
    reactBase.initialize(TestPropObj);
    reactBase.setStateProp('b', 'banana');
    assert.equal(reactBase.state.b, 'banana', `did not correctly set state 'b'`);
    reactBase.formatStyle = () => { return 'style set'};
    reactBase.setState({style: null}); //add style to state to test that style runs through formatStyle
    reactBase.setStateProp('style', {myStyle: 'someStyle'});
    assert.equal(reactBase.state.style, 'style set', `did not correctly set state 'style'`);

    let stateSet = false;
    reactBase.setState = () => {
      stateSet = true;
    }

    reactBase.setStateProp('c', 'should set state');
    assert.true(stateSet, `setting state property 'c' did not call setState`);
    stateSet = false;
    reactBase.setStateProp('z', 'should be ignored');
    assert.false(stateSet, `setting state property 'z' called setState`);
  });
});

