import DialogActions from '@mui/material/DialogActions';
import { ReactBase } from '../base/react-base';
import { DialogActionsPropObj } from '../utility/props/dialog-actions-props';

export class ReactDialogActions extends ReactBase{
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = DialogActions;
    this.initialize(DialogActionsPropObj);
  }
}
