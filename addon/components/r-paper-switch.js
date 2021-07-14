import BaseCheckRadioSwitchComponent from "./base/base-check-radio-switch";

export default class RPaperSwitchComponent extends BaseCheckRadioSwitchComponent {
  constructor() {
    super(...arguments);
    this.controlType = 'switch';
  }
}
