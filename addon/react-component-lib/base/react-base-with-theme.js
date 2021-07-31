import { ReactThemeBase } from "./react-theme-base";
import React from "react";

export class ReactBaseWithTheme extends ReactThemeBase{
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();

    this.state = Object.assign(this.state, {
      classString: props.classString,
      sx: props.sx
    });

    //methods used by all
    this.setClass = this.setClass.bind(this);
    this.setSx = this.setSx.bind(this);

    //general methods
    this.setBaseClassName = this.setBaseClassName.bind(this);
    this.setChipProps = this.setChipProps.bind(this);
    this.setClearText = this.setClearText.bind(this);
    this.setClickable = this.setClickable.bind(this);
    this.setCloseText = this.setCloseText.bind(this);
    this.setChecked = this.setChecked.bind(this);
    this.setColor = this.setColor.bind(this);
    this.setComponentsProps = this.setComponentsProps.bind(this);
    this.setDefaultValue = this.setDefaultValue.bind(this);
    this.setDisableClearable = this.setDisableClearable.bind(this);
    this.setDisabled = this.setDisabled.bind(this);
    this.setDisableFocusListener = this.setDisableFocusListener.bind(this);
    this.setDisableHoverListener = this.setDisableHoverListener.bind(this);
    this.setDisableInteractive = this.setDisableInteractive.bind(this);
    this.setDisableTouchListener = this.setDisableTouchListener.bind(this);
    this.setDisableElevation = this.setDisableElevation.bind(this);
    this.setDisableFocusRipple = this.setDisableFocusRipple.bind(this);
    this.setDisableRipple = this.setDisableRipple.bind(this);
    this.setDisabledItemsFocusable = this.setDisabledItemsFocusable.bind(this);
    this.setEdge = this.setEdge.bind(this);
    this.setError = this.setError.bind(this);
    this.setFilterOptions = this.setFilterOptions.bind(this);
    this.setFilterSelectedOptions = this.setFilterSelectedOptions.bind(this);
    this.setForcePopupIcon = this.setForcePopupIcon.bind(this);
    this.setFullScreen = this.setFullScreen.bind(this);
    this.setFullWidth = this.setFullWidth.bind(this);
    this.setGetOptionDisabled = this.setGetOptionDisabled.bind(this);
    this.setGroupBy = this.setGroupBy.bind(this);
    this.setHelperText = this.setHelperText.bind(this);
    this.setHref = this.setHref.bind(this);
    this.setIconName = this.setIconName.bind(this);
    this.setImgProps = this.setImgProps.bind(this);
    this.setIndeterminate = this.setIndeterminate.bind(this);
    this.setInputValue = this.setInputValue.bind(this);
    this.setLabel = this.setLabel.bind(this);
    this.setLabelPlacement = this.setLabelPlacement.bind(this);
    this.setListboxProps = this.setListboxProps.bind(this);
    this.setLoading = this.setLoading.bind(this);
    this.setLoadingText = this.setLoadingText.bind(this);
    this.setMargin = this.setMargin.bind(this);
    this.setMaxRows = this.setMaxRows.bind(this);
    this.setMaxWidth = this.setMaxWidth.bind(this);
    this.setMinRows = this.setMinRows.bind(this);
    this.setMultiline = this.setMultiline.bind(this);
    this.setNoOptionsText = this.setNoOptionsText.bind(this);
    this.setOpen = this.setOpen.bind(this);
    this.setOpenText = this.setOpenText.bind(this);
    this.setOptions = this.setOptions.bind(this);
    this.setPlaceholder = this.setPlaceholder.bind(this);
    this.setPlacement = this.setPlacement.bind(this);
    this.setRequired = this.setRequired.bind(this);
    this.setRows = this.setRows.bind(this);
    this.setSize = this.setSize.bind(this);
    this.setSizes = this.setSizes.bind(this);
    this.setSrc = this.setSrc.bind(this);
    this.setSrcSet = this.setSrcSet.bind(this);
    this.setValue = this.setValue.bind(this);
    this.setVariant = this.setVariant.bind(this);
    this.setTitle = this.setTitle.bind(this);
  }

  setBaseClassName(baseClassName) {
    this.setState({baseClassName: baseClassName});
  }

  setClass(classes) {
    this.setState({classString: classes});
  }

  setSx(sx) {
    this.setState( {sx: sx});
  }

  setChecked(checked) {
    this.setState( {checked: checked});
  }

  setChipProps(chipProps) {
    this.setState({chipProps: chipProps})
  }

  setClearText(text) {
    this.setState( {clearText: text});
  }

  setClickable(clickable) {
    this.setState( {clickable: clickable});
  }

  setCloseText(text) {
    this.setState( {closeText: text});
  }

  setColor(color) {
    this.setState({color: color});
  }

  setComponentsProps(props) {
    this.setState( {componentProps: props});
  }

  setDefaultValue(defaultValue) {
    this.setState({ defaultValue: defaultValue });
  }

  setDisableClearable(disableClearable) {
    this.setState({disableClearable: disableClearable});
  }

  setDisabled(disabled) {
    this.setState({ disabled: disabled });
  }

  setDisableFocusListener(disableFocusListener) {
    this.setState( {disableFocusListener: disableFocusListener});
  }

  setDisableHoverListener(disableHoverListener) {
    this.setState( {disableHoverListener: disableHoverListener});
  }

  setDisableInteractive(disableInteractive) {
    this.setState( {disableInteractive: disableInteractive});
  }

  setDisableTouchListener(disableTouchListener) {
    this.setState({ disableTouchListener: disableTouchListener });
  }

  setDisableElevation(disableElevation) {
    this.setState( {disableElevation: disableElevation});
  }

  setDisableFocusRipple(disableFocusRipple) {
    this.setState( {disableFocusRipple: disableFocusRipple});
  }

  setDisableRipple(disableRipple) {
    this.setState( {disableRipple: disableRipple});
  }

  setDisabledItemsFocusable(disabledItemsFocusable) {
    this.setState({ disabledItemsFocusable: disabledItemsFocusable });
  }

  setEdge(edge) {
    this.setState( {edge: edge});
  }

  setError(error) {
    this.setState({error: error});
  }

  setFilterOptions(filterOptions) {
    this.setState( {filterOptions: filterOptions});
  }

  setFilterSelectedOptions(filterSelectedOptions) {
    this.setState( {filterSelectedOptions: filterSelectedOptions});
  }

  setForcePopupIcon(forcePopupIcon) {
    this.setState( {forcePopupIcon: forcePopupIcon});
  }

  setFullScreen(fullScreen) {
    this.setState({fullScreen: fullScreen});
  }

  setFullWidth(fullWidth) {
    this.setState( {fullWidth: fullWidth});
  }

  setGetOptionDisabled(getOptionDisabled) {
    this.setState( {getOptionDisabled: getOptionDisabled});
  }

  setGroupBy(groupBy) {
    this.setState( {groupBy: groupBy});
  }

  setHelperText(helperText) {
    this.setState({helperText: helperText});
  }

  setHref(href) {
    this.setState( {href: href});
  }

  setIconName(iconName) {
    this.setState( {iconName: iconName});
  }

  setImgProps(imgProps) {
    this.setState( {imgProps: imgProps});
  }

  setIndeterminate(indeterminate) {
    this.setState( {indeterminate: indeterminate});
  }

  setInputValue(inputValue) {
    this.setState( {inputValue: inputValue});
  }

  setLabel(label) {
    this.setState({label: label});
  }

  setLabelPlacement(placement) {
    this.setState( {labelPlacement: placement});
  }

  setListboxProps(listboxProps) {
    this.setState( {listboxProps: listboxProps});
  }

  setLoading(loading) {
    this.setState( {loading: loading});
  }

  setLoadingText(loadingText) {
    this.setState( {loadingText: loadingText});
  }

  setMargin(margin) {
    this.setState( {margin: margin});
  }

  setMaxRows(maxRows) {
    this.setState( {maxRows: maxRows});
  }

  setMaxWidth(maxWidth) {
    this.setState( {maxWidth: maxWidth});
  }

  setMinRows(minRows) {
    this.setState( {minRows: minRows});
  }

  setMultiline(multiline) {
    this.setState( {multiline: multiline});
  }

  setNoOptionsText(noOptionsText) {
    this.setState( {noOptionsText: noOptionsText});
  }

  setOpen(open) {
    this.setState( {open: open});
  }

  setOpenText(openText) {
    this.setState( {openText: openText});
  }

  setOptions(options) {
    this.setState( {options: options});
  }

  setPlaceholder(placeholder) {
    this.setState( {placeholder: placeholder});
  }

  setPlacement(placement) {
    this.setState( {placement: placement});
  }

  setRequired(required) {
    this.setState({required: required});
  }

  setRows(rows) {
    this.setState( {rows: rows});
  }

  setSize(size) {
    this.setState( {size: size});
  }

  setSizes(sizes) {
    this.setState( {sizes: sizes});
  }

  setSrc(src) {
    this.setState( {src: src});
  }

  setSrcSet(srcSet) {
    this.setState( {srcSet: srcSet});
  }

  setTitle(title) {
    this.setState({title: title})
  }

  setValue(value) {
    this.setState({value: value});
  }

  setVariant(variant) {
    this.setState({variant: variant});
  }




  //////
  render() {
    return {};
  }
}
