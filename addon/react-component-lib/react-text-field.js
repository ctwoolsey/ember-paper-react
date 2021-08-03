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
          {...(this.props.id ? {id: this.props.id} : {})}
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
