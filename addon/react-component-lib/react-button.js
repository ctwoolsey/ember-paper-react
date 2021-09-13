import Button from '@material-ui/core/Button';
import { ButtonStateProps } from "./utility/props/button-props";
import { ReactBase } from "./base/react-base";

export class ReactButton extends ReactBase{
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = Button;
    this.initialize(ButtonStateProps());
  }
}
