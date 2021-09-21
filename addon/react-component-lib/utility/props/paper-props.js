import { ThemeProps, ThemeStateProps, ThemePropsNotForComponent, ThemeStatePropsNotForComponent } from './theme-props';
import { DivNativeProps, DivNativeStateProps, DivNativeNotForComponent, DivNativeStatePropsNotForComponent } from './native-global-props/div-native-props';

const props = {
  children: null,
  classes: null,
  component: null,
  elevation: null,
  square: null,
  sx: null,
  variant: null,
  ref: null
};

const propsNotForComponent = {
}

const stateProps = {
  elevation: null,
  square: null,
  sx: null,
  variant: null
}

const statefulPropsNotForComponent = {
}

const PaperProps = () => {return Object.assign({}, ThemeProps(), DivNativeProps(), props)};
const PaperStateProps = () => {return Object.assign({}, ThemeStateProps(), DivNativeStateProps(), stateProps)};
const PaperPropsNotForComponent = () => {return Object.assign({}, ThemePropsNotForComponent(), DivNativeNotForComponent(), propsNotForComponent)};
const PaperStatePropsNotForComponent = () => {return Object.assign({}, ThemeStatePropsNotForComponent(), DivNativeStatePropsNotForComponent(), statefulPropsNotForComponent)};

export { PaperProps, PaperStateProps, PaperPropsNotForComponent, PaperStatePropsNotForComponent }
