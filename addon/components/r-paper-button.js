import Component from '@glimmer/component';
import {ReactButton} from "../vendor/react-component-lib/react-button"
import ReactDOM from 'react-dom';
import { action } from '@ember/object';

export default class RPaperButton extends Component {
  constructor() {
    super(...arguments);
  }

  handleClick() {
    this.args.onClick();
  }

  @action
  inserted(element) {
    console.log('I was inserted: ' + element.innerHTML);
    this.handleClick = this.handleClick.bind(this);
    ReactDOM.render(<ReactButton value={element.innerHTML} onclick={this.handleClick}/>, element);
  }

  willDestroy() {
    ReactDOM.unmountComponentAtNode(this.element);
    super.willDestroy();
  }
}
