import CardMedia from '@mui/material/CardMedia';
import { ReactBase } from '../base/react-base';
import { CardMediaStateProps, CardMediaPropsNotForComponent } from '../utility/props/card-media-props';

export class ReactCardMedia extends ReactBase{
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = CardMedia;
    this.initialize(CardMediaStateProps(), CardMediaPropsNotForComponent());
  }
}
