import BaseLabeledCheckRadioSwitchComponent from "./base/base-labeled-check-radio-switch";

export default class RPaperCheckbox extends BaseLabeledCheckRadioSwitchComponent {
  constructor() {
    super(...arguments);
    this.controlType = 'checkbox';
  }
}
