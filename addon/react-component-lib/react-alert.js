import Alert from '@mui/material/Alert';
import { ReactBase } from './base/react-base';
import { AlertPropObj } from '../prop-files/alert-props';
import Button from '@mui/material/Button';
import React from 'react';

export class ReactAlert extends ReactBase{
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = Alert;
    this.initialize(AlertPropObj);
  }

  placeStateProps(statePropsForComponent) {
    statePropsForComponent = super.placeStateProps(statePropsForComponent);
    if (statePropsForComponent.action === true) {
      statePropsForComponent.action = (<Button></Button>);
    }

    return statePropsForComponent;
  }
}
