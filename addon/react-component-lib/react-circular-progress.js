import CircularProgress from '@mui/material/CircularProgress'
import { ReactBase } from './base/react-base';
import { CircularProgressStateProps, CircularProgressPropsNotForComponent } from './utility/props/circular-progress-props';

export class ReactCircularProgress extends ReactBase{
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = CircularProgress;
    this.initialize(CircularProgressStateProps(), CircularProgressPropsNotForComponent());
  }
}
