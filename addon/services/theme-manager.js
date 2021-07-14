import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { createMuiTheme } from '@material-ui/core/styles';

export default class ThemeManagerService extends Service {
  @tracked theme = null;

  createTheme(palette) {
    return createMuiTheme({palette: palette});
  }
}
