import { COMPONENT_TYPES } from '../constants/constants';
import { ReactIcon } from '../react-component-lib/react-icon';
import { ReactSvgIcon } from '../react-component-lib/react-svg-icon';
import { ReactMaterialIcon } from '../react-component-lib/react-material-icon';
import { IconPropObj } from '../prop-files/icon-props';
import { SvgIconPropObj } from '../prop-files/svg-icon-props';
import { MaterialIconPropObj } from '../prop-files/material-icon-props';
import BaseInElementRender from "./base/base-in-element-render";

export default class RPaperIconComponent extends BaseInElementRender {

  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.ICON;
    if (this.args.hasPath) {
      this.reactElement = ReactSvgIcon;
      this.loadPropObject(SvgIconPropObj);
      this.renderChildren = this.renderPathChildren;
    } else {
      this.renderChildren = null;
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

    for(let i = 0; i < this.childrenFragment.childNodes.length; i++) {
      if (this.childrenFragment.childNodes[i].nodeName .toUpperCase() === 'PATH') {
        svgPath.setAttribute('d', this.childrenFragment.childNodes[i].getAttribute('d'));
      }
    }
  }

}

