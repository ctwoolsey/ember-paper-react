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
    if (Object.prototype.hasOwnProperty.call(stateProps, propName)) {
      siftedProps.stateProps[propName] = componentProps[propName];
    } else {
      if (Object.prototype.hasOwnProperty.call(statefulPropsNotForComponent, propName)) {
        siftedProps.statefulPropsNotForComponent[propName] = componentProps[propName];
      } else {
        if (Object.prototype.hasOwnProperty.call(propsNotForComponent, propName)) {
          siftedProps.propsNotForComponent[propName] = componentProps[propName];
        } else {
          if (Object.prototype.hasOwnProperty.call(props, propName)) {
            siftedProps.staticProps[propName] = componentProps[propName];
          }
        }
      }
    }
  }
  return siftedProps;
}

export { reactPropSifter };
