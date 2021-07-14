import React, { forwardRef } from "react";
import FormControlLabel from '@material-ui/core/FormControlLabel';

/* Next remove functions that aren't used,  do we need the state on this? */

export function ReactFormControlLabel(ControlComponent) {
  class CustomFormControlLabel extends React.Component {
    constructor(props) {
      super(props);
      /* controlRef puts a ref on the control element as opposed to inputRef, which puts it on the input element itself */
      const {
        checked,
        disabled,
        label,
        labelPlacement,
        value,
        onChange,
        inputRef,
        controlRef,
        ...controlProps
      } = this.props;
      this.state = {
        checked: checked,
        disabled: disabled,
        label: label,
        labelPlacement: labelPlacement,
        value: value
      };

      this.innerRef = this.props.innerRef;

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
      this.testRef = this.testRef.bind(this);
    }

    testRef() {
      console.log('React-form-control-label, testRef called');
    }

    setChecked(checked) {
      this.setState({ checked: checked });
    }

    setDisabled(disabled) {
      this.setState({ disabled: disabled });
    }

    setLabel(label) {
      this.setState({ label: label });
    }

    setLabelPlacement(placement) {
      this.setState({ labelPlacement: placement });
    }

    setValue(value) {
      this.setState({ value: value });
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
          {...(label ? { label: label } : { label: '' })}
          {...(labelPlacement ? { labelPlacement: labelPlacement } : {})}
          {...(value ? { value: value } : {})}
          ref={this.innerRef}
          {...(this.inputRef ? { inputRef: this.inputRef } : {})}
          {...(this.onChange ? { onChange: this.onChange } : { onChange: function() {} })}
          control={<ControlComponent {...(this.controlRef ? { ref: this.controlRef } : {})} {...this.controlProps} />}
        />
      )
    }
  }
  return forwardRef((props, ref) => (
    <CustomFormControlLabel {...props} innerRef={ref} />
  ));
}

