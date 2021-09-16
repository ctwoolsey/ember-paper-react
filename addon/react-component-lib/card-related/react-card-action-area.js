import CardActionArea from '@mui/material/CardActionArea';
import { ReactBase } from '../base/react-base';
import { CardActionAreaStateProps, CardActionAreaPropsNotForComponent } from '../utility/props/card-action-area-props';

export class ReactCardActionArea extends ReactBase{
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = CardActionArea;
    this.initialize(CardActionAreaStateProps(), CardActionAreaPropsNotForComponent());
  }
}
