import React from 'react';
import { ReactFormControlLabel } from "./react-form-control-label";
import { ReactThemeBase } from "./react-theme-base";
import { ReactConditionalThemeProvider } from "./react-conditional-theme-provider";

/* Does not currently implement:
    checkedIcon, icon, id, indeterminateIcon
*/
export class ReactCheckRadioSwitch extends ReactThemeBase{
  constructor(props) {
    super(props);

    const {checked, classString, color, disabled, disableRipple, edge, indeterminate, label, labelPlacement, required, size, value, onChange, inputProps, controlRef, inputRef } = this.props;

    Object.assign(this.state, {
      checked: checked,
      classString: classString,
      color: color,
      disabled: disabled,
      disableRipple: disableRipple,
      edge: edge, //unique to switch
      indeterminate: indeterminate,
      label,
      labelPlacement,
      required: required,
      size: size,
      value: value
    });

    //componentRef always refers to the outmost component
    this.componentRef = React.createRef();
    this.controlRef = controlRef;
    this.onChange = onChange;
    this.inputProps = inputProps;
    this.inputRef = inputRef;

    //properties
    this.setChecked = this.setChecked.bind(this);
    this.setClass = this.setClass.bind(this);
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
    this.testRef = this.testRef.bind(this);

  }

  testRef() {
    console.log('React-check-radio-switch, testRef called');
  }

  setChecked(checked) {
    this.setState( {checked: checked});
  }

  setClass(classes) {
    this.setState({classString: classes})
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
      theme,
      value
    } = this.state;

    let ComponentTagName = this.controlType;

    if (label) {
      ComponentTagName = ReactFormControlLabel(ComponentTagName);
    }

    return (
      <ReactConditionalThemeProvider theme={theme}>
        <ComponentTagName
          {...(checked ? { checked: checked } : {})}
          {...(classString ? { className: classString } : {})}
          {...(color ? { color: color } : {})}
          {...(disabled ? { disabled: disabled } : {})}
          {...(disableRipple ? { disableRipple: disableRipple } : {})}
          {...(edge ? { edge: edge } : {})}
          {...(indeterminate ? { indeterminate: indeterminate } : {})}
          {...(label ? { label: label } :  { label: {} })}
          {...(label ? { labelPlacement: labelPlacement } : {})}
          {...(required ? { required: required } : {})}
          {...(size ? { size: size } : {})}
          {...(value ? { value: value } : {})}
          {...(label ? { controlRef: this.controlRef } :  {})}
          ref={this.componentRef}
          {...(this.inputProps ? { inputProps: this.inputProps } : {})}
          {...(this.inputRef ? { inputRef: this.inputRef } : {})}
          {...(this.onChange ? { onChange: this.onChange } : {function(){}})}
        />
      </ReactConditionalThemeProvider>
    )
  }
}
