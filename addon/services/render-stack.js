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


  renderNext() {
    let callbackObj = this.renderStack.popObject();
    if (callbackObj) {
      callbackObj.callbackFn.apply(callbackObj.thisPtr);
    }
  }

}
