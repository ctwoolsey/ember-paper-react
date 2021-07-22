import React from 'react';
import { ReactBaseWithTheme } from "./base/react-base-with-theme";
import { ReactConditionalThemeProvider } from "./react-conditional-theme-provider";
import FormControlLabel from "@material-ui/core/FormControlLabel";

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
    this.setChecked = this.setChecked.bind(this);
    this.setColor = this.setColor.bind(this);
    this.setDisabled = this.setDisabled.bind(this);
    this.setDisableRipple = this.setDisableRipple.bind(this);
    this.setEdge = this.setEdge.bind(this);
    this.setIndeterminate = this.setIndeterminate.bind(this);
    this.setLabel = this.setLabel.bind(this);
    this.setLabelPlacement = this.setLabelPlacement.bind(this);
    this.setRequired = this.setRequired.bind(this);
    this.setSize = this.setSize.bind(this);
    this.setValue = this.setValue.bind(this);

  }

  setChecked(checked) {
    this.setState( {checked: checked});
  }

  setColor(color) {
    this.setState( {color: color});
  }

  setDisabled(disabled) {
    this.setState( {disabled: disabled});
  }

  setDisableRipple(disableRipple) {
    this.setState( {disableRipple: disableRipple});
  }

  setEdge(edge) {
    this.setState( {edge: edge});
  }

  setIndeterminate(indeterminate) {
    this.setState( {indeterminate: indeterminate});
  }

  setLabel(label) {
    this.setState( {label: label});
  }

  setLabelPlacement(placement) {
    this.setState( {labelPlacement: placement});
  }

  setRequired(required) {
    this.setState( {required: required});
  }

  setSize(size) {
    this.setState( {size: size});
  }

  setValue(value) {
    this.setState( {value: value});
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
