import Button from '@mui/material/Button';
import { ButtonPropObj } from '../prop-files/button-props';
import { ReactBase } from './base/react-base';
/*
For some reason the tests for this component will fail if this is not included.
An error about hooks being called incorrectly occurs.  Probably the version of React used in the
Icon is different from that of the test suite??
 */
import AccessAlarmRounded from '@mui/icons-material/AccessAlarmRounded';

export class ReactButton extends ReactBase{
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = Button;
    this.initialize(ButtonPropObj);
  }
}
