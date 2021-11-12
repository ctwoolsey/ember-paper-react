import { module, test } from 'qunit';
import { reactPropRemover } from 'ember-paper-react/react-component-lib/utility/react-prop-remover';
import { TestSiftedPropObjA, TestSiftedPropObjB } from "../../../prop-files/react-prop-remover-props";


module('Unit | React Component Lib Utility | react-prop-remover', function(hooks) {
  test('it removes props correctly', async function(assert) {
    assert.ok(true);
    let siftedProps = reactPropRemover(TestSiftedPropObjB, TestSiftedPropObjA, ['w', 'x', 'y', 'z']);

    assert.equal(Object.keys(siftedProps.staticProps).length, 2, `staticProps is correct length`);
    assert.ok(Object.prototype.hasOwnProperty.call(siftedProps.staticProps,'i'), `props found 'i'`);
    assert.ok(Object.prototype.hasOwnProperty.call(siftedProps.staticProps,'w'), `props found 'w'`);
    assert.notOk(Object.prototype.hasOwnProperty.call(siftedProps.staticProps,'a'), `props not found 'a'`);

    assert.equal(Object.keys(siftedProps.propsNotForComponent).length, 2, `propsNotForComponent is correct length`);
    assert.ok(Object.prototype.hasOwnProperty.call(siftedProps.propsNotForComponent,'j'), `props found 'j'`);
    assert.ok(Object.prototype.hasOwnProperty.call(siftedProps.propsNotForComponent,'x'), `props found 'x'`);
    assert.notOk(Object.prototype.hasOwnProperty.call(siftedProps.propsNotForComponent,'c'), `props not found 'c'`);

    assert.equal(Object.keys(siftedProps.stateProps).length, 2, `stateProps is correct length`);
    assert.ok(Object.prototype.hasOwnProperty.call(siftedProps.stateProps,'k'), `props found 'k'`);
    assert.ok(Object.prototype.hasOwnProperty.call(siftedProps.stateProps,'y'), `props found 'y'`);
    assert.notOk(Object.prototype.hasOwnProperty.call(siftedProps.stateProps,'e'), `props not found 'e'`);

    assert.equal(Object.keys(siftedProps.statefulPropsNotForComponent).length, 2, `statefulPropsNotForComponent is correct length`);
    assert.ok(Object.prototype.hasOwnProperty.call(siftedProps.statefulPropsNotForComponent,'l'), `props found 'l'`);
    assert.ok(Object.prototype.hasOwnProperty.call(siftedProps.statefulPropsNotForComponent,'z'), `props found 'z'`);
    assert.notOk(Object.prototype.hasOwnProperty.call(siftedProps.statefulPropsNotForComponent,'g'), `props not found 'g'`);
  });
})
