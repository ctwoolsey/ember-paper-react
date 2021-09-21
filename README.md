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
```angular2html
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
```angular2html
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
All components support the ```@style``` and ```@class``` arguments.

<i>Button</i>
------------------------------------------------------------------------------
The most basic usage is:
```angular2html
<RPaperButton>{{content you want displayed}}</RPaperButton>
```
To make the button useful, the following options are supported:
* ```@onClick={{fn this.myOnClickHandler}}```
* ```@class={{this.class}}```
* ```@style={{this.style}}```<i>*</i>
* ```@disabled={{this.disabled}}```
* ```@disableElevation={{this.disableElevation}}```
* ```@disableFocusRipple={{this.disableFocusRipple}}```
* ```@disableRipple={{this.disableRipple}}```
* ```@fullWidth={{this.fullWidth}}```
* ```@href={{this.href}}```
* ```@size={{this.size}}```
* ```@theme={{this.theme}}``` <i>attach global theme to component</i>
* ```@variant={{this.variant}}```

<i>*</i> The use of the ```@style``` attribute is meant for dynamic styles tracked by ember, if the style is static it can be added to the normal ```HTML style``` attribute.

If you want to set the 'tabIndex'  set it as a normal HTML attribute.  ```<RPaperButton tabIndex="2"></RPaperButton>```

Classes, inline-styles, and attributes will be copied over to the react component. 

using handlebars for 'variant, size, href, disabled, or disabledElevation' allows dynamic changing of the values. If you don't need the value to change, you can set the values as a string.
See the material documentation for possible values for these options.

<b>Note:</b> Icon and Upload buttons are not implemented.  Complex Buttons should be able to be created using ember and css.

<i>Checkbox, Radio, Switch</i>
------------------------------------------------------------------------------
The most basic usage is:
```angular2html
<RPaperCheckbox/>
<RPaperRadio/>
<RPaperSwitch/>
```
To make the components useful, the following options are supported:

* ```@onChange={{fn this.myOnChangeHandler}}```
* ```@class={{this.class}}```
* ```@style={{this.style}}```<i>*</i>
* ```@checked={{this.checked}}```
* ```@color={{this.color}}```
* ```@disabled={{this.disabled}}```
* ```@disableRipple={{this.disableRipple}}```
* ```@edge={{this.edge}}``` <i>used only by radio</i>
* ```@indeterminate={{this.indeterminate}}``` <i>used only by checkbox</i>
* ```@label={{this.label}}```
* ```@labelPlacement={{this.labelPlacement}}```
* ```@required={{this.required}}```
* ```@size={{this.size}}```
* ```@theme={{this.theme}}``` <i>attach global theme to component</i>
* ```@value={{this.value}}```
* to attach the 'name' attribute to the radio component use either ```@radioName="someName"``` or a simple HTML ```name="someName"``` attribute

<i>*</i> The use of the ```@style``` attribute is meant for dynamic styles tracked by ember, if the style is static it can be added to the normal ```HTML style``` attribute.

<i>TextField</i>
------------------------------------------------------------------------------
The most basic usage is:
```angular2html
<RPaperTextField @label"My Label" @value={{this.textFieldValue}} @onChange={{this.onTextFieldChanged}}/>
```
To make the components useful, all options are supported, in addition to the standard options, a few additional options are provided:

* ```@class={{this.class}}```
* ```@style={{this.style}}```<i>*</i>
* to attach the 'name' attribute to the textField's input component use either ```@inputName="someName"``` or a simple HTML ```name="someName"``` attribute

<i>*</i> The use of the ```@style``` attribute is meant for dynamic styles tracked by ember, if the style is static it can be added to the normal ```HTML style``` attribute.

<b>Note:</b> this component can also act as a select component.  When ```@select={{true}}``` is set, the component will automatically add the object ```{native:true}``` to the ```selectProps``` property.  ```<option/>``` tags are the only supported children of this component.  When functioning as a select, only native mode is currently supported.

