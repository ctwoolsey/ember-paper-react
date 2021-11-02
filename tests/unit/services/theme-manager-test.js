import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import blueGrey from '@mui/material/colors/blueGrey';

module('Unit | Service | theme-manager', function(hooks) {
  setupTest(hooks);

  test('it creates theme', function(assert) {
    let service = this.owner.lookup('service:theme-manager');
    assert.ok(service);

    const createdTheme = service.createTheme({
      primary: {
        main: blueGrey[500],
      }
    });

    assert.ok(createdTheme, `theme created`);

  });
});
