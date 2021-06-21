import Component from '@glimmer/component';
import {Rbutton} from "../vendor/Rbutton"
import ReactDOM from 'react-dom';

export default class RPaperButton extends Component {
  constructor() {
    super(...arguments);
  }

  inserted(element) {
    console.log('I was inserted: ' + element.innerHTML);
    ReactDOM.render(<Rbutton value={element.innerHTML}/>, element);
  }

  willDestroy() {
    ReactDOM.unmountComponentAtNode(this.element);
    super.willDestroy();
  }
}
