import React from 'react';
import Menu from '@material-ui/core/Menu';
import { ReactBaseWithTheme } from "./base/react-base-with-theme";
import { ReactConditionalThemeProvider } from "./react-conditional-theme-provider";
import { ReactChildrenHolder } from "./utility/react-children-holder";


export class ReactMenu extends ReactBaseWithTheme{
  constructor(props) {
    super(props);
    this.addedEmberChildren = false;
    this.state = {
      classString: props.classString,
      open: props.open,
      sx: props.sx,
      theme: props.theme,
      variant: props.variant
    };

    this.componentRef = React.createRef();

  }

  render() {

    const {
      classString,
      open,
      sx,
      theme,
      variant
    } = this.state;

    return (
      <ReactConditionalThemeProvider theme={theme}>
        <Menu
          ref={this.componentRef}
          {...(this.props.anchorEl ? {anchorEl: this.props.anchorEl} : {})}
          {...(this.props.autoFocus ? {autoFocus: this.props.autoFocus} : {})}
          {...(this.props.children ? {children: this.props.children} : {})}
          {...(classString ? {className: classString} : {})}
          {...(this.props.disableAutoFocusItem ? {disableAutoFocusItem: this.props.disableAutoFocusItem} : {})}
          {...(this.props.id ? {id: this.props.id} : {})}
          {...(this.props.menuListProps ? {MenuListProps: this.props.menuListProps} : {})}
          {...(this.props.onClose ? {onClose: this.props.onClose} : {})}
          {...(open ? {open: open} : {open: false})}
          {...(this.props.popoverClasses ? {PopoverClasses: this.props.popoverClasses} : {})}
          {...(sx ? {sx: sx} : {})}
          {...(this.props.transitionDuration ? {transitionDuration: this.props.transitionDuration} : {})}
          {...(this.props.transitionProps ? {TransitionProps: this.props.transitionProps} : {})}
          {...(variant ? {variant: variant} : {})}
        >
          <ReactChildrenHolder
            {...(this.props.reactRenderCallback ? {reactRenderCallback: this.props.reactRenderCallback} : {})}
            {...(this.props.saveChildrenCallback ? {saveChildrenCallback: this.props.saveChildrenCallback} : {})}
          />
        </Menu>
      </ReactConditionalThemeProvider>
    );
  }
}
