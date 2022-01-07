import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | input-mask-types', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let service = this.owner.lookup('service:input-mask-types');
    assert.ok(service);
  });
});
