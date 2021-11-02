import Card from '@mui/material/Card';
import { ReactBase } from '../base/react-base';
import { CardPropObj } from '../../prop-files/card-props';

export class ReactCard extends ReactBase {
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = Card;
    this.initialize(CardPropObj);
  }
}

