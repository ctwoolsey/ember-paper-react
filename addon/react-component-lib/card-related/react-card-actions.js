import CardActions from '@mui/material/CardActions';
import { ReactBase } from '../base/react-base';
import { CardActionPropObj } from '../../prop-files/card-actions-props';

export class ReactCardActions extends ReactBase{
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = CardActions;
    this.initialize(CardActionPropObj);
  }
}
