import Service from '@ember/service';

export default class InputMaskTypesService extends Service {
  constructor() {
    super();
    this.iMaskTypes = {};
    this.numberFormatNumericTypes = {};
    this.numberFormatPatternTypes = {};
  }

  addIMaskType(identifier, maskObject) {
    this.iMaskTypes[identifier] = maskObject;
  }

  addNumberFormatNumericType(identifier, maskObject) {
    this.numberFormatNumericTypes[identifier] = maskObject;
  }

  addNumberFormatPatternType(identifier, maskObject) {
    this.numberFormatPatternTypes[identifier] = maskObject;
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

  getNumberFormatPatternType(identifier) {
    if (this.numberFormatPatternTypes[identifier]) {
      return this.numberFormatPatternTypes[identifier];
    } else {
      return {};
    }
  }
}
