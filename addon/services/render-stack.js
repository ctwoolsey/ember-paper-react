import Service from '@ember/service';
import { A } from '@ember/array';
import { later } from '@ember/runloop';

export default class RenderStackService extends Service {

  constructor() {
    super();
    this.renderStack = A();
    this.renderLaterStack = A();
  }

  _makeCallbackObj(callbackFn, thisPtr) {
    return {
      callbackFn: callbackFn,
      thisPtr: thisPtr
    }
  }

  addRenderCallback(callbackFn, thisPtr) {
    this.renderStack.pushObject(this._makeCallbackObj(callbackFn, thisPtr));
  }

  //a stack for items that need their children rendered first.
  addRenderLaterCallback(callbackFn, thisPtr) {
    this.renderLaterStack.pushObject(this._makeCallbackObj(callbackFn, thisPtr));
  }

  canStartRendering(emberComponent) {
    let callbackObj = this.renderStack.lastObject;
    return callbackObj && (callbackObj.thisPtr === emberComponent);
  }

  renderNext() {
    //render in the order inserted from the bottom of the stack
    const callbackObj = this.renderStack.objectAt(0);
    if (callbackObj) {
      if (!callbackObj.thisPtr.reactRef.current) {
        later(this, this.renderNext, 25);
      } else {
        this.renderStack.shiftObject();
        callbackObj.callbackFn.apply(callbackObj.thisPtr);
      }
    } else {
      this.renderLater();
    }
  }

  renderLast() {
    const callbackObj = this.renderStack.lastObject;

    if (callbackObj) {
      if (!callbackObj.thisPtr.reactRef.current) {
        later(this, this.renderLast, 25);
      } else {
        this.renderStack.popObject();
        callbackObj.callbackFn.apply(callbackObj.thisPtr);
      }
    }
  }

  renderLater() {
    const callbackObj = this.renderLaterStack.lastObject;

    if (callbackObj) {
      if (!callbackObj.thisPtr.reactRef.current) {
        later(this, this.renderLater, 25);
      } else {
        this.renderLaterStack.popObject();
        callbackObj.callbackFn.apply(callbackObj.thisPtr);
      }
    }
  }
}
