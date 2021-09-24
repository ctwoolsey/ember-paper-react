import CardContent from '@mui/material/CardContent';
import { ReactBase } from '../base/react-base';
import { CardContentPropObj } from '../utility/props/card-content-props';

export class ReactCardContent extends ReactBase{
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = CardContent;
    this.initialize(CardContentPropObj);
  }
}
