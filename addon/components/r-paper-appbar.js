import {ReactAppbar} from '../react-component-lib/react-appbar'
import { COMPONENT_TYPES } from '../react-component-lib/constants/constants';
import BaseEmberPaperReact from './base/base-ember-paper-react';
import {
  AppbarProps,
  AppbarStateProps,
  AppbarPropsNotForComponent,
  AppbarStatePropsNotForComponent
} from '../react-component-lib/utility/props/appbar-props';

export default class RPaperAppbarComponent extends BaseEmberPaperReact {

  constructor() {
    super(...arguments);
    this.componentType = COMPONENT_TYPES.APPBAR;
    this.props = AppbarProps();
    this.stateProps = AppbarStateProps();
    this.notForComponentProps = AppbarPropsNotForComponent();
    this.notForComponentStateProps = AppbarStatePropsNotForComponent();
    this.reactElement = ReactAppbar;
  }

  renderChildren() {
    this.reactRef.current.componentRef.current.replaceChildren(document.getElementById(this.childrenSpanId));
  }

}

