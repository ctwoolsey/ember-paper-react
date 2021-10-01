import React from "react";
import Icon from "@mui/material/Icon";

function reactCreateIcon(iconObject) {
  //iconObject = {icon: ..., iconProps: ...}
  if (iconObject && iconObject.icon) {
    let props = iconObject.iconProps ? iconObject.iconProps : {};
    return React.createElement(iconObject.icon, props);
  } else if (iconObject && iconObject.iconProps) { //used for native FontAwesome for example
    return React.createElement(Icon, iconObject.iconProps);
  } else {
    return null;
  }
}

export { reactCreateIcon };
