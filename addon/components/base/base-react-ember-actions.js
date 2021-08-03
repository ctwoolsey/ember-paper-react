import Component from '@glimmer/component';
import { action } from "@ember/object";

export default class BaseReactEmberActionsComponent extends Component {

  constructor() {
    super(...arguments);
  }
  //Actions that all components use
  @action
  class() {
    if (this.reactRef) {
      this.reactRef.current.setClass(this.mergeClassWithClassString());
    }
  }

  @action
  sx() {
    if (this.reactRef) {
      this.reactRef.current.setSx(this.args.sx || null);
    }
  }

  @action
  style() {
    if (this.reactRef) {
      //remove old style names
      this.addedStyles.forEach(styleItem => {
        let stylePieces = styleItem.split(':');
        this.reactRef.current.componentRef.current.style.removeProperty(stylePieces[0]);
      });
      //save new style list
      this.addedStyles = this.args.style.split(';');
      this.addedStyles.forEach(styleItem => {
        let stylePieces = styleItem.split(':');
        this.reactRef.current.componentRef.current.style[stylePieces[0]] = stylePieces[1];
      });

    }
  }

  @action
  globalThemeChanged() {
    if (this.reactRef) {
      this.reactRef.current.setTheme(this.themeManager.theme);
    }
  }

  //Combined Actions that some components use
  @action
  avatar() {
    if (this.reactRef) {
      this.reactRef.current.setAvatar(this.args.avatar || null);
    }
  }

  @action
  checked() {
    if (this.reactRef) {
      this.reactRef.current.setChecked(this.args.checked || null);
    }
  }

  @action
  chipProps() {
    if (this.reactRef) {
      this.reactRef.current.setChipProps(this.args.chipProps || null);
    }
  }

  @action
  clearText() {
    if (this.reactRef) {
      this.reactRef.current.setClearText(this.args.clearText || null);
    }
  }

  @action
  clickable() {
    if (this.reactRef) {
      this.reactRef.current.setClickable(this.args.clickable || null);
    }
  }

  @action
  closeText() {
    if (this.reactRef) {
      this.reactRef.current.setCloseText(this.args.closeText || null);
    }
  }

  @action
  color() {
    if (this.reactRef) {
      this.reactRef.current.setColor(this.args.color || null);
    }
  }

  @action
  componentsProps() {
    if (this.reactRef) {
      this.reactRef.current.setComponentsProps(this.args.componentsProps || null);
    }
  }

  @action
  defaultValue() {
    if (this.reactRef) {
      this.reactRef.current.setDefaultValue(this.args.defaultValue || null);
    }
  }

  @action
  disabled() {
    if (this.reactRef) {
      this.reactRef.current.setDisabled(this.args.disabled || null);
    }
  }

  @action
  disableFocusListener() {
    if (this.reactRef) {
      this.reactRef.current.setDisableFocusListener(this.args.disableFocusListener || null);
    }
  }

  @action
  disableHoverListener() {
    if (this.reactRef) {
      this.reactRef.current.setDisableHoverListener(this.args.disableHoverListener || null);
    }
  }

  @action
  disableInteractive() {
    if (this.reactRef) {
      this.reactRef.current.setDisableInteractive(this.args.disableInteractive || null);
    }
  }

  @action
  disableTouchListener() {
    if (this.reactRef) {
      this.reactRef.current.setDisableTouchListener(this.args.disableTouchListener || null);
    }
  }

  @action
  disableRipple() {
    if (this.reactRef) {
      this.reactRef.current.setDisableRipple(this.args.disableRipple || null);
    }
  }

  @action
  disableTouchRipple() {
    if (this.reactRef) {
      this.reactRef.current.setDisableTouchRipple(this.args.disableTouchRipple || null);
    }
  }

  @action
  disableClearable() {
    if (this.reactRef) {
      this.reactRef.current.setDisableClearable(this.args.disableClearable || null);
    }
  }

  @action
  disabledItemsFocusable() {
    if (this.reactRef) {
      this.reactRef.current.setDisabledItemsFocusable(this.args.disabledItemsFocusable || null);
    }
  }

  @action
  disableElevation() {
    if (this.reactRef) {
      this.reactRef.current.setDisableElevation(this.args.disableElevation || null);
    }
  }

  @action
  disableFocusRipple() {
    if (this.reactRef) {
      this.reactRef.current.setDisableFocusRipple(this.args.disableFocusRipple || null);
    }
  }

  @action
  edge() {
    if (this.reactRef) {
      this.reactRef.current.setEdge(this.args.edge || false);
    }
  }

  @action
  error() {
    if (this.reactRef) {
      this.reactRef.current.setError(this.args.error || null);
    }
  }

  @action
  filterOptions() {
    if (this.reactRef) {
      this.reactRef.current.setFilterOptions(this.args.filterOptions || null);
    }
  }

  @action
  filterSelectedOptions() {
    if (this.reactRef) {
      this.reactRef.current.setFilterSelectedOptions(this.args.filterSelectedOptions || null);
    }
  }

  @action
  forcePopupIcon() {
    if (this.reactRef) {
      this.reactRef.current.setForcePopupIcon(this.args.forcePopupIcon || null);
    }
  }

