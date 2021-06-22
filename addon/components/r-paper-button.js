import Component from '@glimmer/component';
import {ReactButton} from "../vendor/react-component-lib/react-button"
import ReactDOM from 'react-dom';
import { action } from '@ember/object';

export default class RPaperButton extends Component {
  constructor() {
    super(...arguments);
  }

  handleClick() {
    return this.args.onClick() || null;
  }

  @action
  inserted(element) {
    console.log('I was inserted: ' + element.innerHTML);
    this.handleClick = this.handleClick.bind(this);
    let size = this.args.size || '';
    let variant = this.args.variant || null;
    let disabled = this.args.disabled || false;
    let href = this.args.href || null;
    let disableElevation = this.args.disableElevation || null;
    ReactDOM.render(<ReactButton variant={variant}
                                 size={size}
                                 value={element.innerHTML}
                                 disabled={disabled}
                                 disableElevation={disableElevation}
                                 href={href}
                                 onclick={this.handleClick}/>, element);
  }

  willDestroy() {
    ReactDOM.unmountComponentAtNode(this.element);
    super.willDestroy();
  }
}
