import React from 'react';
import { ReactChildrenHolder } from './utility/react-children-holder';
import { ReactBase } from './base/react-base';
import { DrawerStateProps, DrawerPropsNotForComponent, DrawerStatePropsNotForComponent } from './utility/props/drawer-props';
import Drawer from '@mui/material/Drawer';


export class ReactDrawer extends ReactBase{
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = Drawer;
    this.addEventListeners = this.addEventListeners.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.componentRef = React.createRef();
    this.initialize(DrawerStateProps(), DrawerPropsNotForComponent(), DrawerStatePropsNotForComponent());
  }

  componentDidMount() {
    setTimeout(this.addEventListeners, 500);
  }

  componentWillUnmount() {
    this.componentRef && this.componentRef.current && this.componentRef.current.removeEventListener('keydown', this.onKeyDown);
  }

  addEventListeners() {
    if (this.componentRef && this.componentRef.current) {
      this.componentRef.current.addEventListener('keydown', this.onKeyDown);
    } else {
      setTimeout(this.addEventListeners, 500);
    }
  }

  onKeyDown() {
    //having this somehow enables the underlying react functionality.  Without this, esc and clicking to close doesn't work.
  }
}
