import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { ReactCheckRadioSwitch } from "./react-check-radio-switch";
import { ReactConditionalThemeProvider } from "./react-conditional-theme-provider";

/* Does not currently implement:
    checkedIcon, icon, id, indeterminateIcon
*/
export class ReactCheckbox extends ReactCheckRadioSwitch {
  constructor(props) {
    super(props);
    this.controlType = Checkbox;
  }
}
