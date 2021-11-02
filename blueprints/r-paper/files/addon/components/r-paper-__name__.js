import { React<%= pascalCase %> } from '../react-component-lib/react-<%= dasherizedModuleName %>'
import { <%= snakeCase %> } from '../constants/<%= kebabCase %>';
import { <%= pascalCase %>PropObj } from '../prop-files/<%= dasherizedModuleName %>-props';
import BaseInElementRender from './base/base-in-element-render';

export default class RPaper<%= pascalCase %>Component extends BaseInElementRender {
  constructor() {
    super(...arguments);
    this.componentType = <%= snakeCase %>.COMPONENT_TYPE;
    this.loadPropObject(<%= pascalCase %>PropObj);
    this.reactElement = React<%= pascalCase %>;
  }
}

