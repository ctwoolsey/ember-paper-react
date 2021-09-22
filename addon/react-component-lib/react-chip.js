import Chip from '@mui/material/Chip';
import { ReactBase } from './base/react-base';
import {ChipPropObj} from './utility/props/chip-props';

export class ReactChip extends ReactBase{
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = Chip;
    this.initialize(ChipPropObj);
  }
}
