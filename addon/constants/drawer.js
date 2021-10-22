import { REACT_COMPONENT_PREFIX, BASE_EMBER_COMPONENT_PREFIX } from "./constants";

const IDS = {
  DRAWER: `${REACT_COMPONENT_PREFIX}Drawer`
}

const DRAWER = {
  ID: IDS.DRAWER,
  COMPONENT_TYPE: `${BASE_EMBER_COMPONENT_PREFIX}-drawer`,
  INSERT_CLASS: `${IDS.DRAWER}-paper`,
  PERSISTENT: `persistent`,
  PERMANENT: `permanent`,
  KEEP_MOUNTED: `keepMounted`
}

export {
  DRAWER
}
