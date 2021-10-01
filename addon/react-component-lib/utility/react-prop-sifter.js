import { reactCreateIcon } from "./react-create-icon";

function reactPropSifter(componentProps, propsObj) {
  const siftedProps = {
    staticProps: {},
    stateProps: {},
    propsNotForComponent: {},
    statefulPropsNotForComponent: {}
  }

  const props = propsObj.props();
  const stateProps = propsObj.stateProps();
  const propsNotForComponent = propsObj.propsNotForComponent();
  const statefulPropsNotForComponent = propsObj.statefulPropsNotForComponent();

  for (let propName in componentProps) {
    let value = componentProps[propName];
    if (value && propName.toLowerCase().endsWith('icon')) {
      value = reactCreateIcon(value);
    }
    if (Object.prototype.hasOwnProperty.call(stateProps, propName)) {
      siftedProps.stateProps[propName] = value;
    } else {
      if (Object.prototype.hasOwnProperty.call(statefulPropsNotForComponent, propName)) {
        siftedProps.statefulPropsNotForComponent[propName] = value;
      } else {
        if (Object.prototype.hasOwnProperty.call(propsNotForComponent, propName)) {
          siftedProps.propsNotForComponent[propName] = value;
        } else {
          if (Object.prototype.hasOwnProperty.call(props, propName)) {
            siftedProps.staticProps[propName] = value;
          }
        }
      }
    }
  }
  return siftedProps;
}

export { reactPropSifter };
