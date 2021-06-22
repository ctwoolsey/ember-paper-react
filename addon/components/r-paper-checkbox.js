import Component from '@glimmer/component';
import ReactCheckbox from "../vendor/react-component-lib/react-checkbox";
import ReactDOM from 'react-dom';

export default class MyCheckboxComponent extends Component {
  constructor() {
    super(...arguments);
  }

  inserted(element) {
    console.log('I was inserted');
    ReactDOM.render(<ReactCheckbox/>, element);
  }

  willDestroy() {
    ReactDOM.unmountComponentAtNode(this.element);
    super.willDestroy();
  }

}
