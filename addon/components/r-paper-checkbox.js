import { COMPONENT_TYPES } from '../react-component-lib/constants/constants';
import BaseEmberPaperReact from './base/base-ember-paper-react';
import {
  CheckboxPropObj
} from '../react-component-lib/utility/props/checkbox-props';
import {
  FormControlLabelPropObj
} from '../react-component-lib/utility/props/form-control-label-props';
import { ReactCheckbox } from '../react-component-lib/react-checkbox';

export default class RPaperCheckbox extends BaseEmberPaperReact {
  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.CHECKBOX;
    this.props = Object.assign({}, CheckboxPropObj.props(), FormControlLabelPropObj.props());
    this.stateProps = Object.assign({}, CheckboxPropObj.stateProps(), FormControlLabelPropObj.stateProps());
    this.notForComponentProps = Object.assign({}, CheckboxPropObj.propsNotForComponent(), FormControlLabelPropObj.propsNotForComponent());
    this.notForComponentStateProps = Object.assign({}, CheckboxPropObj.statefulPropsNotForComponent(), FormControlLabelPropObj.statefulPropsNotForComponent());
    this.reactElement = ReactCheckbox;
  }

  initializeProps() {
    super.initializeProps();
    this.props.checkedIcon = this.createIcon(this.args.checkedIcon);
    this.props.indeterminateIcon = this.createIcon(this.args.indeterminateIcon);
  }
}
