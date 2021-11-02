import DialogContent from '@mui/material/DialogContent';
import { ReactBase } from '../base/react-base';
import { DialogContentPropObj } from '../../prop-files/dialog-content-props';

export class ReactDialogContent extends ReactBase{
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = DialogContent;
    this.initialize(DialogContentPropObj);
  }
}
