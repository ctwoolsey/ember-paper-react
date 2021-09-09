const props = {
  action: null,
  centerRipple: null,
  children: null,
  classString: '',
  component: null,
  disabled: null,
  disableRipple: null,
  disableTouchRipple: null,
  focusRipple: null,
  focusVisibleClassName: '',
  LinkComponent: null,
  onFocusVisible: null,
  sx: null,
  TouchRippleProps: null,
  onClick: null,
  id: null,
  theme: null,
  ref: null
};

const ButtonBaseProps = Object.assign({}, props);

const ButtonBaseStateProps = {
  classString: '',
  color: null,
  disabled: null,
  disableElevation: null,
  disableFocusRipple: null,
  disableRipple: null,
  disableTouchRipple: null,
  fullWidth: null,
  href: null,
  size: null,
  sx: null,
  variant: null,
  theme: null
}

export { ButtonBaseProps, ButtonBaseStateProps }
