import React from 'react';
import Autocomplete from '@material-ui/lab/AutoComplete';
import { ReactThemeBase } from "./base/react-theme-base";
import { ReactConditionalThemeProvider } from "./react-conditional-theme-provider";

export class ReactAutocomplete extends ReactThemeBase{
  constructor(props) {
    super(props);
    this.state = {
      classString: props.classString,
      color: props.color,
      defaultValue: props.defaultValue,
      disabled: props.disabled,
      error: props.error,
      fullWidth: props.fullWidth,
      helperText: props.helperText,
      label: props.label,
      margin: props.margin,
      maxRows: props.maxRows,
      multiline: props.multiline,
      placeholder: props.placeholder,
      required: props.required,
      rows: props.rows,
      rowsMax: props.rowsMax,
      size: props.size,
      theme: props.theme,
      value: props.value,
      variant: props.variant
    };

    this.componentRef = React.createRef();

    //methods
    this.setClass = this.setClass.bind(this);
    this.setColor = this.setColor.bind(this);
    this.setDefaultValue = this.setDefaultValue.bind(this);
    this.setDisabled = this.setDisabled.bind(this);
    this.setError = this.setError.bind(this);
    this.setFullWidth = this.setFullWidth.bind(this);
    this.setHelperText = this.setHelperText.bind(this);
    this.setLabel = this.setLabel.bind(this);
    this.setMargin = this.setMargin.bind(this);
    this.setMaxRows = this.setMaxRows.bind(this);
    this.setMultiline = this.setMultiline.bind(this);
    this.setPlaceholder = this.setPlaceholder.bind(this);
    this.setRequired = this.setRequired.bind(this);
    this.setRows = this.setRows.bind(this);
    this.setRowsMax = this.setRowsMax.bind(this);
    this.setSize = this.setSize.bind(this);
    this.setTheme = this.setTheme.bind(this);
    this.setValue = this.setValue.bind(this);
    this.setVariant = this.setVariant.bind(this);
  }

  setClass(classes) {
    this.setState({classString: classes})
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

  setRowsMax(rowsMax) {
    this.setState( {rowsMax: rowsMax});
  }

  setSize(size) {
    this.setState( {size: size});
  }

  setTheme(theme) {
    this.setState( {theme: theme});
  }

  setValue(value) {
    this.setState({value: value});
  }

  setVariant(variant) {
    this.setState({ variant: variant});
  }

  render() {
    /*const {
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
      multiline,
      placeholder,
      required,
      rows,
      rowsMax,
      size,
      theme,
      value,
      variant
    } = this.state;*/

    const {
      autoComplete,
      autoHighlight,
      autoSelect,
      blurOnSelect,
      ChipProps,
      classes,
      clearOnBlur,
      clearOnEscape,
      clearText,
      closeIcon,
      closeText,
      debug,
      defaultValue,
      disableClearable,
      disableCloseOnSelect,
      disabled,
      disabledItemsFocusable,
      disableListWrap,
      disablePortal,
      filterOptions,
      filterSelectedOptions,
      forcePopupIcon,
      freeSolo,
      fullWidth,
      getLimitTagsText,
      getOptionDisabled,
      getOptionLabel,
      getOptionSelected,
      groupBy,
      handleHomeEndKeys,
      id,
      includeInputInList,
      inputValue,
      limitTags,
      ListboxComponent,
      ListboxProps,
      loading,
      loadingText,
      multiple,
      noOptionsText,
      onChange,
      onClose,
      onHighlightChange,
      onInputChange,
      onOpen,
      openOnFocus,,
      openText,
      options,
      PaperComponent,
      PopperComponent,
      popupIcon,
      renderGroup,
      renderInput,
      renderOption,
      renderTags,
      getTagProps,
      selectOnFocus,
      value
    } = this.state;


    return (
      <ReactConditionalThemeProvider theme={theme}>
        <Autocomplete
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
          {...(multiline ? {multiline: multiline} : {})}
          {...(this.props.inputName ? {name: this.props.inputName} : {})}
          {...(placeholder ? {placeholder: placeholder} : {})}
          {...(required ? {required: required} : {})}
          {...(rows ? {rows: rows} : {})}
          {...(rowsMax ? {rowsMax: rowsMax} : {})}
          {...(this.props.select ? {select: this.props.select} : {})}
          {...(this.props.selectProps ? { SelectProps: this.props.selectProps } : {})}
          {...(size ? {size: size} : {})}
          {...(this.props.type ? { type: this.props.type } : {})}
          {...(value ? {value: value} : {value: ''})}
          {...(variant ? {variant: variant} : {})}
        >
          <option>Dummy Option</option>
        </Autocomplete>
      </ReactConditionalThemeProvider>
    );
  }
}
