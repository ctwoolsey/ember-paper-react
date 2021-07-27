import BaseLabeledCheckRadioSwitchComponent from "./base/base-labeled-check-radio-switch";
import { COMPONENT_TYPES } from "../react-component-lib/constants/constants";

export default class RPaperCheckbox extends BaseLabeledCheckRadioSwitchComponent {
  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.CHECKBOX;
  }
}
