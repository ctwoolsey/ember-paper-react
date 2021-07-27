import Service from '@ember/service';
import { A } from '@ember/array';

export default class RenderStackService extends Service {

  constructor() {
    super();
    this.renderStack = A();
  }

  addRenderObject(callback) {
    this.renderStack.pushObject(callback);
  }

  /*removeRenderObject() {
    return this.renderStack.popObject();
  }*/

  renderNextObject() {
    let callback = this.renderStack.popObject();
    if (callback) {
      callback();
    }
  }

  /*isThisMe(element) {
    return element === this.renderStack.lastObject[0];
  }*/

}
