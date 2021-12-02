import { PaperPropObj } from './paper-props';

const props = {
  children: undefined,
  classes: undefined,
  color: undefined,
  enableColorOnDark: undefined,
  position: undefined,
  sx: undefined,
  ref: undefined
};

const propsNotForComponent = {
}

const stateProps = {
  color: undefined,
  position: undefined,
  sx: undefined
}

const statefulPropsNotForComponent = {
  children: undefined,
  theme: undefined
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
