import Service from '@ember/service';
import { A } from '@ember/array';

export default class RenderStackService extends Service {

  constructor() {
    super();
    this.renderStack = A();
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

  canStartRendering(emberComponent) {
    let callbackObj = this.renderStack.lastObject;
    return callbackObj && (callbackObj.thisPtr === emberComponent);
  }

  //this renders like a traditional stack
  /*renderNext() {
    let callbackObj = this.renderStack.popObject();
    if (callbackObj) {
      callbackObj.callbackFn.apply(callbackObj.thisPtr);
    }
  }*/

  renderNext() {
    let callbackObj = this.renderStack.shiftObject();
    if (callbackObj) {
      callbackObj.callbackFn.apply(callbackObj.thisPtr);
    }
  }

  renderLast() {
    let callbackObj = this.renderStack.popObject();
    if (callbackObj) {
      callbackObj.callbackFn.apply(callbackObj.thisPtr);
    }
  }

}
