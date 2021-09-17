import DialogTitle from '@mui/material/DialogTitle';
import { ReactBase } from '../base/react-base';
import { DialogTitleStateProps, DialogTitlePropsNotForComponent, DialogTitleStatePropsNotForComponent } from '../utility/props/dialog-title-props';

export class ReactDialogTitle extends ReactBase{
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = DialogTitle;
    this.initialize(DialogTitleStateProps(), DialogTitlePropsNotForComponent(), DialogTitleStatePropsNotForComponent());
  }
}
