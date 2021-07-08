import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export function ReactFormControlLabel(ControlComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      const {onChange, inputRef, value, theme, disabled, checked, label, labelPlacement, ...controlProps } = this.props;
      this.state = {
        checked: checked,
        disabled: disabled,
        label: label,
        labelPlacement: labelPlacement,
        theme: theme,
        value: value
      };
      this.onChange = onChange;
      this.inputRef = inputRef;
      //this.controlProps = [...controlProps];
      this.controlProps = controlProps;

      this.componentRef = React.createRef();

      //properties
      this.setValue = this.setValue.bind(this);
      this.setDisabled = this.setDisabled.bind(this);
      this.setChecked = this.setChecked.bind(this);
      this.setLabel = this.setLabel.bind(this);
      this.setLabelPlacement = this.setLabelPlacement.bind(this);
      this.setTheme = this.setTheme.bind(this);
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

    setTheme(theme) {
      this.setState( {theme: theme});
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
        <ThemeProvider {...(theme ? { theme: theme } : {})}>
          <FormControlLabel
            {...(checked ? { checked: checked } : {})}
            {...(disabled ? { disabled: disabled } : {})}
            {...(label ? { label: label } :  { label: '' })}
            {...(labelPlacement ? { labelPlacement: labelPlacement } : {})}
            {...(value ? { value: value } : {})}
            ref={this.componentRef}
            {...(this.inputRef ? { inputRef: this.inputRef } : {})}
            {...(this.onChange ? { onChange: this.onChange } : {function(){}})}
            control={<ControlComponent {...this.controlProps}/>}
          />
        </ThemeProvider>
      );
    }
  }
}

