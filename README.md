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
$ ember install --save -dev ember-paper-react
```


Usage
==============================================================================

<i>Button</i>
------------------------------------------------------------------------------
The most basic usage is:
```
<RPaperButton>{{content you want displayed}}</RPaperButton>
```
To make the button useful, the following options are supported:
* ```@onClick={{fn this.myOnClickHandler}}```
* ```@variant={{this.variant}}```
* ```@size={{this.size}}```
* ```@href={{this.href}}```
* ```@disabled={{this.disabled}}```
* ```@disableElevation={{this.disableElevation}}```
* ```@disableFocusRipple={{this.disableFocusRipple}}```
* ```@disableRipple={{this.disableRipple}}```
* ```@fullWidth={{this.fullWidth}}```

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
