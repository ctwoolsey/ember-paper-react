import { DivNativeProps, DivNativeStateProps } from "./native-global-props/div-native-props";
import { ThemeProps, ThemeStateProps, ThemePropsNotForComponent, ThemeStatePropsNotForComponent } from "./theme-props";

const props = {
  avatar: null,
  children: null,
  classes: null,
  clickable: null,
  color: null,
  component: null,
  deleteIcon: null,
  disabled: null,
  icon: null,
  label: null,
  onDelete: null,
  size: null,
  sx: null,
  variant: null,
  ref: null
};

const propsNotForComponent = {
}

const stateProps = {
  avatar: null,
  clickable: null,
  color: null,
  deleteIcon: null,
  disabled: null,
  icon: null,
  label: null,
  size: null,
  sx: null,
  variant: null
}

const statefulPropsNotForComponent = {
  theme: null
}

const ChipProps = () => { return Object.assign({}, ThemeProps(), DivNativeProps(), props) };
const ChipStateProps = () => {return Object.assign({}, ThemeStateProps(), DivNativeStateProps(), stateProps) };
const ChipPropsNotForComponent = () => {return Object.assign({}, ThemePropsNotForComponent(), propsNotForComponent)};
const ChipStatePropsNotForComponent = () => {return Object.assign({}, ThemeStatePropsNotForComponent(), statefulPropsNotForComponent)};

export { ChipProps, ChipStateProps, ChipPropsNotForComponent, ChipStatePropsNotForComponent }
