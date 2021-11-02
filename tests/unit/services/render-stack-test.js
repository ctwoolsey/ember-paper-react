import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | render-stack', function(hooks) {
  setupTest(hooks);

  test('it initializes stacks correctly', function(assert) {
    let service = this.owner.lookup('service:render-stack');
    assert.ok(service);

    assert.strictEqual(service.renderStack.length, 0, `renderStack created empty`);
    assert.strictEqual(service.renderLaterStack.length, 0, `renderLaterStack created empty`);
  });

  test('it correctly creates a render callback', function(assert) {
    let service = this.owner.lookup('service:render-stack');
    assert.ok(service);

    this.set('callbackCalled', false);
    const callbackFn = () => {
      this.callbackCalled = true;
    }

    const thisPtr = this;

    service.addRenderCallback(callbackFn, thisPtr);

    assert.false(this.callbackCalled, `callbackCalled has not been called`);
    service.renderLast();
    assert.true(this.callbackCalled, `callbackCalled has been called`);
  });

  test('it correctly renders the next item', function(assert) {
    let service = this.owner.lookup('service:render-stack');
    assert.ok(service);

    this.set('callbackCalled', false);
    const callbackFn = () => {
      this.callbackCalled = true;
    }

    this.set('laterCallbackCalled', false);
    const laterCallbackFn = () => {
      this.laterCallbackCalled = true;
    }

    const thisPtr = this;

    service.addRenderCallback(callbackFn, thisPtr);
    service.addRenderLaterCallback(laterCallbackFn, thisPtr);

    assert.false(this.callbackCalled, `callbackCalled has not been called`);
    assert.false(this.laterCallbackCalled, `laterCallbackCalled has not been called`);
    service.renderNext();
    assert.true(this.callbackCalled, `callbackCalled has been called`);
    assert.false(this.laterCallbackCalled, `laterCallbackCalled has not been called`);

    this.callbackCalled = false;
    this.laterCallbackCalled = false;
    assert.false(this.callbackCalled, `callbackCalled has not been called before 2nd renderNext call`);
    assert.false(this.laterCallbackCalled, `laterCallbackCalled has not been called before 2nd renderNext call`);
    service.renderNext();
    assert.false(this.callbackCalled, `callbackCalled has not been called after 2nd renderNext call`);
    assert.true(this.laterCallbackCalled, `laterCallbackCalled has been called after 2nd renderNext call`);
  });

  test('it correctly determines if it can start rendering', function(assert) {
    let service = this.owner.lookup('service:render-stack');
    assert.ok(service);

    const callbackFn = () => {}
    const thisPtr1 = 'A';
    const thisPtr2 = 'B';

    service.addRenderCallback(callbackFn, thisPtr1);
    service.addRenderCallback(callbackFn, thisPtr2);

    assert.false(service.canStartRendering(thisPtr1), `correctly determined it can not render`);
    assert.true(service.canStartRendering(thisPtr2), `correctly determined it can render`);
  });
});
