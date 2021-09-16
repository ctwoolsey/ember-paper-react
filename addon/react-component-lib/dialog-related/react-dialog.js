import React from 'react';
import Dialog from '@mui/material/Dialog';
import { ReactChildrenHolder } from '../utility/react-children-holder';
import { ReactBase } from '../base/react-base';
import { DialogStateProps, DialogPropsNotForComponent } from '../utility/props/dialog-props';


export class ReactDialog extends ReactBase{
  constructor(props) {
    super(props);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.onClose = this.onClose.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.backgroundClicked = false;

    this.staticProps.onClose = this.onClose;
    this.initialize(DialogStateProps(), DialogPropsNotForComponent());

  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
    const dialogArea = document.getElementsByClassName('MuiDialog-paper')
    dialogArea.length && dialogArea[0].addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
    const dialogArea = document.getElementsByClassName('MuiDialog-paper')
    dialogArea.length && dialogArea[0].removeEventListener('keydown', this.onKeyDown);
  }

  handleClickOutside(event) {
    const dialogArea = document.getElementsByClassName('MuiDialog-paper');
    if (dialogArea.length && !dialogArea[0].contains(event.target)) {
      this.backgroundClicked = true;
    }
  }

  onKeyDown() {
    //having this somehow enables the underlying react functionality.  Without this, esc doesn't work.
  }

  onClose(event, reason) {
    if (this.props.keepOpenOnClickOutside && this.backgroundClicked) {
      this.setOpen(true);
      this.backgroundClicked = false;
    } else {
      this.props.onClose(event, reason);
      this.setOpen(false);
    }
  }

  renderComponent() {
    return (
      <Dialog
        ref={this.componentRef}
        {...(this.placeProps(this.staticProps))}
        {...(this.placeStateProps(this.statePropsForComponent))}
      >
        <ReactChildrenHolder
          {...(this.props.reactRenderCallback ? {reactRenderCallback: this.props.reactRenderCallback} : {})}
          {...(this.props.saveChildrenCallback ? {saveChildrenCallback: this.props.saveChildrenCallback} : {})}
        />
      </Dialog>
    )
  }
}
