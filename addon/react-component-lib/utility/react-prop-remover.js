function _addPropToUnified(unifiedProps, propName, exceptions) {
  if (!exceptions.includes(propName)) {
    unifiedProps.push(propName);
  }
}
function _unifySiftedProps(siftedPropsToRemove, exceptions) {
  const unifiedProps = [];

  for (let propName in siftedPropsToRemove.staticProps) {
    _addPropToUnified(unifiedProps, propName, exceptions);
  }
  for (let propName in siftedPropsToRemove.stateProps) {
    _addPropToUnified(unifiedProps, propName, exceptions);
  }
  for (let propName in siftedPropsToRemove.propsNotForComponent) {
    _addPropToUnified(unifiedProps, propName, exceptions);
  }
  for (let propName in siftedPropsToRemove.statefulPropsNotForComponent) {
    _addPropToUnified(unifiedProps, propName, exceptions);
  }

  return unifiedProps;
}

function _removeProps(unifiedProps, siftedProps) {
  for (let propName in siftedProps) {
    if (unifiedProps.includes(propName)) {
      delete siftedProps[propName];
    }
  }
}

function reactPropRemover(siftedProps, siftedPropsToRemove, exceptions) {
  exceptions = exceptions ? exceptions : [];

  const unifiedProps = _unifySiftedProps(siftedPropsToRemove, exceptions);

  _removeProps(unifiedProps, siftedProps.staticProps);
  _removeProps(unifiedProps, siftedProps.stateProps);
  _removeProps(unifiedProps, siftedProps.propsNotForComponent);
  _removeProps(unifiedProps, siftedProps.statefulPropsNotForComponent);

  return siftedProps;
}

export { reactPropRemover };
