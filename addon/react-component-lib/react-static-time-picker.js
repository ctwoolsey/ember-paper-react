import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';
import { ReactBase } from './base/react-base';
import { StaticTimePickerPropObj } from '../prop-files/static-time-picker-props';
import { dateOrTimeComponent } from '../decorators/for-react/date-or-time-component';

@dateOrTimeComponent
export class ReactStaticTimePicker extends ReactBase{
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = StaticTimePicker;
    this.initializeDateOrTimeComponent(StaticTimePickerPropObj);
  }
}
