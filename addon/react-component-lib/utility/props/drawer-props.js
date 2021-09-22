import { DivNativePropObj } from './native-global-props/div-native-props';
import { ChildrenHolderPropObj } from './native-global-props/children-holder-props';

const props = {
  anchor: null,
  children: null,
  classes: null,
  elevation: null,
  hideBackdrop: null,
  ModalProps: null,
  onClose: null,
  open: null,
  PaperProps: null,
  SlideProps: null,
  sx: null,
  transitionDuration: null,
  variant: null,
  ref: null
};

const propsNotForComponent = {
}

const stateProps = {
  open: null,
  sx: null,
  variant: null
}

const statefulPropsNotForComponent = {
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
