import DialogContentText from '@mui/material/DialogContentText';
import { ReactBase } from '../base/react-base';
import { DialogContentTextPropObj } from '../../prop-files/dialog-content-text-props';

export class ReactDialogContentText extends ReactBase{
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = DialogContentText;
    this.initialize(DialogContentTextPropObj);
  }
}
