import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import { theme } from "./material-ui-theme/theme-creation";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary.main, //theme.status.danger,
    '&$checked': {
      color: theme.palette.secondary.main, //theme.status.danger,
    },
  },
  checked: {},
}));

function CustomCheckbox() {
  const classes = useStyles();

  return (
    <Checkbox
      defaultChecked
      classes={{
        root: classes.root,
        checked: classes.checked,
      }}
    />
  );
}

/*const theme = createMuiTheme({
  status: {
    danger: orange[500],
  },
});*/

export default function Rcheckbox() {
  return (
    <ThemeProvider theme={theme}>
      <CustomCheckbox />
    </ThemeProvider>
  );
}
