import Button from '@mui/material/Button';
import { ButtonStateProps, ButtonPropsNotForComponent } from './utility/props/button-props';
import { ReactBase } from './base/react-base';

export class ReactButton extends ReactBase{
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = Button;
    this.initialize(ButtonStateProps(), ButtonPropsNotForComponent(), ButtonPropsNotForComponent());
  }
}
