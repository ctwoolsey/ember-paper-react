import { SvgIconPropObj } from './svg-icon-props';

const props = {
};

const stateProps = {
}

const propsNotForComponent = {
}

const statefulPropsNotForComponent = {
  reactIcon: null
}

const MaterialIconProps = () => { return Object.assign({}, SvgIconPropObj.props(), props) };
const MaterialIconStateProps = () => {return Object.assign({}, SvgIconPropObj.stateProps(), stateProps)};
const MaterialIconPropsNotForComponent = () => {return Object.assign({}, SvgIconPropObj.propsNotForComponent(), propsNotForComponent)};
const MaterialIconStatePropsNotForComponent = () => {return Object.assign({}, SvgIconPropObj.statefulPropsNotForComponent(), statefulPropsNotForComponent)};

const MaterialIconPropObj = {
  props: MaterialIconProps,
  stateProps: MaterialIconStateProps,
  propsNotForComponent: MaterialIconPropsNotForComponent,
  statefulPropsNotForComponent: MaterialIconStatePropsNotForComponent
}

export { MaterialIconPropObj }
