import {ReactCircularProgress} from '../react-component-lib/react-circular-progress'
import { COMPONENT_TYPES } from '../react-component-lib/constants/constants';
import BaseEmberPaperReact from './base/base-ember-paper-react';
import { CircularProgressPropObj } from '../react-component-lib/utility/props/circular-progress-props';

export default class RPaperCircularProgressComponent extends BaseEmberPaperReact {

  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.CIRCULAR_PROGRESS;
    this.loadPropObject(CircularProgressPropObj);
    this.reactElement = ReactCircularProgress;
  }
}

