import BaseCheckRadioSwitchComponent from "./base/base-check-radio-switch";

export default class RPaperRadioComponent extends BaseCheckRadioSwitchComponent {
  constructor() {
    super(...arguments);
    this.controlType = 'radio';
  }
}
