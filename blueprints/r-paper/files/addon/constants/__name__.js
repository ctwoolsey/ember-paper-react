import { REACT_COMPONENT_PREFIX, BASE_EMBER_COMPONENT_PREFIX } from './constants';

const IDS = {
  <%= snakeCase %>: `${REACT_COMPONENT_PREFIX}<%= pascalCase %>`
}

const <%= snakeCase %> = {
  ID: IDS.<%= snakeCase %>,
  COMPONENT_TYPE: `${BASE_EMBER_COMPONENT_PREFIX}-<%= kebabCase %>`,
}

export {
  <%= snakeCase %>
}
