import { ReactThemeBase } from "./react-theme-base";

export class ReactDialogHelperBase extends ReactThemeBase{
  constructor(props) {
    super(props);
    this.state = Object.assign(this.state, { disabled: props.disabled,
      variant: props.variant,
      size: props.size,
      href: props.href,
      disableElevation: props.disableElevation,
      disableFocusRipple: props.disableFocusRipple,
      disableRipple: props.disableRipple,
      fullWidth: props.fullWidth,
      color: props.color,
      classString: props.class
    });
  }

  render() {
    return {};
  }
}
