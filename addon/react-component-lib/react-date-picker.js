import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { ReactBase } from './base/react-base';
import { DatePickerPropObj } from '../prop-files/date-picker-props';
import { dateOrTimeComponent } from '../decorators/for-react/date-or-time-component';

@dateOrTimeComponent
export class ReactDatePicker extends ReactBase{
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = DatePicker;
    this.initializeWithTextField(DatePickerPropObj);
  }
}
