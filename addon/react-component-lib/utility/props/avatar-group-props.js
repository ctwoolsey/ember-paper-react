import { ThemeProps, ThemeStateProps, ThemePropsNotForComponent, ThemeStatePropsNotForComponent } from './theme-props';
import { DivNativeProps, DivNativeStateProps } from './native-global-props/div-native-props';

const props = {
  children: null,
  classes: null,
  max: null,
  spacing: null,
  sx: null,
  variant: null,
  ref: null
};

const propsNotForComponent = {
}

const stateProps = {
  sx: null
}

//these are part of the props specification but must be removed from component
//and handled outside of the react component a special case
const statefulPropsNotForComponent = {
  max: null,
  spacing: null,
  variant: null
}

const AvatarGroupProps = () => {return Object.assign({}, ThemeProps(), DivNativeProps(), props) };
const AvatarGroupStateProps = () => {return Object.assign({}, ThemeStateProps(), DivNativeStateProps(), stateProps) };
const AvatarGroupPropsNotForComponent = () => {return Object.assign({}, ThemePropsNotForComponent(), propsNotForComponent) };
const AvatarGroupStatePropsNotForComponent = () => {return Object.assign({}, ThemeStatePropsNotForComponent(), statefulPropsNotForComponent) };

export { AvatarGroupProps, AvatarGroupStateProps, AvatarGroupPropsNotForComponent, AvatarGroupStatePropsNotForComponent }
