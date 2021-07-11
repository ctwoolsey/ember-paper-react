import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { ReactThemeBase } from "./ReactThemeBase";
import { ReactConditionalThemeProvider } from "./ReactConditionalThemeProvider";

/* Does not currently implement:
    checkedIcon, icon, id, indeterminateIcon
*/
export class ReactCheckbox extends ReactThemeBase{
  constructor(props) {
    super(props);
    //this.props = props;
    Object.assign(this.state, {
      checked: this.props.checked,
      classString: this.props.class,
      color: this.props.color,
      disabled: this.props.disabled,
      disableRipple: this.props.disableRipple,
      indeterminate: this.props.indeterminate,
      required: this.props.required,
      size: this.props.size,
      theme: this.props.theme,
      value: this.props.value
    });

    this.componentRef = React.createRef();
    this.onChange = this.props.onChange;
    this.inputProps = this.props.inputProps;
    this.inputRef = this.props.inputRef

    //properties
    this.setChecked = this.setChecked.bind(this);
    this.setClass = this.setClass.bind(this);
    this.setColor = this.setColor.bind(this);
    this.setDisabled = this.setDisabled.bind(this);
    this.setDisableRipple = this.setDisableRipple.bind(this);
    this.setIndeterminate = this.setIndeterminate.bind(this);
    this.setRequired = this.setRequired.bind(this);
    this.setSize = this.setSize.bind(this);
    this.setValue = this.setValue.bind(this);

  }
  setChecked(checked) {
    this.setState( {checked: checked});
  }

  setClass(classes) {
    this.setState({classString: classes})
  }

  setColor(color) {
    this.setState( {color: color});
  }

  setDisabled(disabled) {
    this.setState( {disabled: disabled});
  }

  setDisableRipple(disableRipple) {
    this.setState( {disableRipple: disableRipple});
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

  render() {
    const {
      checked,
      classString,
      color,
      disabled,
      disableRipple,
      indeterminate,
      required,
      size,
      theme,
      value
    } = this.state;

    return (
      <ReactConditionalThemeProvider theme={theme}>
        <Checkbox
          {...(checked ? { checked: checked } : {})}
          {...(classString ? { className: classString } : {})}
          {...(color ? { color: color } : {})}
          {...(disabled ? { disabled: disabled } : {})}
          {...(disableRipple ? { disableRipple: disableRipple } : {})}
          {...(indeterminate ? { indeterminate: indeterminate } : {})}
          {...(required ? { required: required } : {})}
          {...(size ? { size: size } : {})}
          {...(value ? { value: value } : {})}
          ref={this.componentRef}
          {...(this.inputRef ? { inputRef: this.inputRef } : {})}
          {...(this.onChange ? { onChange: this.onChange } : {function(){}})}
        />
      </ReactConditionalThemeProvider>
    );
  }
}
