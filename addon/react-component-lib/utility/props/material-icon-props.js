import { SvgIconProps, SvgIconStateProps, SvgIconPropsNotForComponent, SvgIconStatePropsNotForComponent } from './svg-icon-props';

const props = {
};

const stateProps = {
}

const propsNotForComponent = {
}

const statefulPropsNotForComponent = {
  reactIcon: null
}

const MaterialIconProps = () => { return Object.assign({}, SvgIconProps(), props) };
const MaterialIconStateProps = () => {return Object.assign({}, SvgIconStateProps(), stateProps)};
const MaterialIconPropsNotForComponent = () => {return Object.assign({}, SvgIconPropsNotForComponent(), propsNotForComponent)};
const MaterialIconStatePropsNotForComponent = () => {return Object.assign({}, SvgIconStatePropsNotForComponent(), statefulPropsNotForComponent)};

export { MaterialIconProps, MaterialIconStateProps, MaterialIconPropsNotForComponent, MaterialIconStatePropsNotForComponent }
