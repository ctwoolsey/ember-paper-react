import { COMPONENT_TYPES } from '../react-component-lib/constants/constants';
import { ReactIcon } from '../react-component-lib/react-icon';
import { ReactSvgIcon } from '../react-component-lib/react-svg-icon';
import { ReactMaterialIcon } from '../react-component-lib/react-material-icon';
import BaseEmberPaperReact from './base/base-ember-paper-react';
import { IconProps, IconStateProps, IconPropsNotForComponent, IconStatePropsNotForComponent } from '../react-component-lib/utility/props/icon-props';
import { SvgIconProps, SvgIconStateProps, SvgIconPropsNotForComponent, SvgIconStatePropsNotForComponent } from '../react-component-lib/utility/props/svg-icon-props';
import { MaterialIconProps, MaterialIconStateProps, MaterialIconPropsNotForComponent, MaterialIconStatePropsNotForComponent } from '../react-component-lib/utility/props/material-icon-props';

export default class RPaperIconComponent extends BaseEmberPaperReact {

  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.ICON;
    if (this.args.hasPath) {
      this.reactElement = ReactSvgIcon;
      this.props = SvgIconProps();
      this.stateProps = SvgIconStateProps();
      this.notForComponentProps = SvgIconPropsNotForComponent();
      this.notForComponentStateProps = SvgIconStatePropsNotForComponent();
        this.renderChildren = this.renderPathChildren;
    } else {
      if (this.args.reactIcon) {
        this.reactElement = ReactMaterialIcon;
        this.props = MaterialIconProps();
        this.stateProps = MaterialIconStateProps();
        this.notForComponentProps = MaterialIconPropsNotForComponent();
        this.notForComponentStateProps = MaterialIconStatePropsNotForComponent();
      } else {
        this.reactElement = ReactIcon;
        this.props = IconProps();
        this.stateProps = IconStateProps();
        this.notForComponentProps = IconPropsNotForComponent();
        this.notForComponentStateProps = IconStatePropsNotForComponent();
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

