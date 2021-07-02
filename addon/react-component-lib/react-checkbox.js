import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { ThemeProvider } from '@material-ui/core/styles';

export class ReactCheckbox extends React.Component{
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      theme: this.props.theme
    };
    this.componentRef = React.createRef();

    //properties
    this.setTheme = this.setTheme.bind(this);
  }

  setTheme(theme) {
    console.log('in cb set theme');
    this.setState( {theme: theme});
  }

  render() {
    const {
      theme
    } = this.state;

    return (
      <ThemeProvider {...(theme ? {theme: theme} : {})}>
        <Checkbox
          onClick={this.props.onclick}
          ref={this.componentRef}
          color="primary" />
      </ThemeProvider>
    );
  }
}


/*const useStyles = makeStyles((theme) => ({
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
}*/

/*const theme = createMuiTheme({
  status: {
    danger: orange[500],
  },
});*/
/*export default function ReactCheckbox() {
  return (
    <ThemeProvider theme={theme}>
      <CustomCheckbox />
    </ThemeProvider>
  );
}*/
/*export default function ReactCheckbox() {
  return (
    <ThemeProvider  >
      <Checkbox
        defaultChecked />
    </ThemeProvider>
  );
}*/
