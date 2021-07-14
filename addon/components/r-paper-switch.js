import BaseLabeledCheckRadioSwitchComponent from "./base/base-labeled-check-radio-switch";

export default class RPaperSwitchComponent extends BaseLabeledCheckRadioSwitchComponent {
  constructor() {
    super(...arguments);
    this.controlType = 'switch';
  }
}
