import { REACT_COMPONENT_PREFIX, BASE_EMBER_COMPONENT_PREFIX } from "./constants";

const IDS = {
  AVATAR: `${REACT_COMPONENT_PREFIX}Avatar`
}

const AVATAR = {
  ID: IDS.AVATAR,
  COMPONENT_TYPE: `${BASE_EMBER_COMPONENT_PREFIX}-avatar`,
  ROOT: `${IDS.AVATAR}-root`,
  VARIATION_CIRCULAR_CLASS: `${IDS.AVATAR}-circular`,
  VARIATION_SQUARE_CLASS: `${IDS.AVATAR}-square`
}

export {
  AVATAR
}