<i>Input Masking</i>
-----------------------------------------
This ```TextField``` has the capability for input masking.  It uses the [inputmask](https://github.com/RobinHerbots/Inputmask/) library.

To use the mask feature the following options are available (only ```@mask``` is required):

* ```@mask``` - In the ```inputmask``` documentation this is the object or string that is input into the ```Inputmask()``` initializer.
* ```@maskDefaults```
* ```@maskDefinitions```
* ```@maskAliases```

When using input masking, the onChange function will return two values for convenience.  The first will be the ```unmasked value``` and the second will be the ```masked value```.

Example:
```angular2html
<RPaperTextField @label="InputMaskDemo" @mask={{this.mask}} @value={{this.unMaskedTextValue}} @onChange={{this.onChangeHandler}}/>
<div>
  Unmasked Value: {{this.unMaskedTextValue}}
</div>
<div>
  Masked Value: {{this.maskedTextValue}}
</div>
```
```angular2html
//in controller
export default class ApplicationController extends Controller {
  @tracked unMaskedTextValue;
  @tracked maskedTextValue;

  constructor() {
    super(...arguments);
    this.mask = 'aa-9{4}';
  }

  @action
  onChangeHandler(unmaskedValue, maskedValue) {
    this.maskedTextValue = value;
    this.unMaskedTextValue = unmaskedValue;
  }
}
```


<i>Autocomplete</i>
------------------------------------------------------------------------------
The most basic usage is:
```angular2html
<RPaperAutoComplete @label"My Label" @options={{this.myOptions}} @value={{this.myValue}} @onChange={{this.onChangeHandler}}/>
```

The following options will not work unless a react Node is returned from the function:
* ```@renderGroup```
* ```@renderOption```
* ```@renderTags```

```@renderInput``` is fixed internally to use a ```TextField``` and cannot be changed. The options for the ```TextField``` are listed below.

While options and groupings can all be set through passed arguments, it is possible if desired to customize the grouping headers or options.
By using ```<:groupHeaders>``` or ```<:options>``` those sections may be customized.  Each customization must be wrapped within a ```<li>``` element.

<u><b>Note:</b>This is currently a work in progress and will not work except for static lists.  Autocomplete filters the results and they will not match the custom display.</u>
```angular2html
<RPaperAutocomplete @options={{this.filmOptions}} @label="Films" @value={{this.selectedFilm}}
@onChange={{this.onChangeHandler}} @getOptionLabel={{this.movieOptionLabel}} @groupBy={{this.movieGrouping}}>
  <:groupHeaders>
    {{#each this.groupHeaders as |groupHeader|}}
      <li>
        Group: {{groupHeader}}
      </li>
    {{/each}}
  </:groupHeaders>
  <:options>
    {{#each this.filmOptions as |film|}}
      <li><u>{{film.title}} ({{film.year}})</u></li>
    {{/each}}
  </:options>
</RPaperAutocomplete>
```

To make the components useful, these additional options are available:

* ```@class={{this.class}}```
* ```@style={{this.style}}```<i>*</i>
  
<i>*</i> The use of the ```@style``` attribute is meant for dynamic styles tracked by ember, if the style is static it can be added to the normal ```HTML style``` attribute.
  
Use the ```@clearIcon and/or  @clearIconProps```  ```@popupIcon and/or @popupIconProps``` attributes to change default icons.
```angular2html
<RPaperAutocomplete  @clearIcon={{this.clearIcon}} @clearIconProps={{this.clearIconProps}} @label"My Label" @options={{this.myOptions}} @value={{this.myValue}} @onChange={{this.onChangeHandler}}/>
```

Also, a few additional options are provided to handle the TextField portion of the component:

* ```@color={{this.color}}```
* ```@error={{this.error}}```
* ```@formHelperTextProps={{this.formHelperTextProps}}```
* ```@helperText={{this.helperText}}```
* ```@inputLabelProps={{this.inputLabelProps}}```
* ```@label={{this.label}}```
* ```@required={{this.required}}```
* ```@variant={{this.variant}}```

## Tooltip  
***
[Explore React Material-UI Tooltip docs](https://mui.com/components/tooltips/)  
The most basic usage is:
```angular2html
<RPaperTooltip @title={{this.myTooltipContent}}>
Hover over me!
</RPaperTooltip>
```   
The `@title` parameter can contain html.


<i>Dialog</i>
------------------------------------------------------------------------------
The most common usage is:
```angular2html
<RPaperDialog @open={{this.dialogOpen}}>
  <RPaperDialogTitle id="dialog-title">
    My Dialog Title
  </RPaperDialogTitle>
  <RPaperDialogContent>
    <RPaperDialogContentText id="dialog-description">
      Here is some dialog content.
    </RPaperDialogContentText>
  </RPaperDialogContent>
  <RPaperDialogActions>
    <RPaperButton @onClick={{this.onDialogCancelClicked}}>Cancel</RPaperButton>
    <RPaperButton @onClick={{this.onDialogCloseClicked}}>Close</RPaperButton>
  </RPaperDialogActions>
</RPaperDialog>
```
To make the components useful, all options are supported, including these additional options:

* ```@class={{this.class}}```
* ```@style={{this.style}}```<i>*</i>

<i>*</i> The use of the ```@style``` attribute is meant for dynamic styles tracked by ember, if the style is static it can be added to the normal ```HTML style``` attribute.

<i>Avatar</i>
------------------------------------------------------------------------------
This component does not use theme in React.
The most basic usages are:
```angular2html
<RPaperAvatar>H</RPaperAvatar>
<RPaperAvatar><RPaperIcon @reactIcon={{this.chipIcon}}/></RPaperAvatar>
```
To make the components useful, all options are supported, including these additional options:

* ```@class={{this.class}}```
* ```@style={{this.style}}```

<i>Avatar Group</i>
------------------------------------------------------------------------------
The most basic usages are:
```angular2html
<RPaperAvatarGroup>
  <RPaperAvatar>A</RPaperAvatar>
  <RPaperAvatar>B</RPaperAvatar>
  <RPaperAvatar>C</RPaperAvatar>
</RPaperAvatarGroup>

```
To make the components useful, all options are supported, including these additional options:

* ```@class={{this.class}}```
* ```@style={{this.style}}```


<i>Chip</i>
------------------------------------------------------------------------------
The most basic usages are:
```angular2html
<RPaperChip @avatar={{this.avatarProps}} @label="avatar chip"/>
<RPaperChip @icon={{this.chipIcon}} @label="icon chip"/> //uses a react material-ui Icon
<RPaperChip @iconProps={{this.chipIconProps}} @label="icon chip"/> //uses font awesome properties
```
To make the components useful, all options are supported, including these additional options:

* ```@class={{this.class}}```
* ```@style={{this.style}}```

To use an avatar in the chip:

To use an icon in the chip:
****explain what chip Icon Props is

<i>Icons</i>
------------------------------------------------------------------------------
This component does not use theme in React. (TBD - maybe this can be upgraded to use theme?)

There are four different ways of creating icons, similar to the React Icon specification.
```angular2html
<RPaperIcon @baseClassName="material-icons-two-tone" @iconName="add_circle"/>  //Google Material Font Item
<RPaperIcon @baseClassName="fas" @class="fa-award"/>  //Font Awesome Font
<RPaperIcon @reactIcon={{this.chipIcon}}/> //React Material-UI Icon
<RPaperIcon @hasPath={{true}}>  //SVG Icon
  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
</RPaperIcon>
  

```
To make the components useful, all options are supported, including these additional options:

* ```@class={{this.class}}```
* ```@style={{this.style}}```

To use a ```Font Icon```: 
In the head of the ```index.html``` file add the icon fonts you want to use.  For example:
```angular2html
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Material+Icons+Two+Tone"
/>
```

To use a ```Fontawesome Icon```
Note: the ember-fontawesome package will not work for react based font awesome icons.
In the ember app:
1) In the head of the ```index.html``` file add the fontawesome fonts you want to use.  For example: 
```angular2html
<link
  rel="stylesheet"
  href="https://use.fontawesome.com/releases/v5.14.0/css/all.css"
/>
```

To use a ```React Material Icon```:
In the ember app:
1) Install material-ui icons package: ```npm install @material-ui/icons@next```
2) Import the material-ui icon:  ```import AccessAlarmRounded from '@material-ui/icons/AccessAlarmRounded';```
3) Pass the instance of ```AccessAlarmRounded``` to the ```@reactIcon``` property of ```<RPaperIcon/>```

