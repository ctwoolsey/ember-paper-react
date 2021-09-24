import DialogContentText from '@mui/material/DialogContentText';
import { ReactBase } from '../base/react-base';
import { DialogContentTextPropObj } from '../utility/props/dialog-content-text-props';

export class ReactDialogContentText extends ReactBase{
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = DialogContentText;
    this.initialize(DialogContentTextPropObj);
  }
}
