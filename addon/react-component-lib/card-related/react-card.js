import Card from '@mui/material/Card';
import { ReactBase } from '../base/react-base';
import { CardStateProps, CardPropsNotForComponent, CardStatePropsNotForComponent } from '../utility/props/card-props';

export class ReactCard extends ReactBase {
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = Card;
    this.initialize(CardStateProps(), CardPropsNotForComponent(), CardStatePropsNotForComponent());
  }
}

