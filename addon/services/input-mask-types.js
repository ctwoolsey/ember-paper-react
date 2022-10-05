import Service from '@ember/service';

export default class InputMaskTypesService extends Service {
  constructor() {
    super();
    this.iMaskTypes = {};
    this.numberFormatNumericTypes = {};
  }

  addIMaskType(identifier, maskObject) {
    this.iMaskTypes[identifier] = maskObject;
  }

  addNumberFormatNumericType(identifier, maskObject) {
    this.numberFormatTypes[identifier] = maskObject;
  }

  getIMaskType(identifier) {
    if (this.iMaskTypes[identifier]) {
      return this.iMaskTypes[identifier];
    } else {
      return {};
    }
  }

  getNumberFormatNumericType(identifier) {
    if (this.numberFormatNumericTypes[identifier]) {
      return this.numberFormatNumericTypes[identifier];
    } else {
      return {};
    }
  }
}
