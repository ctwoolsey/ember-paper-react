import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { ReactBase } from './base/react-base';
import { DateTimePickerPropObj } from '../prop-files/date-time-picker-props';
import { dateOrTimeComponent } from '../decorators/for-react/date-or-time-component';

@dateOrTimeComponent
export class ReactDateTimePicker extends ReactBase{
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = DateTimePicker;
    this.initializeDateOrTimeComponent(DateTimePickerPropObj);
  }
}
