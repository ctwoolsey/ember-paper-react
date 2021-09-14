import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { createTheme } from '@mui/material/styles';

export default class ThemeManagerService extends Service {
  @tracked theme = null;

  createTheme(palette) {
    return createTheme({palette: palette});
  }
}
