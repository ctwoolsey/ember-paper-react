import { REACT_COMPONENT_PREFIX, BASE_EMBER_COMPONENT_PREFIX } from './constants';

const IDS = {
  SNACKBAR: `${REACT_COMPONENT_PREFIX}Snackbar`
}

const SNACKBAR = {
  ID: IDS.SNACKBAR,
  COMPONENT_TYPE: `${BASE_EMBER_COMPONENT_PREFIX}-snackbar`,
  ACTION_SPAN: `${IDS.SNACKBAR}Content-action`,
  ATTRIBUTE_COMPONENT: {
    ACTION: `action`,
  }
}

export {
  SNACKBAR
}
