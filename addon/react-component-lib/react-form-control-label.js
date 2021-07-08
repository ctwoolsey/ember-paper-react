import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export function ReactFormControlLabel(ControlComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      const {value, theme, disabled, checked, label, labelPlacement, ...controlProps } = this.props;
      this.state = {
        value: value,
        disabled: disabled,
        checked: checked,
        label: label,
        labelPlacement: labelPlacement,
        theme: theme
      };
      this.controlProps = [...controlProps];

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
        value,
        disabled,
        checked,
        label,
        labelPlacement,
        theme
      } = this.state;

      return (
        <ThemeProvider {...(theme ? { theme: theme } : {})}>
          <FormControlLabel
            {...(value ? { value: value } : {})}
            {...(disabled ? { disabled: disabled } : {})}
            {...(this.props.onchange ? { onChange: this.props.onchange } : {function(){}})}
            {...(checked ? { checked: checked } : {})}
            control={<ControlComponent {...this.controlProps}/>}
            ref={this.componentRef}
            {...(label ? { label: label } :  { label: '' })}
            {...(labelPlacement ? { labelPlacement: labelPlacement } : {})}
          />
        </ThemeProvider>
      );
    }
  }
}

