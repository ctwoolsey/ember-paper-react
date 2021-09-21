import { DivNativeProps, DivNativeStateProps, DivNativeNotForComponent, DivNativeStatePropsNotForComponent } from './native-global-props/div-native-props';
import { ChildrenHolderProps, ChildrenHolderStateProps, ChildrenHolderPropsNotForComponent, ChildrenHolderStatePropsNotForComponent } from './native-global-props/children-holder-props';

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

const DrawerProps = () => { return Object.assign({}, ChildrenHolderProps(), DivNativeProps(), props) };
const DrawerStateProps = () => {return Object.assign({}, ChildrenHolderStateProps(), DivNativeStateProps(), stateProps) };
const DrawerPropsNotForComponent = () => {return Object.assign({}, ChildrenHolderPropsNotForComponent(), DivNativeNotForComponent(), propsNotForComponent)};
const DrawerStatePropsNotForComponent = () => {return Object.assign({}, ChildrenHolderStatePropsNotForComponent(), DivNativeStatePropsNotForComponent(), statefulPropsNotForComponent)};

export { DrawerProps, DrawerStateProps, DrawerPropsNotForComponent, DrawerStatePropsNotForComponent }
