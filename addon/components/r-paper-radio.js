import { COMPONENT_TYPES } from '../react-component-lib/constants/constants';
import BaseEmberPaperReact from './base/base-ember-paper-react';
import { RadioPropObj } from '../react-component-lib/utility/props/radio-props';
import { FormControlLabelPropObj } from '../react-component-lib/utility/props/form-control-label-props';
import { ReactRadio } from '../react-component-lib/react-radio';

export default class RPaperRadioComponent extends BaseEmberPaperReact {
  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.RADIO;
    this.props = Object.assign({}, RadioPropObj.props(), FormControlLabelPropObj.props());
    this.stateProps = Object.assign({}, RadioPropObj.stateProps(), FormControlLabelPropObj.stateProps());
    this.propsNotForComponent = Object.assign({}, RadioPropObj.propsNotForComponent(), FormControlLabelPropObj.propsNotForComponent());
    this.statefulPropsNotForComponent = Object.assign({}, RadioPropObj.statefulPropsNotForComponent(), FormControlLabelPropObj.statefulPropsNotForComponent());
    this.reactElement = ReactRadio;
  }

  initializeProps() {
    super.initializeProps();
    this.props.checkedIcon = this.createIcon(this.args.checkedIcon);
  }

}
