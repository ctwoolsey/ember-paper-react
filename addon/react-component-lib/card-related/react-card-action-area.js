import CardActionArea from '@mui/material/CardActionArea';
import { ReactBase } from '../base/react-base';
import { CardActionAreaPropObj } from '../../prop-files/card-action-area-props';

export class ReactCardActionArea extends ReactBase{
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = CardActionArea;
    this.initialize(CardActionAreaPropObj);
  }
}
