import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export function ReactFormControlLabel(ControlComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      /* controlRef puts a ref on the control element as opposed to inputRef, which puts it on the input element itself */
      const {onChange, inputRef, controlRef, value, disabled, checked, label, labelPlacement, ...controlProps } = this.props;
      this.state = {
        checked: checked,
        disabled: disabled,
        label: label,
        labelPlacement: labelPlacement,
        value: value
      };
      this.onChange = onChange;
      this.inputRef = inputRef;
      this.controlRef = controlRef;

      this.controlProps = controlProps;

      this.componentRef = React.createRef();

      //properties
      this.setValue = this.setValue.bind(this);
      this.setDisabled = this.setDisabled.bind(this);
      this.setChecked = this.setChecked.bind(this);
      this.setLabel = this.setLabel.bind(this);
      this.setLabelPlacement = this.setLabelPlacement.bind(this);
    }

    setValue(value) {
      this.setState( {value: value});
    }

    setDisabled(disabled) {
      this.setState( {disabled: disabled});
    }

    setChecked(checked) {
      this.setState( {checked: checked});
    }

    setLabel(label) {
      this.setState( {label: label});
    }

    setLabelPlacement(placement) {
      this.setState( {labelPlacement: placement});
    }

    render() {

      const {
        checked,
        disabled,
        label,
        labelPlacement,
        value
      } = this.state;

      return (
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
      );
    }
  }
}

