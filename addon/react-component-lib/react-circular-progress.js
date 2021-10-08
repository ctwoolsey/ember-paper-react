import CircularProgress from '@mui/material/CircularProgress'
import { ReactBase } from './base/react-base';
import { CircularProgressPropObj } from '../prop-files/circular-progress-props';

export class ReactCircularProgress extends ReactBase{
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = CircularProgress;
    this.initialize(CircularProgressPropObj);
  }
}
