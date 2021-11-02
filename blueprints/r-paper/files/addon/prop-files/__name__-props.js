import { ThemePropObj } from './theme-props';
import { DivNativePropObj } from './native-global-props/div-native-props';

const props = {
  children: null,
  classes: null,
  sx: null,
  ref: null
};

const propsNotForComponent = {
}

const stateProps = {
  sx: null
}

const statefulPropsNotForComponent = {
  children: null
}

const <%= pascalCase %>Props = () => { return Object.assign({}, ThemePropObj.props(), DivNativePropObj.props(), props) };
const <%= pascalCase %>StateProps = () => {return Object.assign({}, ThemePropObj.stateProps(), DivNativePropObj.stateProps(), stateProps) };
const <%= pascalCase %>PropsNotForComponent = () => {return Object.assign({}, ThemePropObj.propsNotForComponent(), DivNativePropObj.propsNotForComponent(), propsNotForComponent)};
const <%= pascalCase %>StatePropsNotForComponent = () => {return Object.assign({}, ThemePropObj.statefulPropsNotForComponent(), DivNativePropObj.statefulPropsNotForComponent(), statefulPropsNotForComponent)};

const <%= pascalCase %>PropObj = {
  props: <%= pascalCase %>Props,
  stateProps: <%= pascalCase %>StateProps,
  propsNotForComponent: <%= pascalCase %>PropsNotForComponent,
  statefulPropsNotForComponent: <%= pascalCase %>StatePropsNotForComponent
}

export { <%= pascalCase %>PropObj }
