import Chip from '@mui/material/Chip';
import { ReactBase } from './base/react-base';
import {
  ChipStateProps,
  ChipPropsNotForComponent,
  ChipStatePropsNotForComponent
} from './utility/props/chip-props';

export class ReactChip extends ReactBase{
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = Chip;
    this.initialize(ChipStateProps(), ChipPropsNotForComponent(), ChipStatePropsNotForComponent());
  }
}
