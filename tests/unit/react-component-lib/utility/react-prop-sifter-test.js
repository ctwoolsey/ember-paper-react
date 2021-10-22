import { module, test } from 'qunit';
import { reactPropSifter } from 'ember-paper-react/react-component-lib/utility/react-prop-sifter';
import { TestPropObj, PassedProps } from "../../../prop-files/react-prop-sifter-props";


module('Unit | React Component Lib Utility | react-prop-sifter', function(hooks) {
  test('it creates props correctly', async function(assert) {
    assert.ok(true);
    let siftedProps = reactPropSifter(PassedProps, TestPropObj);
    assert.equal(Object.keys(siftedProps.stateProps).length, 6, `stateProps is correct length`);
    assert.equal(Object.keys(siftedProps.statefulPropsNotForComponent).length, 2, `statefulPropsNotForComponent is correct length`);
    assert.equal(Object.keys(siftedProps.propsNotForComponent).length, 1, `propsNotForComponent is correct length`);
    assert.equal(Object.keys(siftedProps.staticProps).length, 2, `staticProps is correct length`);

    siftedProps = reactPropSifter(PassedProps, TestPropObj, false);
    assert.equal(Object.keys(siftedProps.stateProps).length, 3, `stateProps is correct length, does not include role, aria, or data`);
  });
})