To use a ```SVG Icon with path```
1) Set the ```@hasPath``` property of ```<RPaperIcon/>``` to ```true```
2) Include a ```path``` element with a ```d``` attribute.  Only 1 ```path```element will work. No attributes will be copied to react.

<i>Drawer/SwipeableDrawer</i>
------------------------------------------------------------------------------
The most basic usages are:
```angular2html
//A Swipeable Drawer
<RPaperDrawer @anchor="right" @open={{this.drawerOpen}} @onClose={{this.onDrawerClose}} @swipeable={{true}} @onOpen={{this.onDrawerOpen}}>
  <div>Your Drawer Content</div>
</RPaperDrawer>
//A Regular Drawer
<RPaperDrawer @anchor="right" @open={{this.drawerOpen}} @onClose={{this.onDrawerClose}}>
  <div>Your Drawer Content</div>
</RPaperDrawer>
```
To make the components useful, all options are supported, including these additional options:

* ```@class={{this.class}}```
* ```@style={{this.style}}```

<i>Appbar/Toolbar</i>
------------------------------------------------------------------------------
The most basic usages are:
```angular2html
<RPaperAppbar position="static">
  <RPaperToolbar>
    <div>My App bar</div>
  </RPaperToolbar>
</RPaperAppbar>
```
To make the components useful, all options are supported, including these additional options:

