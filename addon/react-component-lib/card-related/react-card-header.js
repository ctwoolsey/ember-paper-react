import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { ReactBase } from '../base/react-base';
import { CardHeaderPropObj } from '../utility/props/card-header-props';

export class ReactCardHeader extends ReactBase {
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = CardHeader;
    this.initialize(CardHeaderPropObj);
  }

  placeStateProps(statePropsForComponent) {
    statePropsForComponent = super.placeStateProps(statePropsForComponent);
    if (!statePropsForComponent.action) {
      statePropsForComponent.action = (<Button></Button>);
    }
    if (!statePropsForComponent.avatar) {
      statePropsForComponent.avatar = (<Avatar></Avatar>);
    }
    if (!statePropsForComponent.subheader) {
      statePropsForComponent.subheader = '';
    }
    if (!statePropsForComponent.title) {
      statePropsForComponent.title = '';
    }
    return statePropsForComponent;
  }
}
