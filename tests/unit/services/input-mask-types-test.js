import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | input-mask-types', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let service = this.owner.lookup('service:input-mask-types');
    assert.ok(service);
  });

  test('sets and retrieves mask types', function(assert) {
    const obj1 = {a:1};
    const obj2 = {b:1};

    let service = this.owner.lookup('service:input-mask-types');
    assert.equal(Object.keys(service.iMaskTypes).length, 0, `iMaskTypes is empty`);
    assert.equal(Object.keys(service.numberFormatNumericTypes).length, 0, `numberFormatNumericTypes is empty`);
    service.addIMaskType('a', obj1);
    service.addNumberFormatNumericType('b', obj2);
    assert.equal(service.getIMaskType('a'), obj1, `iMaskTypes correctly returned object`);
    assert.equal(service.getNumberFormatNumericType('b'), obj2, `numberFormatNumericTypes correctly returned object`);
  });
});