  @action
  fullScreen() {
    if (this.reactRef) {
      this.reactRef.current.setFullScreen(this.args.fullScreen || null);
    }
  }

  @action
  fullWidth() {
    if (this.reactRef) {
      this.reactRef.current.setFullWidth(this.args.fullWidth || null);
    }
  }

  @action
  getOptionDisabled() {
    if (this.reactRef) {
      this.reactRef.current.setGetOptionDisabled(this.args.getOptionDisabled || null);
    }
  }

  @action
  groupBy() {
    if (this.reactRef) {
      this.reactRef.current.setGroupBy(this.args.groupBy || null);
    }
  }

  @action
  helperText() {
    if (this.reactRef) {
      this.reactRef.current.setHelperText(this.args.helperText || null);
    }
  }

  @action
  href() {
    if (this.reactRef) {
      this.reactRef.current.setHref(this.args.href || null);
    }
  }

  @action
  iconName() {
    if (this.reactRef) {
      this.reactRef.current.setIconName(this.args.iconName || null);
    }
  }

  @action
  imgProps() {
    if (this.reactRef) {
      this.reactRef.current.setImgProps(this.args.imgProps || null);
    }
  }

  @action
  indeterminate() {
    if (this.reactRef) {
      this.reactRef.current.setIndeterminate(this.args.indeterminate || null);
    }
  }

  @action
  inputValue() {
    if (this.reactRef) {
      this.reactRef.current.setInputValue(this.args.inputValue || null);
    }
  }

  @action
  invisible() {
    if (this.reactRef) {
      this.reactRef.current.setInvisible(this.args.invisible || null);
    }
  }

  @action
  label() {
    if (this.reactRef) {
      this.reactRef.current.setLabel(this.args.label || null);
    }
  }

  @action
  labelPlacement() {
    if (this.reactRef) {
      this.reactRef.current.setLabelPlacement(this.args.labelPlacement || null);
    }
  }

  @action
  listboxProps() {
    if (this.reactRef) {
      this.reactRef.current.setListboxProps(this.args.listboxProps || null);
    }
  }

  @action
  loading() {
    if (this.reactRef) {
      this.reactRef.current.setLoading(this.args.loading || null);
    }
  }

  @action
  margin() {
    if (this.reactRef) {
      this.reactRef.current.setMargin(this.args.margin || null);
    }
  }

  @action
  maxRows() {
    if (this.reactRef) {
      this.reactRef.current.setMaxRows(this.args.maxRows || null);
    }
  }

  @action
  maxWidth() {
    if (this.reactRef) {
      this.reactRef.current.setMaxWidth(this.args.maxWidth || null);
    }
  }

  @action
  minRows() {
    if (this.reactRef) {
      this.reactRef.current.setMinRows(this.args.minRows || null);
    }
  }

  @action
  multiline() {
    if (this.reactRef) {
      this.reactRef.current.setMultiline(this.args.multiline || null);
    }
  }

  @action
  noOptionsText() {
    if (this.loadingText) {
      this.reactRef.current.setNoOptionsText(this.args.noOptionsText || null);
    }
  }

  @action
  open() {
    if (this.reactRef) {
      this.reactRef.current.setOpen(this.args.open || null);
    }
  }

  @action
  openText() {
    if (this.reactRef) {
      this.reactRef.current.setOpenText(this.args.openText || null);
    }
  }

  @action
  options() {
    if (this.reactRef) {
      this.reactRef.current.setOptions(this.args.options || null);
    }
  }

  @action
  placeholder() {
    if (this.reactRef) {
      this.reactRef.current.setPlaceholder(this.args.placeholder || null);
    }
  }

  @action
  placement() {
    if (this.reactRef) {
      this.reactRef.current.setPlacement(this.args.placement || null);
    }
  }

  @action
  reactIcon() {
    if (this.reactRef) {
      this.reactRef.current.setReactIcon(this.args.reactIcon || null);
    }
  }

  @action
  required() {
    if (this.reactRef) {
      this.reactRef.current.setRequired(this.args.required || null);
    }
  }

  @action
  rows() {
    if (this.reactRef) {
      this.reactRef.current.setRows(this.args.rows || null);
    }
  }

  @action
  size() {
    if (this.reactRef) {
      this.reactRef.current.setSize(this.args.size || null);
    }
  }

  @action
  sizes() {
    if (this.reactRef) {
      this.reactRef.current.setSizes(this.args.sizes || null);
    }
  }

  @action
  src() {
    if (this.reactRef) {
      this.reactRef.current.setSrc(this.args.src || null);
    }
  }

  @action
  srcSet() {
    if (this.reactRef) {
      this.reactRef.current.setSrcSet(this.args.srcSet || null);
    }
  }

  @action
  title() {
    if (this.reactRef) {
      this.reactRef.current.setTitle(this.args.title || null);
    }
  }

  @action
  value() {
    if (this.reactRef) {
      this.reactRef.current.setValue(this.args.value || '');
    }
  }

  @action
  variant() {
    if (this.reactRef) {
      this.reactRef.current.setVariant(this.args.variant || null);
    }
  }

}
