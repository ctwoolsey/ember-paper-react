import BaseCheckRadioSwitchComponent from "./base/base-check-radio-switch";

export default class RPaperCheckbox extends BaseCheckRadioSwitchComponent {
  constructor() {
    super(...arguments);
    this.controlType = 'checkbox';
  }
}
