import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { ThemeProvider } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export class ReactCheckbox extends React.Component{
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      checked: this.props.checked,
      disabled: this.props.disabled,
      disableRipple: this.props.disableRipple,
      indeterminate: this.props.indeterminate,
      required: this.props.required,
      size: this.props.size,
      value: this.props.value,
      label: this.props.label,
      labelPlacement: this.props.labelPlacement,
      color: this.props.color,
      theme: this.props.theme,
      classString: this.props.class
    };
    this.componentRef = React.createRef();

    //properties
    this.setColor = this.setColor.bind(this);
    this.setTheme = this.setTheme.bind(this);
    this.setClass = this.setClass.bind(this);
    this.setDisabled = this.setDisabled.bind(this);
    this.setDisableRipple = this.setDisableRipple.bind(this);
    this.setChecked = this.setChecked.bind(this);
    this.setIndeterminate = this.setIndeterminate.bind(this);
    this.setRequired = this.setRequired.bind(this);
    this.setSize = this.setSize.bind(this);
    this.setValue = this.setValue.bind(this);
    this.setClass = this.setLabel.bind(this);
    this.setClass = this.setLabelPlacement.bind(this);
  }

  setClass(classes) {
    this.setState({classString: classes})
  }

  setDisabled(disabled) {
    this.setState( {disabled: disabled});
  }

  setDisableRipple(disableRipple) {
    this.setState( {disableRipple: disableRipple});
  }
  setChecked(checked) {
    this.setState( {checked: checked});
  }

  setIndeterminate(indeterminate) {
    this.setState( {indeterminate: indeterminate});
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

  setLabel(label) {
    this.setState( {label: label});
  }

  setLabelPlacement(placement) {
    this.setState( {labelPlacement: placement});
  }

  setColor(color) {
    this.setState( {color: color});
  }

  setTheme(theme) {
    this.setState( {theme: theme});
  }

  render() {
    const {
      checked,
      disabled,
      disableRipple,
      indeterminate,
      required,
      size,
      value,
      label,
      labelPlacement,
      color,
      theme,
      classString
    } = this.state;

    let iprops = {
      name: 'some-name',
      readonly: true
    }

    if (label) {
      return (
        <ThemeProvider {...(theme ? { theme: theme } : {})}>
          <FormControlLabel
            value={labelPlacement}
            disabled={disabled}
            onChange={this.props.onchange}
            checked={checked}
            control={<Checkbox
              {...(classString ? { className: classString } : {})}
              {...(value ? { value: value } : {})}
              indeterminate={indeterminate}
              disabled={disabled}
              required={required}
              disableRipple={disableRipple}
              {...(size ? { size: size } : {})}
              {...(color ? { color: color } : {})}
              inputProps={iprops}
            />}
            ref={this.componentRef}
            label={label}
            labelPlacement={labelPlacement}
          />
        </ThemeProvider>
      );
    } else {
      return (
        <ThemeProvider {...(theme ? { theme: theme } : {})}>
          <Checkbox
            {...(classString ? { className: classString } : {})}
            checked={checked}
            {...(value ? { value: value } : {})}
            indeterminate={indeterminate}
            disabled={disabled}
            required={required}
            disableRipple={disableRipple}
            {...(size ? { size: size } : {})}
            onChange={this.props.onchange}
            ref={this.componentRef}
            {...(color ? { color: color } : {})}
          />
        </ThemeProvider>
      );
    }
  }
}
