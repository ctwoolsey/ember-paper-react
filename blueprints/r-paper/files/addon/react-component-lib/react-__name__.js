import <%= pascalCase %> from '@mui/material/<%= pascalCase %>';
import { ReactBase } from './base/react-base';
import { <%= pascalCase %>PropObj } from '../prop-files/<%= kebabCase %>-props';

export class React<%= pascalCase %> extends ReactBase{
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = <%= pascalCase %>;
    this.initialize(<%= pascalCase %>PropObj);
  }
}
