import Snackbar from '@mui/material/Snackbar';
import { ReactBase } from './base/react-base';
import { SnackbarPropObj } from '../prop-files/snackbar-props';
import Button from '@mui/material/Button';
import React from 'react';
import { wrapsChildren } from '../decorators/for-react/wraps-children';

@wrapsChildren
export class ReactSnackbar extends ReactBase{
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = Snackbar;
    this.initialize(SnackbarPropObj);
  }

  placeStateProps(statePropsForComponent) {
    statePropsForComponent = super.placeStateProps(statePropsForComponent);
    if (statePropsForComponent.action === true) {
      statePropsForComponent.action = (<Button></Button>);
    }
    return statePropsForComponent;
  }

  // eslint-disable-next-line no-unused-vars
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.open === true && prevState.open === false) {
     this.props.reactUpdateCallback && this.props.reactUpdateCallback();
    }
  }

  // eslint-disable-next-line no-unused-vars
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (this.state.open === true && nextState.open === false) {
      this.props.saveAttributeNodeChildrenCallback && this.props.saveAttributeNodeChildrenCallback();
    }
    return true;
  }

}
