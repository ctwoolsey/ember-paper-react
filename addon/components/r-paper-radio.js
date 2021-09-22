import { COMPONENT_TYPES } from '../react-component-lib/constants/constants';
import BaseEmberPaperReact from './base/base-ember-paper-react';
import {
  RadioProps,
  RadioStateProps,
  RadioPropsNotForComponent,
  RadioStatePropsNotForComponent
} from '../react-component-lib/utility/props/radio-props';
import {
  FormControlLabelProps, FormControlLabelStateProps, FormControlLabelPropsNotForComponent, FormControlLabelStatePropsNotForComponent
} from '../react-component-lib/utility/props/form-control-label-props';
import { ReactRadio } from '../react-component-lib/react-radio';

export default class RPaperRadioComponent extends BaseEmberPaperReact {
  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.RADIO;
    this.props = Object.assign({}, RadioProps(), FormControlLabelProps());
    this.stateProps = Object.assign({}, RadioStateProps(), FormControlLabelStateProps());
    this.notForComponentProps = Object.assign({}, RadioPropsNotForComponent(), FormControlLabelPropsNotForComponent());
    this.notForComponentStateProps = Object.assign({}, RadioStatePropsNotForComponent(), FormControlLabelStatePropsNotForComponent());
    this.reactElement = ReactRadio;
  }

  initializeProps() {
    super.initializeProps();
    this.props.checkedIcon = this.createIcon(this.args.checkedIcon);
  }

}
