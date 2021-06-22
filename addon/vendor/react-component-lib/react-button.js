import React from 'react';
import Button from '@material-ui/core/Button';
import {theme} from "../material-ui-theme/theme-creation";
import { ThemeProvider } from '@material-ui/core/styles';


export function ReactButton(props) {
  return (
    <ThemeProvider theme={theme}>
      <Button onClick={props.onclick}
              variant="contained"
              color="primary">
        {props.value}
      </Button>
    </ThemeProvider>
  );
}
