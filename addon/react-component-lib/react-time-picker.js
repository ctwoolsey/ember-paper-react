import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { ReactBase } from './base/react-base';
import { TimePickerPropObj } from '../prop-files/time-picker-props';
import { dateOrTimeComponent } from '../decorators/for-react/date-or-time-component';

@dateOrTimeComponent
export class ReactTimePicker extends ReactBase{
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = TimePicker;
    this.initializeDateOrTimeComponent(TimePickerPropObj);
  }
}
