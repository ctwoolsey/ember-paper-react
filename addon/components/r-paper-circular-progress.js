import {ReactCircularProgress} from '../react-component-lib/react-circular-progress'
import { COMPONENT_TYPES } from '../react-component-lib/constants/constants';
import BaseEmberPaperReact from './base/base-ember-paper-react';
import {
  CircularProgressProps,
  CircularProgressStateProps,
  CircularProgressPropsNotForComponent,
  CircularProgressStatePropsNotForComponent
} from '../react-component-lib/utility/props/circular-progress-props';

export default class RPaperCircularProgressComponent extends BaseEmberPaperReact {

  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.CIRCULAR_PROGRESS;
    this.props = CircularProgressProps();
    this.stateProps = CircularProgressStateProps();
    this.notForComponentProps = CircularProgressPropsNotForComponent();
    this.notForComponentStateProps = CircularProgressStatePropsNotForComponent();
    this.reactElement = ReactCircularProgress;
  }
}

