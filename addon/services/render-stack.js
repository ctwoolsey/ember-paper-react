import Service from '@ember/service';
import { A } from '@ember/array';

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
    let callbackObj = this.renderStack.shiftObject();
    if (callbackObj) {
      callbackObj.callbackFn.apply(callbackObj.thisPtr);
    } else {
      this.renderLater();
    }
  }

  renderLast() {
    let callbackObj = this.renderStack.popObject();
    if (callbackObj) {
      callbackObj.callbackFn.apply(callbackObj.thisPtr);
    }
  }

  renderLater() {
    const callbackObj = this.renderLaterStack.popObject();
    callbackObj && callbackObj.callbackFn.apply(callbackObj.thisPtr);
  }
}
