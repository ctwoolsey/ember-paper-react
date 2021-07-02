import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { createMuiTheme } from '@material-ui/core/styles';

export default class ThemeManagerService extends Service {
  @tracked theme = null;

  createTheme(palette) {
    return createMuiTheme({palette: palette});
  }

  /*set theme(theme) {
    console.log('set theme called');
    this._theme = theme;
  }*/

  /*get theme() {
    console.log('get theme called');
    return this.theme;
  }*/

  /*get counter() {
    console.log('counter called (in service): ' + this.counter);
    return this.counter;
  }*/

}
