import Paper from '@mui/material/Paper';
import { ReactBase } from './base/react-base';
import { PaperStateProps, PaperPropsNotForComponent } from './utility/props/paper-props';

export class ReactPaper extends ReactBase{
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = Paper;
    this.initialize(PaperStateProps(), PaperPropsNotForComponent())
    this.addedEmberChildren = false;
  }
}
