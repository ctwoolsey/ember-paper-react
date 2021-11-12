import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | input-mask', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let service = this.owner.lookup('service:input-mask');
    assert.ok(service);
  });
});
