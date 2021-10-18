import { module, test } from 'qunit';
import { reactCreateIcon } from 'ember-paper-react/react-component-lib/utility/react-create-icon';
import AcUnit from '@mui/icons-material/AcUnit';

module('Unit | React Component Utility | react-create-icon', function() {
  test('it creates an icon from icon property', function(assert) {
    const iconObj = { icon: AcUnit };
    const createdIcon = reactCreateIcon(iconObj);
    assert.ok(createdIcon, `did not create icon from icon property alone`);
  });

  test('it creates an icon from iconProps property', function(assert) {
    //using font awesome fonts, imported in index page.
    const iconObj = { iconProps: { baseClassName: 'fas fa-award' }};
    const createdIcon = reactCreateIcon(iconObj);
    assert.ok(createdIcon, `did not create icon from 'iconProps' property alone`);
  });

  test('it does not create an icon from null', function(assert) {
    //using font awesome fonts, imported in index page.
    const iconObj = null;
    const createdIcon = reactCreateIcon(iconObj);
    assert.notOk(createdIcon, `created an icon from empty iconObj`);
  });
});

