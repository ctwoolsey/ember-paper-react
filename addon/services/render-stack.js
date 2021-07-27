import Service from '@ember/service';
import { A } from '@ember/array';

export default class RenderStackService extends Service {

  constructor() {
    super();
    this.renderStack = A();
  }

  addRenderCallback(callback) {
    this.renderStack.pushObject(callback);
  }


  renderNext() {
    let callback = this.renderStack.popObject();
    if (callback) {
      callback();
    }
  }

}
