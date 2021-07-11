import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { ReactConditionalThemeProvider } from "./ReactConditionalThemeProvider";
import { ReactThemeBase } from "./ReactThemeBase";


export function ReactFormControlLabel(ControlComponent) {
  return class extends ReactThemeBase {
    constructor(props) {
      super(props);
      /* controlRef puts a ref on the control element as opposed to inputRef, which puts it on the input element itself */
      const {checked, disabled, label, labelPlacement, theme, value, onChange, inputRef, controlRef, ...controlProps } = this.props;
      Object.assign(this.state, {
        checked: checked,
        disabled: disabled,
        label: label,
        labelPlacement: labelPlacement,
        value: value
      });

      this.onChange = onChange;
      this.inputRef = inputRef;
      this.controlRef = controlRef;

      this.controlProps = controlProps;

      this.componentRef = React.createRef();

      //properties
      this.setChecked = this.setChecked.bind(this);
      this.setDisabled = this.setDisabled.bind(this);
      this.setLabel = this.setLabel.bind(this);
      this.setLabelPlacement = this.setLabelPlacement.bind(this);
      this.setValue = this.setValue.bind(this);
    }

    setChecked(checked) {
      this.setState( {checked: checked});
    }

    setDisabled(disabled) {
      this.setState( {disabled: disabled});
    }

    setLabel(label) {
      this.setState( {label: label});
    }

    setLabelPlacement(placement) {
      this.setState( {labelPlacement: placement});
    }

    setValue(value) {
      this.setState( {value: value});
    }

    render() {
      const {
        checked,
        disabled,
        label,
        labelPlacement,
        theme,
        value
      } = this.state;

      return (
        <ReactConditionalThemeProvider theme={theme}>
          <FormControlLabel
            {...(checked ? { checked: checked } : {})}
            {...(disabled ? { disabled: disabled } : {})}
            {...(label ? { label: label } :  { label: '' })}
            {...(labelPlacement ? { labelPlacement: labelPlacement } : {})}
            {...(value ? { value: value } : {})}
            ref={this.componentRef}
            {...(this.inputRef ? { inputRef: this.inputRef } : {})}
            {...(this.onChange ? { onChange: this.onChange } : {function(){}})}
            control={<ControlComponent {...(this.controlRef ? { ref: this.controlRef } : {})} {...this.controlProps}/>}
          />
        </ReactConditionalThemeProvider>
      )
    }
  }
}

