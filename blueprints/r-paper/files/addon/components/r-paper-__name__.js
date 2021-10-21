import {React<%= pascalCase %>} from '../react-component-lib/react-<%= dasherizedModuleName %>'
import { COMPONENT_TYPES } from '../constants/constants';
import {<%= pascalCase %>PropObj} from '../prop-files/<%= dasherizedModuleName %>-props';
import BaseInElementRender from "./base/base-in-element-render";

export default class RPaper<%= pascalCase %>Component extends BaseInElementRender {
  constructor() {
    super(...arguments);
    /* add this line to COMPONENT_TYPES:
                 <%= snakeCase %>: 'ember-paper-react-<%= kebabCase %>'

       and then replace this.componentType line with this:
                  this.componentType = COMPONENT_TYPES.<%= snakeCase %>;
     */
    this.componentType = COMPONENT_TYPES.NOT_SET;
    this.loadPropObject(<%= pascalCase %>PropObj);
    this.reactElement = React<%= pascalCase %>;
  }
}

