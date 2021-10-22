import {ReactCircularProgress} from '../react-component-lib/react-circular-progress'
import { CIRCULAR_PROGRESS } from "../constants/circular-progress";
import BaseEmberPaperReact from './base/base-ember-paper-react';
import { CircularProgressPropObj } from '../prop-files/circular-progress-props';

export default class RPaperCircularProgressComponent extends BaseEmberPaperReact {

  constructor() {
    super(...arguments);
    this.componentType = CIRCULAR_PROGRESS.COMPONENT_TYPE;
    this.loadPropObject(CircularProgressPropObj);
    this.reactElement = ReactCircularProgress;
  }
}

