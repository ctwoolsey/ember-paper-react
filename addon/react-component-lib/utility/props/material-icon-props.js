import { SvgIconProps, SvgIconStateProps, SvgIconPropsNotForComponent} from './svg-icon-props';

const props = {
};

const stateProps = {
}

const statefulPropsNotForComponent = {
  reactIcon: null
}

const MaterialIconProps = () => { return Object.assign({}, SvgIconProps(), props) };
const MaterialIconStateProps = () => {return Object.assign({}, SvgIconStateProps(), stateProps)};
const MaterialIconPropsNotForComponent = () => {return Object.assign({}, SvgIconPropsNotForComponent(), statefulPropsNotForComponent)};

export { MaterialIconProps, MaterialIconStateProps, MaterialIconPropsNotForComponent }
