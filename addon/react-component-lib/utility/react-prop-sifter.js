function reactPropSifter(componentProps, propsObj, includeAriaAndData) {
  includeAriaAndData = includeAriaAndData === false ? includeAriaAndData : true;
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

    if (Object.prototype.hasOwnProperty.call(stateProps, propName)) {
      siftedProps.stateProps[propName] = value;
    } else {
      if (Object.prototype.hasOwnProperty.call(statefulPropsNotForComponent, propName)) {
        siftedProps.statefulPropsNotForComponent[propName] = componentProps[propName];
      } else {
        if (Object.prototype.hasOwnProperty.call(propsNotForComponent, propName)) {
          siftedProps.propsNotForComponent[propName] = componentProps[propName];
        } else {
          if (Object.prototype.hasOwnProperty.call(props, propName)) {
            siftedProps.staticProps[propName] = value;
          }
        }
      }
    }

    if (includeAriaAndData && (propName.startsWith('aria-') || propName.startsWith('data-') || propName === 'role')){
      //all aria, data, and role attributes are stored in state props, but are not always stateful.
      // Only if the attribute is passed as an ember attribute ('@') will it trigger a change
      siftedProps.stateProps[propName] = value;
    }
  }
  return siftedProps;
}

export { reactPropSifter };
