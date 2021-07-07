Ember Paper React
==============================================================================
------------------------------------------------------------------

This project aims to bring React's Material-UI to ember octane.

[Explore React Material-UI docs »](https://https://material-ui.com/)


Compatibility
==============================================================================

* Ember.js v3.16 or above
* Ember CLI v2.13 or above
* Node.js v10 or above


Installation
==============================================================================

```
$ ember install --save --dev ember-paper-react
```
This addon requires the use of SASS.
```
$ ember install --save ember-cli-sass
```
In the ```ember-cli-build.js``` file add the following:
```
let app = new EmberApp(defaults, {
    // Add options here
    sassOptions: {
      extension: 'scss'
    }
  });
```
rename the ```app/styles/app.css``` file to ```app.scss```

Usage
==============================================================================
<i>Layout</i>
------------------------------------------------------------------------------
This addon uses React's ```material-ui``` components but layout styling is done as in ```ember-paper```. This is because material-ui styling is done through react constructs and would not allow styling via ember's HTML.

[See ember-paper layout docs »](https://miguelcobain.github.io/ember-paper/#/layout/introduction) 

<i>Theming</i>
------------------------------------------------------------------------------
If you wish to theme the material-ui components using predefined colors from material-ui, you will need to install "@material-ui/core".

```$ npm install --save --dev @material-ui/core```

To use the material-ui theme palette globally, inject the service 'themeManager'.  This should be done within application.js.

<i>application.js</i>
```
import pink from '@material-ui/core/colors/pink';
import green from '@material-ui/core/colors/green';

export default class ApplicationController extends Controller {
  @service themeManager;

  constructor() {
    super(...arguments);
    this.themeManager.theme = this.themeManager.createTheme({
      primary: {
        main: pink[500]
      },
      secondary: {
        main: green[500]
      }
    });
  }
}
```
To change the global theme, this same pattern can be called from anywhere in the ember app.  To change a specific component, modify the appropriate css file.

<i>Button</i>
------------------------------------------------------------------------------
The most basic usage is:
```
<RPaperButton>{{content you want displayed}}</RPaperButton>
```
To make the button useful, the following options are supported:
* ```@onClick={{fn this.myOnClickHandler}}```
* ```@class={{this.class}}```<i>*</i>
* ```@style={{this.style}}```<i>**</i>
* ```@variant={{this.variant}}```
* ```@size={{this.size}}```
* ```@href={{this.href}}```
* ```@disabled={{this.disabled}}```
* ```@disableElevation={{this.disableElevation}}```
* ```@disableFocusRipple={{this.disableFocusRipple}}```
* ```@disableRipple={{this.disableRipple}}```
* ```@fullWidth={{this.fullWidth}}```

<i>*</i> The use of the ```@class``` attribute is meant for dynamic classes tracked by ember, if the class is static it can be added to the normal ```HTML class``` attribute.

<i>**</i> The use of the ```@style``` attribute is meant for dynamic styles tracked by ember, if the style is static it can be added to the normal ```HTML style``` attribute.

If you want to set the 'tabIndex'  set it as a normal HTML attribute.  ```<RPaperButton tabIndex="2"></RPaperButton>```

Classes, inline-styles, and attributes will be copied over to the react component. 

using handlebars for 'variant, size, href, disabled, or disabledElevation' allows dynamic changing of the values. If you don't need the value to change, you can set the values as a string.
See the material documentation for possible values for these options.

<b>Note:</b> Icon and Upload buttons are not implemented.  Complex Buttons should be able to be created using ember and css.




Contributing
==============================================================================

TBD


License
==============================================================================

This project is licensed under the [MIT License](LICENSE.md).
