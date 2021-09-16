import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { ReactBase } from '../base/react-base';
import { CardHeaderStateProps, CardHeaderPropsNotForComponent } from '../utility/props/card-header-props';

export class ReactCardHeader extends ReactBase {
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = CardHeader;
    this.initialize(CardHeaderStateProps(), CardHeaderPropsNotForComponent());
  }

  placeStateProps(statePropsForComponent) {
    statePropsForComponent = super.placeStateProps(statePropsForComponent);
    if (!statePropsForComponent.action) {
      statePropsForComponent.action = (<Button>Dummy</Button>);
    }
    if (!statePropsForComponent.avatar) {
      statePropsForComponent.avatar = (<Avatar>Dummy</Avatar>);
    }
    if (!statePropsForComponent.subheader) {
      statePropsForComponent.subheader = 'Dummy';
    }
    if (!statePropsForComponent.title) {
      statePropsForComponent.title = 'Dummy';
    }
    return statePropsForComponent;
  }
}
