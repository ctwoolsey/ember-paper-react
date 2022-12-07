import { ThemePropObj } from './theme-props';
import { DatePickerPropObj } from './date-picker-props';
import { TimePickerPropObj } from './time-picker-props';

const props = {
};

const propsNotForComponent = {
}

const stateProps = {
}

const statefulPropsNotForComponent = {
}

const DateTimePickerProps = () => { return Object.assign({}, ThemePropObj.props(), DatePickerPropObj.props(), TimePickerPropObj.props(), props) };
const DateTimePickerStateProps = () => {return Object.assign({}, ThemePropObj.stateProps(), DatePickerPropObj.stateProps(), TimePickerPropObj.stateProps(), stateProps) };
const DateTimePickerPropsNotForComponent = () => {return Object.assign({}, ThemePropObj.propsNotForComponent(), DatePickerPropObj.propsNotForComponent(), TimePickerPropObj.propsNotForComponent(), propsNotForComponent)};
const DateTimePickerStatePropsNotForComponent = () => {return Object.assign({}, ThemePropObj.statefulPropsNotForComponent(), DatePickerPropObj.statefulPropsNotForComponent(), TimePickerPropObj.statefulPropsNotForComponent(), statefulPropsNotForComponent)};

const DateTimePickerPropObj = {
  props: DateTimePickerProps,
  stateProps: DateTimePickerStateProps,
  propsNotForComponent: DateTimePickerPropsNotForComponent,
  statefulPropsNotForComponent: DateTimePickerStatePropsNotForComponent
}

export { DateTimePickerPropObj }
