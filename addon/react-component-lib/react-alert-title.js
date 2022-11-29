import AlertTitle from '@mui/material/AlertTitle';
import { ReactBase } from './base/react-base';
import { AlertTitlePropObj } from '../prop-files/alert-title-props';

export class ReactAlertTitle extends ReactBase{
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = AlertTitle;
    this.initialize(AlertTitlePropObj);
  }
}
