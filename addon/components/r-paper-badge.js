import { ReactBadge } from '../react-component-lib/react-badge'
import { BADGE } from '../constants/badge';
import { BadgePropObj } from '../prop-files/badge-props';
import BaseInElementRender from './base/base-in-element-render';
import { protectChildrenFromReactDestruction } from "../decorators/protect-children-from-react-destruction";

@protectChildrenFromReactDestruction
export default class RPaperBadgeComponent extends BaseInElementRender {
  constructor() {
    super(...arguments);
    this.componentType = BADGE.COMPONENT_TYPE;
    this.loadPropObject(BadgePropObj);
    this.reactElement = ReactBadge;
  }
}

