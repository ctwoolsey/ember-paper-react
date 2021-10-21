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
  children: null,
  theme: null
}

const AppBarProps = () => { return Object.assign({}, PaperPropObj.props(), props) };
const AppBarStateProps = () => {return Object.assign({}, PaperPropObj.stateProps(), stateProps) };
const AppBarPropsNotForComponent = () => {return Object.assign({}, PaperPropObj.propsNotForComponent(), propsNotForComponent)};
const AppBarStatePropsNotForComponent = () => {return Object.assign({}, PaperPropObj.statefulPropsNotForComponent(), statefulPropsNotForComponent)};

const AppBarPropObj = {
  props: AppBarProps,
  stateProps: AppBarStateProps,
  propsNotForComponent: AppBarPropsNotForComponent,
  statefulPropsNotForComponent: AppBarStatePropsNotForComponent
}

export { AppBarPropObj }
