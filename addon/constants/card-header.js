import { REACT_COMPONENT_PREFIX, BASE_EMBER_COMPONENT_PREFIX } from "./constants";

const IDS = {
  CARD_HEADER: `${REACT_COMPONENT_PREFIX}CardHeader`
}

const CARD_HEADER = {
  ID: IDS.CARD_HEADER,
  COMPONENT_TYPE: `${BASE_EMBER_COMPONENT_PREFIX}-card-header`,
  ACTION_SPAN: `${IDS.CARD_HEADER}-action`,
  AVATAR_SPAN: `${IDS.CARD_HEADER}-avatar`,
  SUBHEADER_SPAN: `${IDS.CARD_HEADER}-subheader`,
  TITLE_SPAN: `${IDS.CARD_HEADER}-title`,
  ATTRIBUTE_COMPONENT: {
    ACTION: `action`,
    AVATAR: `avatar`,
    SUBHEADER: `subheader`,
    TITLE: `title`
  }
}

export {
  CARD_HEADER
}
