import Chip from '@mui/material/Chip';
import { ReactBase } from './base/react-base';
import {ChipPropObj} from '../prop-files/chip-props';
import Avatar from "@mui/material/Avatar";

export class ReactChip extends ReactBase{
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = Chip;
    this.initialize(ChipPropObj);
  }

  placeStateProps(statePropsForComponent) {
    statePropsForComponent = super.placeStateProps(statePropsForComponent);
    if (!statePropsForComponent.icon) {
      statePropsForComponent.avatar = (<Avatar></Avatar>);
    }
    return statePropsForComponent;
  }
}
