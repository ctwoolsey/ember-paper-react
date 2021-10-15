import React from "react";
import Icon from "@mui/material/Icon";

function reactCreateIcon(iconObject) {
  /*
    iconObject = {icon: ..., iconProps: ...}
          or
    iconObject = an actual mui icon
  */
  if (iconObject && iconObject.icon) {
    if (iconObject.iconProps) {
      return React.createElement(iconObject.icon, iconObject.iconProps);
    } else {
      return React.createElement(iconObject.icon);
    }
  } else if (iconObject && iconObject.iconProps) { //used for native FontAwesome for example
    return React.createElement(Icon, iconObject.iconProps);
  } else {
    if (iconObject) {
      return React.createElement(iconObject);
    } else {
      return null;
    }
  }
}

export { reactCreateIcon };