* ```@class={{this.class}}```
* ```@style={{this.style}}```

<i>Menu/MenuItem</i>
------------------------------------------------------------------------------
The most basic usages are:
```angular2html
<RPaperButton id="menuTrigger" @onClick={{this.onToggleMenu}}>Toggle Menu</RPaperButton>
<RPaperMenu @triggerId="menuTrigger" @open={{this.menuOpen}} @onClose={{this.onMenuClose}}>
  <RPaperMenuItem @onClick={{this.onMenuItemClicked}}>Menu Item 1</RPaperMenuItem>
  <RPaperMenuItem @onClick={{this.onMenuItemClicked}}>Menu Item 2</RPaperMenuItem>
  <RPaperMenuItem @onClick={{this.onMenuItemClicked}}>Menu Item 3</RPaperMenuItem>
</RPaperMenu>
```

Note:  The ```anchorEl``` option is not explicitly supported.  Instead ```@triggerID```  must be given the ```id``` of the anchoring element.
To make the components useful, all other options are supported, including these additional options:

* ```@class={{this.class}}```
* ```@style={{this.style}}```

<i>CircularProgress</i>
------------------------------------------------------------------------------
The most basic usage is:
```angular2html
<RPaperCircularProgress/>
```

To make the components useful, all options are supported, including these additional options:

* ```@class={{this.class}}```
* ```@style={{this.style}}```

<i>Background</i>
------------------------------------------------------------------------------
The most basic usage is:
```angular2html
<RPaperButton @variant="contained" @onClick={{this.onToggleBackdrop}}>Show backdrop</RPaperButton>
<RPaperBackdrop
  @open={{this.backdropOpen}}
  @onClick={{this.handleBackdropClose}}
>
  <RPaperCircularProgress/>
</RPaperBackdrop>
```

To make the components useful, all options are supported, including these additional options:

* ```@class={{this.class}}```
* ```@style={{this.style}}```

<i>Card</i>
------------------------------------------------------------------------------
The most basic usage is:
```angular2html
<RPaperCard>
  <RPaperCardHeader @title="This is the header" @subheader="Some subheader.">
    <:avatar><RPaperAvatar>Y</RPaperAvatar></:avatar>
    <:action><RPaperButton>Menu</RPaperButton></:action>
  </RPaperCardHeader>
  <RPaperCardContent>This is my card content</RPaperCardContent>
  <RPaperCardActionArea>Card Action Area</RPaperCardActionArea>
  <RPaperCardMedia @sx={{this.mediaSX}} @image={{this.imagePath}} @title="Picture Title"/>
  <RPaperCardActions>
    <RPaperButton>Action Button</RPaperButton>
  </RPaperCardActions>
</RPaperCard>
```

In the ```RPaperCardHeader``` the following attributes can be written as children like so:

```
@title -> <:title>My Title</:title>
@subheader -> <:subheader>My Sub-header</:subheader>
@avatar -> <:avatar>Place an avatar here</:avatar>
@action -> <:action>Place some action Icon here</:action>
```
To make the components useful, all options are supported, including these additional options:

* ```@class={{this.class}}```
* ```@style={{this.style}}```

<i>Paper</i>
------------------------------------------------------------------------------
The most basic usage is:
```angular2html
<RPaper @elevation={{24}} @square={{false}}>Here is My Paper</RPaper>
```

To make the components useful, all options are supported, including these additional options:

* ```@class={{this.class}}```
* ```@style={{this.style}}```


==============================================================================

TBD


License
==============================================================================

This project is licensed under the [MIT License](LICENSE.md).
