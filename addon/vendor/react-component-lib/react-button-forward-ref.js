import React from 'react';
import Button from '@material-ui/core/Button';
import {theme} from "../material-ui-theme/theme-creation";
import { ThemeProvider } from '@material-ui/core/styles';


export const ReactButtonForwardRef = React.forwardRef((props, ref) => {
  return (
    <ThemeProvider theme={theme}>
      <Button onClick={props.onclick}
              {...(props.variant ? { variant: props.variant } : {})}
              size={props.size}
              disabled={props.disabled}
              disableElevation={props.disableElevation}
              href={props.href}
              ref={ref}
              color="primary">
      </Button>
    </ThemeProvider>
  );
});

//https://stackoverflow.com/questions/51526461/how-to-use-react-forwardref-in-a-class-based-component
//https://stackoverflow.com/questions/62800572/how-to-use-forward-ref-in-class-component
