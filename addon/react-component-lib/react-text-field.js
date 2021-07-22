import React from 'react';
import TextField from '@material-ui/core/TextField';
import { ReactBaseWithTheme } from "./base/react-base-with-theme";
import { ReactConditionalThemeProvider } from "./react-conditional-theme-provider";

export class ReactTextField extends ReactBaseWithTheme{
  constructor(props) {
    super(props);
    this.state = Object.assign(this.state, {
      color: props.color,
      defaultValue: props.defaultValue,
      disabled: props.disabled,
      error: props.error,
      fullWidth: props.fullWidth,
      helperText: props.helperText,
      label: props.label,
      margin: props.margin,
      maxRows: props.maxRows,
      minRows: props.minRows,
      multiline: props.multiline,
      placeholder: props.placeholder,
      required: props.required,
      rows: props.rows,
      size: props.size,
      value: props.value,
      variant: props.variant
    });

    this.componentRef = React.createRef();

    //methods
    this.setColor = this.setColor.bind(this);
    this.setDefaultValue = this.setDefaultValue.bind(this);
    this.setDisabled = this.setDisabled.bind(this);
    this.setError = this.setError.bind(this);
    this.setFullWidth = this.setFullWidth.bind(this);
    this.setHelperText = this.setHelperText.bind(this);
    this.setLabel = this.setLabel.bind(this);
    this.setMargin = this.setMargin.bind(this);
    this.setMaxRows = this.setMaxRows.bind(this);
    this.setMinRows = this.setMinRows.bind(this);
    this.setMultiline = this.setMultiline.bind(this);
    this.setPlaceholder = this.setPlaceholder.bind(this);
    this.setRequired = this.setRequired.bind(this);
    this.setRows = this.setRows.bind(this);
    this.setSize = this.setSize.bind(this);
    this.setValue = this.setValue.bind(this);
    this.setVariant = this.setVariant.bind(this);
  }

  setColor(color) {
    this.setState( {color: color});
  }

  setDefaultValue(defaultValue) {
    this.setState({ defaultValue: defaultValue });
  }

  setDisabled(disabled) {
    this.setState({ disabled: disabled });
  }

  setError(error) {
    this.setState({ error: error });
  }

  setFullWidth(fullWidth) {
    this.setState( {fullWidth: fullWidth});
  }

  setHelperText(helperText) {
    this.setState( {helperText: helperText});
  }

  setLabel(label) {
    this.setState( {label: label});
  }

  setMargin(margin) {
    this.setState( {margin: margin});
  }

  setMaxRows(maxRows) {
    this.setState( {maxRows: maxRows});
  }

  setMinRows(minRows) {
    this.setState( {minRows: minRows});
  }

  setMultiline(multiline) {
    this.setState( {multiline: multiline});
  }

  setPlaceholder(placeholder) {
    this.setState( {placeholder: placeholder});
  }

  setRequired(required) {
    this.setState( {required: required});
  }

  setRows(rows) {
    this.setState( {rows: rows});
  }

  setSize(size) {
    this.setState( {size: size});
  }

  setValue(value) {
    this.setState({value: value});
  }

  setVariant(variant) {
    this.setState({ variant: variant});
  }

  render() {
    const {
      classString,
      color,
      defaultValue,
      disabled,
      error,
      fullWidth,
      helperText,
      label,
      margin,
      maxRows,
      minRows,
      multiline,
      placeholder,
      required,
      rows,
      size,
      sx,
      theme,
      value,
      variant
    } = this.state;


    return (
      <ReactConditionalThemeProvider theme={theme}>
        <TextField
          ref={this.componentRef}
          onChange={this.props.onChange}
          {...(this.props.autoComplete ? {autoComplete: this.props.autoComplete} : {})}
          {...(this.props.autoFocus ? {autoFocus: this.props.autoFocus} : {})}
          {...(classString ? {className: classString} : {})}
          {...(color ? {color: color} : {})}
          {...(defaultValue ? {defaultValue: defaultValue} : {})}
          disabled={disabled}
          error={error}
          {...(this.props.formHelperTextProps ? {FormHelperTextProps: this.props.formHelperTextProps} : {})}
          fullWidth={fullWidth}
          {...(helperText ? {helperText: helperText} : {})}
          {...(this.props.inputId ? {id: this.props.inputId} : {})}
          {...(this.props.inputLabelProps ? {InputLabelProps: this.props.inputLabelProps} : {})}
          {...(this.props.inputAttributes ? {inputProps: this.props.inputAttributes} : {})}
          {...(this.props.inputProps ? {InputProps: this.props.inputProps} : {})}
          {...(this.props.inputRef ? { inputRef: this.props.inputRef } : {})}
          {...(label ? {label: label} : {})}
          {...(margin ? {margin: margin} : {})}
          {...(maxRows ? {maxRows: maxRows} : {})}
          {...(minRows ? {minRows: minRows} : {})}
          {...(multiline ? {multiline: multiline} : {})}
          {...(this.props.inputName ? {name: this.props.inputName} : {})}
          {...(placeholder ? {placeholder: placeholder} : {})}
          {...(required ? {required: required} : {})}
          {...(rows ? {rows: rows} : {})}
          {...(this.props.select ? {select: this.props.select} : {})}
          {...(this.props.selectProps ? { SelectProps: this.props.selectProps } : {})}
          {...(size ? {size: size} : {})}
          {...(sx ? {sx: sx} : {})}
          {...(this.props.type ? { type: this.props.type } : {})}
          {...(value ? {value: value} : {value: ''})}
          {...(variant ? {variant: variant} : {})}
        >
          <option>Dummy Option</option>
        </TextField>
      </ReactConditionalThemeProvider>
    );
  }
}
