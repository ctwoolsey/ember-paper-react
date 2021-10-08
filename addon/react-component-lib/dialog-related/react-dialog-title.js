import DialogTitle from '@mui/material/DialogTitle';
import { ReactBase } from '../base/react-base';
import { DialogTitlePropObj } from '../../prop-files/dialog-title-props';

export class ReactDialogTitle extends ReactBase{
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = DialogTitle;
    this.initialize(DialogTitlePropObj);
  }
}
