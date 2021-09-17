import Paper from '@mui/material/Paper';
import { ReactBase } from './base/react-base';
import { PaperStateProps, PaperPropsNotForComponent, PaperStatePropsNotForComponent } from './utility/props/paper-props';

export class ReactPaper extends ReactBase{
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = Paper;
    this.initialize(PaperStateProps(), PaperPropsNotForComponent(), PaperStatePropsNotForComponent())
    this.addedEmberChildren = false;
  }
}
