import BaseLabeledCheckRadioSwitchComponent from "./base/base-labeled-check-radio-switch";

export default class RPaperRadioComponent extends BaseLabeledCheckRadioSwitchComponent {
  constructor() {
    super(...arguments);
    this.controlType = 'radio';
  }
}
