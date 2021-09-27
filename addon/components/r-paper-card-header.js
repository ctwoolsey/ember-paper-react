import { ReactCardHeader } from '../react-component-lib/card-related/react-card-header';
import { COMPONENT_TYPES} from '../react-component-lib/constants/constants';
import BaseEmberPaperReact from './base/base-ember-paper-react';
import { CardHeaderPropObj } from '../react-component-lib/utility/props/card-header-props';
import { hasAttributeChildren } from "../decorators/has-attribute-children";

@hasAttributeChildren
export default class RPaperCardHeaderComponent extends BaseEmberPaperReact {

  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.CARD_HEADER;
    this.loadPropObject(CardHeaderPropObj);
    this.reactElement = ReactCardHeader;
  }

  renderAdditionalItems() {
    this.moveAttributes('avatar', 'MuiCardHeader-avatar');
    this.moveAttributes('action', 'MuiCardHeader-action');
    this.moveAttributes('subheader', 'MuiCardHeader-subheader');
    this.moveAttributes('title', 'MuiCardHeader-title');
  }

  moveAttributes(attribute, className) {
    const reactComp = this.reactRef.current.componentRef.current;
    this.reactFragmentMoveMethods[attribute](reactComp.getElementsByClassName(className)[0]);
  }
}


