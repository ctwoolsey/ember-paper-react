import { REACT_COMPONENT_PREFIX, BASE_EMBER_COMPONENT_PREFIX } from "./constants";

const IDS = {
  CHIP: `${REACT_COMPONENT_PREFIX}Chip`
}

const CHIP = {
  ID: IDS.CHIP,
  COMPONENT_TYPE: `${BASE_EMBER_COMPONENT_PREFIX}-chip`,
  LABEL_ROOT: `${IDS.CHIP}-label`,
  ATTRIBUTE_COMPONENT: {
    AVATAR: `avatar`,
    LABEL: `label`
  }
}

export {
  CHIP
}
