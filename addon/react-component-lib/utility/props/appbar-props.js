import { PaperPropObj } from './paper-props';

const props = {
  children: null,
  classes: null,
  color: null,
  enableColorOnDark: null,
  position: null,
  sx: null,
  ref: null
};

const propsNotForComponent = {
}

const stateProps = {
  color: null,
  position: null,
  sx: null
}

const statefulPropsNotForComponent = {
  theme: null
}

const AppbarProps = () => { return Object.assign({}, PaperPropObj.props(), props) };
const AppbarStateProps = () => {return Object.assign({}, PaperPropObj.stateProps(), stateProps) };
const AppbarPropsNotForComponent = () => {return Object.assign({}, PaperPropObj.propsNotForComponent(), propsNotForComponent)};
const AppbarStatePropsNotForComponent = () => {return Object.assign({}, PaperPropObj.statefulPropsNotForComponent(), statefulPropsNotForComponent)};

const AppbarPropObj = {
  props: AppbarProps,
  stateProps: AppbarStateProps,
  propsNotForComponent: AppbarPropsNotForComponent,
  statefulPropsNotForComponent: AppbarStatePropsNotForComponent
}

export { AppbarPropObj }
