import { COMPONENT_TYPES } from '../react-component-lib/constants/constants';
import { ReactIcon } from '../react-component-lib/react-icon';
import { ReactSvgIcon } from '../react-component-lib/react-svg-icon';
import { ReactMaterialIcon } from '../react-component-lib/react-material-icon';
import BaseEmberPaperReact from './base/base-ember-paper-react';
import BaseChildSpanRender from "./base/base-child-span-render";
import { IconPropObj } from '../react-component-lib/utility/props/icon-props';
import { SvgIconPropObj } from '../react-component-lib/utility/props/svg-icon-props';
import { MaterialIconPropObj } from '../react-component-lib/utility/props/material-icon-props';

export default class RPaperIconComponent extends BaseChildSpanRender {

  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.ICON;
    if (this.args.hasPath) {
      this.reactElement = ReactSvgIcon;
      this.loadPropObject(SvgIconPropObj);
      this.renderChildren = this.renderPathChildren;
    } else {
      if (this.args.reactIcon) {
        this.reactElement = ReactMaterialIcon;
        this.loadPropObject(MaterialIconPropObj);
      } else {
        this.reactElement = ReactIcon;
        this.loadPropObject(IconPropObj);
      }
    }
  }



  renderPathChildren() {
    const svgChildNodes = this.reactRef.current.componentRef.current.childNodes;
    let svgPath = null;
    for(let i = 0; i < svgChildNodes.length; i++) {
      if (svgChildNodes[i].nodeName.toUpperCase() === 'PATH') {
        svgPath = svgChildNodes[i];
      }
    }
    this.setChildrenFragment();
    for(let i = 0; i < this.childrenFragment.childNodes.length; i++) {
      if (this.childrenFragment.childNodes[i].nodeName .toUpperCase() === 'PATH') {
        svgPath.setAttribute('d', this.childrenFragment.childNodes[i].getAttribute('d'));
      }
    }
  }

}

