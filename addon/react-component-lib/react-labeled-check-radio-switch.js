import React from 'react';
import { ReactBaseWithTheme } from './base/react-base-with-theme';
import { ReactConditionalThemeProvider } from './react-conditional-theme-provider';
import FormControlLabel from '@material-ui/core/FormControlLabel';

/* Does not currently implement:
    checkedIcon, icon, id, indeterminateIcon
*/
export class ReactLabeledCheckRadioSwitch extends ReactBaseWithTheme{
  constructor(props) {
    super(props);

    this.state = Object.assign(this.state, {
      checked: props.checked,
      classString: props.classString,
      color: props.color,
      disabled: props.disabled,
      disableRipple: props.disableRipple,
      edge: props.edge, //unique to switch
      indeterminate: props.indeterminate, //unique to checkbox
      label: props.label,
      labelPlacement: props.labelPlacement,
      required: props.required,
      size: props.size,
      value: props.value
    });

    //methods


  }

  render() {
    const {
      checked,
      classString,
      color,
      disabled,
      disableRipple,
      edge,
      indeterminate,
      label,
      labelPlacement,
      required,
      size,
      sx,
      theme,
      value
    } = this.state;

    const ControlTagName = this.controlType;

    return (
      <ReactConditionalThemeProvider theme={theme}>
        <FormControlLabel
          ref={this.componentRef}
          {...(checked ? { checked: checked } : {})}
          {...(classString ? { className: classString } : {})}
          {...(disabled ? { disabled: disabled } : {})}
          {...(this.props.id ? {id: this.props.id} : {})}
          {...(label ? { label: label } : { label: '' })}
          {...(labelPlacement ? { labelPlacement: labelPlacement } : {})}
          {...(value ? { value: value } : {})}
          {...(this.props.inputRef ? { inputRef: this.props.inputRef } : {})}
          {...(this.props.onChange ? { onChange: this.props.onChange } : { onChange: function() {} })}
          control={<ControlTagName
            {...(color ? { color: color } : {})}
            {...(disableRipple ? { disableRipple: disableRipple } : {})}
            {...(edge ? { edge: edge } : {})} //used by switch
            {...(indeterminate ? { indeterminate: indeterminate } : {})} //used by checkbox
            {...(this.props.inputProps ? { inputProps: this.props.inputProps } : {})}
            {...(this.props.name ? { name: this.props.name } : {})}  //used by Radio
            {...(required ? { required: required } : {})}
            {...(size ? { size: size } : {})}
            {...(sx ? { sx: sx } : {})}
          />}
        />
      </ReactConditionalThemeProvider>
    )
  }
}
