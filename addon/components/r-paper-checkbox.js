import Component from '@glimmer/component';
import ReactCheckbox from "../react-component-lib/react-checkbox";
import ReactDOM from 'react-dom';

export default class MyCheckboxComponent extends Component {
  constructor() {
    super(...arguments);
  }

  inserted(element) {
    ReactDOM.render(<ReactCheckbox/>, element);
  }

  willDestroy() {
    ReactDOM.unmountComponentAtNode(this.element);
    super.willDestroy();
  }

}
