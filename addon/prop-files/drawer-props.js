import { DivNativePropObj } from './native-global-props/div-native-props';
import { ChildrenHolderPropObj } from './native-global-props/children-holder-props';

const props = {
  anchor: undefined,
  children: undefined,
  classes: undefined,
  elevation: undefined,
  hideBackdrop: undefined,
  ModalProps: undefined,
  onClose: undefined,
  open: undefined,
  PaperProps: undefined,
  SlideProps: undefined,
  sx: undefined,
  transitionDuration: undefined,
  variant: undefined,
  ref: undefined
};

const propsNotForComponent = {
}

const stateProps = {
  open: undefined,
  sx: undefined,
  variant: undefined
}

const statefulPropsNotForComponent = {
  children: undefined
}

const DrawerProps = () => { return Object.assign({}, ChildrenHolderPropObj.props(), DivNativePropObj.props(), props) };
const DrawerStateProps = () => {return Object.assign({}, ChildrenHolderPropObj.stateProps(), DivNativePropObj.stateProps(), stateProps) };
const DrawerPropsNotForComponent = () => {return Object.assign({}, ChildrenHolderPropObj.propsNotForComponent(), DivNativePropObj.propsNotForComponent(), propsNotForComponent)};
const DrawerStatePropsNotForComponent = () => {return Object.assign({}, ChildrenHolderPropObj.statefulPropsNotForComponent(), DivNativePropObj.statefulPropsNotForComponent(), statefulPropsNotForComponent)};

const DrawerPropObj = {
  props: DrawerProps,
  stateProps: DrawerStateProps,
  propsNotForComponent: DrawerPropsNotForComponent,
  statefulPropsNotForComponent: DrawerStatePropsNotForComponent
}

export { DrawerPropObj }
