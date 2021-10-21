import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | react-children', function(hooks) {
  setupTest(hooks);

  test('it initializes correctly', function(assert) {
    let service = this.owner.lookup('service:react-children');
    assert.ok(service, `service exists`);
    assert.strictEqual(Object.keys(service.queues).length, 0, `queues initializes to empty`);
    assert.strictEqual(Object.keys(service.onChildChanged).length, 0, `onChildChanged initializes to empty`);
    assert.strictEqual(Object.keys(service.childrenRenderMethods).length, 0, `childrenRenderMethods initializes to empty`);

  });

  test('it creates objects correctly', function(assert) {
    let service = this.owner.lookup('service:react-children');
    assert.ok(service, `service exists`);

    const groupIdentifier = 'A';
    this.set('childChanged', false);
    const onChildChanged = () => {
      this.childChanged = true;
    };

    service.create(groupIdentifier, onChildChanged);

    assert.strictEqual(Object.keys(service.queues).length, 1, `queues is correct size`);
    assert.ok(Object.hasOwnProperty.call(service.queues, groupIdentifier), `queue created with groupIdentifier`);

    assert.strictEqual(Object.keys(service.onChildChanged).length, 1, `onChildChanged is correct size`);
    assert.ok(Object.hasOwnProperty.call(service.onChildChanged, groupIdentifier), `onChildChanged created with groupIdentifier`);
    assert.false(this.childChanged, `child changed initially false`);
    service.onChildChanged[groupIdentifier]();
    assert.true(this.childChanged, `child changed called`);

    assert.strictEqual(Object.keys(service.childrenRenderMethods).length, 1, `childrenRenderMethods is correct size`);
    assert.ok(Object.hasOwnProperty.call(service.childrenRenderMethods, groupIdentifier), `childrenRenderMethods created with groupIdentifier`);

  });

  test('it saves/loads/renders objects correctly', function(assert) {
    let service = this.owner.lookup('service:react-children');
    assert.ok(service, `service exists`);

    const groupIdentifier = 'A';
    this.set('childChanged', false);
    const onChildChanged = () => {
      this.childChanged = true;
    };
    this.set('renderReady', false);
    const onRenderReady = () => {
      this.renderReady = true;
    };
    const ReactChild = 'B';

    service.create(groupIdentifier, onChildChanged);

    assert.false(this.childChanged, `child changed initially false`);
    service.save(groupIdentifier, ReactChild, onRenderReady);
    assert.true(this.childChanged, `child changed called`);

    const savedReactChild = service.load(groupIdentifier);
    assert.equal(ReactChild, savedReactChild, `correctly saved/loaded ReactChild`);

    assert.false(this.renderReady, `renderReady initially false`);
    service.render(groupIdentifier);
    assert.true(this.renderReady, `renderReady called correctly`);

  });

  test('it deletes objects correctly', function(assert) {
    let service = this.owner.lookup('service:react-children');
    assert.ok(service, `service exists`);

    const groupIdentifier = 'A';
    this.set('childChanged', false);
    const onChildChanged = () => {
      this.childChanged = true;
    };
    this.set('renderReady', false);
    const onRenderReady = () => {
      this.renderReady = true;
    };
    const ReactChild = 'B';

    service.create(groupIdentifier, onChildChanged);
    service.save(groupIdentifier, ReactChild, onRenderReady);
    this.childChanged = false;

    let savedReactChild = service.load(groupIdentifier);
    assert.equal(ReactChild, savedReactChild, `saved ReactChild Exists`);

    assert.false(this.childChanged, `child changed initially false`);
    service.delete(groupIdentifier, ReactChild);
    assert.true(this.childChanged, `child changed called`);

    savedReactChild = service.load(groupIdentifier);
    assert.strictEqual(savedReactChild.length, 0, `saved ReactChild is now empty`);

  });

  test('it destroys objects correctly', function(assert) {
    let service = this.owner.lookup('service:react-children');
    assert.ok(service, `service exists`);

    const groupIdentifier = 'A';
    this.set('childChanged', false);
    const onChildChanged = () => {
      this.childChanged = true;
    };
    this.set('renderReady', false);
    const onRenderReady = () => {
      this.renderReady = true;
    };
    const ReactChild = 'B';

    service.create(groupIdentifier, onChildChanged);
    service.save(groupIdentifier, ReactChild, onRenderReady);
    this.childChanged = false;

    service.destroyReactChildren(groupIdentifier);
    assert.strictEqual(Object.keys(service.queues).length, 0, `queues reset to empty`);
    assert.strictEqual(Object.keys(service.onChildChanged).length, 0, `onChildChanged reset to empty`);
    assert.strictEqual(Object.keys(service.childrenRenderMethods).length, 0, `childrenRenderMethods reset to empty`);

  });
});
