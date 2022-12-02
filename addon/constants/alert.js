import { REACT_COMPONENT_PREFIX, BASE_EMBER_COMPONENT_PREFIX } from './constants';

const IDS = {
  ALERT: `${REACT_COMPONENT_PREFIX}Alert`
}

const ALERT = {
  ID: IDS.ALERT,
  COMPONENT_TYPE: `${BASE_EMBER_COMPONENT_PREFIX}-alert`,
  INSERT_CLASS: `${IDS.ALERT}-message`,
  ACTION_SPAN: `${IDS.ALERT}-action`,
  MESSAGE_SPAN: `${IDS.ALERT}-message`,
  ATTRIBUTE_COMPONENT: {
    ACTION: `action`,
    MESSAGE: `message`
  }
}

export {
  ALERT
}
