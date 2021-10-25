import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem'
import { ReactBase } from './base/react-base';
import { SelectPropObj } from '../prop-files/select-props';
import React from "react";

export class ReactSelect extends ReactBase{
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = Select;
    this.initialize(SelectPropObj);
  }

  /*childrenToRender() {
    return (
      <MenuItem value={0}>Dummy</MenuItem>
    )
  }*/
}
