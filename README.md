Ember Paper React
==============================================================================
------------------------------------------------------------------

This project aims to bring React's Material-UI to ember octane.

[Explore React Material-UI docs »](https://https://material-ui.com/)

Examples/Demo can be found at: https://github.com/ctwoolsey/ember-paper-react-demo


Compatibility
==============================================================================

* Ember.js v3.28 or above
* Ember CLI v3.28 or above
* Node.js v13 or above


Installation
==============================================================================


>$ ember install --save --dev ember-paper-react

This addon requires the use of SASS.

>$ ember install --save ember-cli-sass

In the `ember-cli-build.js` file add the following:
```handlebars
let app = new EmberApp(defaults, {
    // Add options here
    sassOptions: {
      extension: 'scss'
    }
  });
```
rename the `app/styles/app.css` file to `app.scss`

# Usage

## Layout
***
This addon uses React's `material-ui` components but layout styling is done as in `ember-paper`. This is because material-ui styling is done through react constructs and would not allow styling via ember's HTML.

[See ember-paper layout docs »](https://miguelcobain.github.io/ember-paper/#/layout/introduction) 

## Theming  
***

If you wish to theme the material-ui components using predefined colors from material-ui, you will need to install:

>$ npm install --save --dev @mui/material @emotion/react @emotion/style

To use the material-ui theme palette globally, inject the service `themeManager`.  This should be done within application.js.

<i>application.js</i>
```handlebars
import pink from '@mui/material/colors/pink';
import green from '@mui/material/colors/green';

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
All components support the `@style` and `@class` arguments as well as `@sx`.

`@style` can be inline or as a passed object:  
> <MyComponent @style="backgroundColor:blue; width:100px" /> 
 
or
 
> <MyComponent @style={{this.myStyle}} />   
> this.myStyle = { backgroundColor: 'blue', width: '500px' };

# Components
A few important notes that effect all components:  
>Components need to have a parent html tag at some level.  This cannot be a wrap of the `{{outlet}}` tag.  This can be at the page level in a controler template like so:
>```handlebars
><div id="some-page">
>  <components/>
></div>
>```  

>`role` and `aria-*` and `data-*` these attributes will be recognized on all components. It is the user's responsibility
>to make sure the component should have a `role` or `aria-*` attribute.  These fields can be static or dynamic:
>```handlebars
><RPaperComponent @role={{this.role}} @aria-label={{this.label}} @data-counter={{this.counter}}/>
><RPaperComponent role='button' aria-label='myLabel' data-counter='1'/>
>```  
>The first example will update 



### icons
>Components that have `icon` as an attribute take an icon object.  The form of this object is:  
> {icon: ..., iconProps: ...}  
> if no iconProps are needed the icon can be passed directly.
>```handlebars
><RPaperButton @startIcon={{this.icon}}>Button</RPaperButton>
>
>//react material-ui icon
>import AccessAlarmRounded from '@mui/icons-material/AccessAlarmRounded';
>this.icon={
> icon: AccessAlarmRounded
>}
>-or-
>this.icon = AccessAlarmmRounded;
>
>Props can also be used on material-ui icons:
>this.icon={
> icon: AccessAlarmRounded,
> iconProps: { color: 'primary' }
>};
>
>//font-awesome icon
>this.icon={
> iconProps: {
>   baseClassName: 'fas fa-award'
> }
>};
>```  

All properties listed on the Material-ui site are available are implemented on the components with the use of `@`.  Properties that might be dynamic and change are implemented so that they will update accordingly.  Properties or functions that return a ReactNode will generally not work unless you pass or return a ReactNode.  Some components have special ways of dealing with this known as `Attribute Children`.


## Alert
***
[Explore React Material-UI Alert docs](https://mui.com/material-ui/react-alert/)

The most basic usages are:
```handlebars
<RPaperAlert @severity="info">
  <RPaperToolbar>
    <:message>Information Message</:message>
    <:action><button>Okay</button></:action>
  </RPaperToolbar>
</RPaperAlert>

<RPaperAlert @severity="error">
  <RPaperToolbar>
    <RPaperAlertTitle>Error</RPaperAlertTitle>
    This is an error alert — check it out!
  </RPaperToolbar>
</RPaperAlert>

<RPaperAlert @severity="error">
    <:message>
        <RPaperAlertTitle>Error</RPaperAlertTitle>
        This is an error alert — check it out!
    </:message>
    <:action><RPaperButton @color="inherit" @size="small" @onClick={{this.actionClicked}}>OKAY</RPaperButton></:action>
</RPaperAlert>
```
Note: any time an action is needed use the named block methods as shown.

## AppBar/Toolbar
***
[Explore React Material-UI AppBar docs](https://mui.com/components/app-bar/)

The most basic usages are:
```handlebars
<RPaperAppBar @position="static">
  <RPaperToolbar>
    <div>My App bar</div>
  </RPaperToolbar>
</RPaperAppBar>
```


## Autocomplete
***
[Explore React Material-UI Autocomplete docs](https://mui.com/components/autocomplete/)  

The most basic usage is:
```handlebars
<RPaperAutocomplete @label="My Label" @options={{this.myOptions}} @onChange={{this.onChangeHandler}}/>
```

>This component supports validation messages:  
>Normal `TextField` `error` and `helperText` fields are available. But special fields have been added to make validation
>work easier with `ember-changeset`.  The following attributes have been added:  
>* `@isTouched` - this field will need to be true to display the error messages passed to the next attribute
>* `@errors` - this is an array of error validation messages.

In addition to the defined options, the following options have been added for convenience:
* `@popupClass` - this option will add this class name to the `popup` so that styling the popup can be unique to the component
* `@readOnly` - this option makes the `autocomplete` act more like a normal select component.  This can also be achieved by setting 
                `@inputProps` equal to an object `{ readOnly:  true }`.

Note: The following options will not work unless a react Node is returned from the function:
* `@renderGroup`
* `@renderOption`
* `@renderTags`
* `@getLimitTagsText`

`@renderInput` is fixed internally to use a `TextField` and cannot be changed.  
All properties of the `TextField` are available for the `TextField` component unless the `Autocomplete` component uses the same property.

If `@nativeOnChange={{true}}`:
The `onChange` function will return the mui specified `(event, value, reason, details)`.  
Otherwise, `@onChange` will return `(value)`.  
If `@multiple={{true}}` the `value` returned will be an `EmberArray`.

While options and groupings can all be set through passed arguments, it is possible if desired to customize the grouping headers or options.
By using `<:groupHeaders>` or `<:options>` those sections may be customized.  Each customization must be wrapped within a `<li>` element.
If using custom text in the options, to ensure that autocomplete updates these options, `@filterOptions` must be used as in the example below.

```handlebars
<RPaperAutocomplete  @options={{this.filmOptions}} @label="ComboBox"
                     @getOptionLabel={{this.movieOptionLabel}} 
                     @groupBy={{this.movieGrouping}}
                     @filterOptions={{this.filterOptions}}>
  <:groupHeaders>
    {{#each this.groupHeaders as |groupHeader|}}
    <li>
      Group: {{groupHeader}}
    </li>
    {{/each}}
  </:groupHeaders>
  <:options>
    {{#each this.filmOptionsFiltered as |film|}}
    <li><u>{{film.title}} ({{film.year}})</u></li>
    {{/each}}
  </:options>
</RPaperAutocomplete>
```
```
@tracked filmOptionsFiltered;
@tracked groupHeaders;

this.top100Films =  [
      { title: 'The Shawshank Redemption', year: 1994 },
      { title: 'The Godfather', year: 1972 },
      { title: 'The Godfather: Part II', year: 1974 },
      { title: 'The Dark Knight', year: 2008 },
      { title: '12 Angry Men', year: 1957 },
      { title: "Schindler's List", year: 1993 },
      { title: 'Pulp Fiction', year: 1994 },...];

movieOptionLabel(option) {
    if (option) {
      return option.title + ' (' + option.year + ') ';
    } else {
      return '';
    }
}
 
movieGrouping(option) {
    return option.firstLetter;
}

@action
  filterOptions(options, state) {
    return this.filteredOptions(options, state.inputValue);
  }

  filteredOptions(options, inputValue) {
    this.filmOptionsFiltered = [];
    options.forEach((option) => {
      const showValue = option.title + ' ' + option.year;
      if (showValue.toLowerCase().includes(inputValue.toLowerCase())) {
        this.filmOptionsFiltered.push(option);
      }
    });
    this.createGroupHeaders();
    return this.filmOptionsFiltered;
}
      
createGroupHeaders() {
    this.groupHeaders = A();
    this.filmOptionsFiltered.forEach((filmOption) => {
      if (!this.groupHeaders.includes(filmOption.firstLetter)) {
        this.groupHeaders.addObject(filmOption.firstLetter);
      }
    });
  }
```  

## Avatar
***
[Explore React Material-UI Avatar docs](https://mui.com/components/avatars/)  

This component does not use theme in React.  The color of the avatar can be set by `@sx`, `@class`, or `@style`.
The most basic usages are:
```handlebars
<RPaperAvatar>H</RPaperAvatar>
<RPaperAvatar><RPaperIcon @reactIcon={{this.chipIcon}}/></RPaperAvatar>
```

This component also adds the attribute `@onDisplayed`.  If used, the function passed to it will be called when the content
has been displayed.  This may be called more than once due to the nature of some components or the way React re-renders.

## Avatar Group
***
[Explore React Material-UI Avatar docs](https://mui.com/api/avatar-group/)  
An example usage is:
```handlebars
<RPaperAvatarGroup @max={{this.maxAvatarGroupSize}} @variant={{this.avatarVariant}} @spacing={{this.avatarGroupSpacing}}>
  {{#each this.avatarContentList as |avatarContentItem|}}
    <RPaperAvatar>{{avatarContentItem}}</RPaperAvatar>
  {{/each}}
</RPaperAvatarGroup>

```


## Backdrop
***
[Explore React Material-UI Backdrop docs](https://mui.com/components/backdrop/)  

The most basic usage is:
```handlebars
<RPaperButton @onClick={{this.onShowBackdropClicked}}>Show backdrop</RPaperButton>
<RPaperBackdrop
  @open={{this.isBackdropOpen}}
>
  <RPaperCircularProgress/>
</RPaperBackdrop>
```

## Badge
***
[Explore React Material-UI Badge docs](https://mui.com/components/badges/)

The most basic usage is:
```handlebars
<RPaperBadge @badgeContent={{4}}>
  Some Content
</RPaperBadge>
```

This component also adds the attribute `@onDisplayed`.  If used, the function passed to it will be called when the content
has been displayed.  This may be called more than once due to the nature of some components or the way React re-renders.

## Button
***
[Explore React Material-UI Button docs](https://mui.com/components/buttons/)  

The most basic usage is:
```handlebars
<RPaperButton>{{content you want displayed}}</RPaperButton>
```
Using the `@href` attribute in button will use ember's `transitionTo` method so that in app links work as expected.  To transition to an external link a fully qualified link should be used: ```http://...```  

This component also adds the attribute `@onDisplayed`.  If used, the function passed to it will be called when the content
has been displayed.  This may be called more than once due to the nature of some components or the way React re-renders.


## Card
***
[Explore React Material-UI Card docs](https://mui.com/components/cards/)  

The most basic usage is:
```handlebars
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

In the `RPaperCardHeader` the following attributes can be written as children like so:
>@title -> <:title>My Title</:title>  
>@subheader -> <:subheader>My Sub-header</:subheader>  
>@avatar -> <:avatar>Place an avatar here</:avatar>  
>@action -> <:action>Place some action Icon here</:action>  

`@title` and `@subheader` have the option of being passed as an argument using `@` or being passed as an `Attribute Child` for more flexibility.



## Checkbox, Radio, Switch
***
[Explore React Material-UI Checkbox docs](https://mui.com/components/checkboxes/)  
[Explore React Material-UI Switch docs](https://mui.com/components/switches/)  
[Explore React Material-UI Radio Button docs](https://mui.com/components/radio-buttons/)  

The most basic usage is:
```handlebars
<RPaperCheckbox/>
<RPaperRadio/>
<RPaperSwitch/>
```
The radio component also adds the attribute `@onDisplayed`.  If used, the function passed to it will be called when the content
has been displayed.  This may be called more than once due to the nature of some components or the way React re-renders.

The checkbox component also adds the attribute `@nativeOnChange`. If set to true, the `@onChange` callback will return the native `event` object.
The checked state can be found out `event.target.checked`.  If not set, or set to false, the `@onChange` callback will return the checked state.

## Chip
***
[Explore React Material-UI Chips docs](https://mui.com/components/chips/)  

The most basic usages are:
```handlebars
<RPaperChip @label="My Label"/>
<RPaperChip @icon={{this.chipIconObj}} @label="icon chip"/>
<RPaperChip @label="Avatar Chip"/>
  <:avatar><RPaperAvatar>W</RPaperAvatar></:avatar>
</RPaperChip>
```

A chip can contain an icon or avatar but not both.  If an icon and avatar are provided, the icon will be displayed.  
Label can also be passed as an attribute node ```<:label></:label>``` to make HTML rendering easier.

## CircularProgress
***
[Explore React Material-UI Progress docs](https://mui.com/components/progress/)  

The most basic usage is:
```handlebars
<RPaperCircularProgress/>
```

This component is usually used with `<RPaperBackdrop/>`

## DatePicker
***
[Explore React Material-UI DatePicker docs](https://mui.com/x/react-date-pickers/date-picker/)

The most basic usages are:
```handlebars
<RPaperDatePicker @label="Basic Example"
                  @onChange={{this.datePickerOnChange}}
                  @value={{this.datePickerValue}}
                  @adapterLocale={{this.locale}}/>
```
All attributes from `LocalizationProvider` are supported. The attribute `dateAdapter` defaults to using `AdapterMoment`
if not specified in the component.

This component supports validation using the following attributes:
```handlebars
@isTouched - this field will need to be true to display the error messages passed to the next attribute
@errors - this is an array of error validation messages.
```

## DateTimePicker
***
[Explore React Material-UI DateTimePicker docs](https://mui.com/x/react-date-pickers/date-time-picker/)

The most basic usages are:
```handlebars
<RPaperDateTimePicker @label="Date/Time Picker"
                      @onChange={{this.dateTimePickerOnChange}}
                      @value={{this.dateTimePickerValue}}
                      @adapterLocale={{this.locale}}/>
```
All attributes from `LocalizationProvider` are supported. The attribute `dateAdapter` defaults to using `AdapterMoment`
if not specified in the component.

This component supports validation using the following attributes:
```handlebars
@isTouched - this field will need to be true to display the error messages passed to the next attribute
@errors - this is an array of error validation messages.
```

## Drawer
***
[Explore React Material-UI Drawers docs](https://mui.com/components/drawers/)  

The most basic usages are:
```handlebars
<RPaperDrawer @anchor="top" @open={{this.drawerTopOpen}} @onClose={{this.onTopDrawerClose}}>
  <div>Top Content</div>
</RPaperDrawer>
```

The `onClose` handler should close the drawer by setting `@open` = false.

This component also adds the attribute `@onDisplayed`.  If used, the function passed to it will be called when the content
has been displayed.  This may be called more than once due to the nature of some components or the way React re-renders.

## Dialog
***
[Explore React Material-UI Dialog docs](https://mui.com/components/dialogs/)  

The most common usage is:
```handlebars
<RPaperDialog @open={{this.dialogOpen}}>
  <RPaperDialogTitle>
    My Dialog Title
  </RPaperDialogTitle>
  <RPaperDialogContent>
    <RPaperDialogContentText>
      Here is some dialog content.
    </RPaperDialogContentText>
  </RPaperDialogContent>
  <RPaperDialogActions>
    <RPaperButton @onClick={{this.onDialogCloseClicked}}>Close</RPaperButton>
  </RPaperDialogActions>
</RPaperDialog>
```
This component adds the following attributes:
* `@keepOpenOnClickOutside` - boolean value.  If set to true, the dialog will not close if the user clicks outside of the background.
* `@onDisplayed` - If used, the function passed to it will be called when the content
has been displayed.  This may be called more than once due to the nature of some components or the way React re-renders.

## Icons
***
[Explore React Material-UI Icon docs](https://mui.com/components/icons/)  

There are four different ways of creating icons, similar to the React Icon specification.
```handlebars
<RPaperIcon @baseClassName="material-icons-two-tone" @iconName="add_circle"/>  //Google Material Font Item
<RPaperIcon @baseClassName="fas" @class="fa-award"/>  //Font Awesome Font
<RPaperIcon @reactIcon={{this.chipIcon}}/> //React Material-UI Icon
<RPaperIcon @hasPath={{true}}>  //SVG Icon
  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
</RPaperIcon>
  

```
Properties for icons are found in the documentation for `Icon` or `SvgIcon`.

To use a `Font Icon`: 
In the head of the `index.html` file add the icon fonts you want to use.  For example:
```handlebars
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Material+Icons+Two+Tone"
/>
```

To use a `Fontawesome Icon`
Note: the ember-fontawesome package will not work for react based font awesome icons.
In the ember app:
1) In the head of the `index.html` file add the fontawesome fonts you want to use.  For example: 
```handlebars
<link
  rel="stylesheet"
  href="https://use.fontawesome.com/releases/v5.14.0/css/all.css"
/>
```

To use a `React Material Icon`:
In the ember app:
1) Install material-ui icons package: `npm install @mui/icons-material`
2) Import the material-ui icon:  `import AccessAlarmRounded from '@mui/icons-material/AccessAlarmRounded';`
3) Pass the instance of `AccessAlarmRounded` to the `@reactIcon` property of `<RPaperIcon/>`

To use a `SVG Icon with path`
1) Set the `@hasPath` property of `<RPaperIcon/>` to `true`
2) Include a `path` element with a `d` attribute.  Only 1 `path`element will work. No attributes will be copied to react.

## Floating Action Button (Fab)
***
[Explore React Material-UI Fab docs](https://mui.com/components/floating-action-button/)

Basic Usage:
```handlebars
<RPaperFab>
  <RPaperIcon ... /> //Any RPaperIcon
</RPaperFab>
```

## IconButton
***
[Explore React Material-UI Icon docs](https://mui.com/components/buttons/#icon-button)

Basic Usage:
```handlebars
<RPaperIconButton>
  <RPaperIcon ... /> //Any RPaperIcon
</RPaperIconButton>
```
## Menu/MenuItem
***
The most basic usages are:
```handlebars
<RPaperButton id="menuTrigger" @onClick={{this.onToggleMenu}}>Toggle Menu</RPaperButton>
<RPaperMenu @triggerId="menuTrigger" @open={{this.menuOpen}} @onClose={{this.onMenuClose}}>
  <RPaperMenuItem @onClick={{this.onMenuItemClicked}}>Menu Item 1</RPaperMenuItem>
  <RPaperMenuItem @onClick={{this.onMenuItemClicked}}>Menu Item 2</RPaperMenuItem>
  <RPaperMenuItem @onClick={{this.onMenuItemClicked}}>Menu Item 3</RPaperMenuItem>
</RPaperMenu>
```

Note: `RPaperMenu` can use `@anchorEl` and provide a function that returns an HTML refernce to the trigger 
element.  But to make life easier, `@triggerId` has been added to the attributes so the trigger element can 
be referenced in the HTML.

This component also adds the attribute `@onDisplayed`.  If used, the function passed to it will be called when the content
has been displayed.  This may be called more than once due to the nature of some components or the way React re-renders.

## Paper
***
[Explore React Material-UI Paper docs](https://mui.com/components/paper/)  

The most basic usage is:
```handlebars
<RPaper @elevation={{24}} @square={{false}}>Here is My Paper</RPaper>
```

## RadioGroup
***
[Explore React Material-UI Radio Group docs](https://mui.com/components/radio-buttons/#radio-group)

The most basic usage is:
```handlebars
<RPaperRadioGroup @name="radio-group" @defaultValue="myValue" @onChange={{this.onRadioGroupChange}}>
  {{#each this.radioGroups as |radioGroup|}}
    <RPaperRadio @label={{radioGroup}} @value={{radioGroup}}/>
  {{/each}}
</RPaperRadioGroup>
```

## Snackbar
***
[Explore React Material-UI Snackbar docs](https://mui.com/material-ui/react-snackbar/)

The most basic usage is:
```handlebars
<RPaperSnackbar
  @open={{this.simpleSnackbarOpen}}
  @message='Note archived'
  @onClose={{this.simpleSnackbarOnClose}}
  @autoHideDuration={{2000}}
  @anchorOrigin={{this.simpleSnackbarPosition}}>
    <:action><button onClick={{this.actionClicked}}>OKAY</button></:action>
</RPaperSnackbar>

<RPaperSnackbar
  @open={{this.alertSnackbarOpen}}
  @onClose={{this.alertSnackbarOnClose}}
  @autoHideDuration={{5000}}
  @anchorOrigin={{this.alertSnackbarPosition}}>
    <RPaperAlert @severity="info">This is an info alert — check it out!</RPaperAlert>
</RPaperSnackbar>
```

## Tabs
***
The basic usage is:
```handlebars
<div>
  <RPaperTabs @value={{this.tabValue}} @onChange={{this.handleChange}} aria-label="basic tabs example">
    <RPaperTab @value={{0}} @label="Item One" />
    <RPaperTab @value={{1}} @label="Item Two" />
    <RPaperTab @value={{2}} @label="Item Three" />
  </RPaperTabs>
  <RPaperTabPanel  @value={{this.tabValue}} @index={{0}}>Item 1</RPaperTabPanel>
  <RPaperTabPanel  @value={{this.tabValue}} @index={{1}}>Item 2</RPaperTabPanel>
  <RPaperTabPanel  @value={{this.tabValue}} @index={{2}}>Item 3</RPaperTabPanel>
</div>
```

Where `this.handleChange` is:
```angularjs
@tracked tabValue = 0;

@action
handleChange(evt, newValue) {
  this.tabValue = newValue;
}
```

This differs slightly from the [Material-UI Tabs documentation](https://mui.com/components/tabs/).  With `ember-paper-react` `@value` is 
required on the `<RPaperTab/>` component.  It behaves as an index.  

If used as above, only one `RPaperTab` can be used per page because of the `aria-controls` and `id` fields default values.  
If it was desired to have more than one `RPaperTab` component per page, the component could be customized like so:  
```handlebars
<div>
  <RPaperTabs @value={{this.tabValue2}} @onChange={{this.handleChange2}} aria-label="basic tabs example">
    <RPaperTab id="my-tab-0" aria-controls="my-tabpanel-0" @value={{0}} @label="Item One" />
    <RPaperTab id="my-tab-1" aria-controls="my-tabpanel-1" @value={{1}} @label="Item Two" />
    <RPaperTab id="my-tab-2" aria-controls="my-tabpanel-2" @value={{2}} @label="Item Three" />
  </RPaperTabs>
  <RPaperTabPanel id="my-tabpanel-0" aria-labelledby="my-tab-0" @value={{this.tabValue2}} @index={{0}}>Item 1</RPaperTabPanel>
  <RPaperTabPanel id="my-tabpanel-1"  aria-labelledby="my-tab-1" @value={{this.tabValue2}} @index={{1}}>Item 2</RPaperTabPanel>
  <RPaperTabPanel id="my-tabpanel-2"  aria-labelledby="my-tab-2" @value={{this.tabValue2}} @index={{2}}>Item 3</RPaperTabPanel>
</div>
```

This component can also be used to render router links:
```handlebars
<RPaperTabs @value={{this.currentRouteNormalizedName}} @onChange={{this.onTabChanged}} aria-label="tab-controls">
  <RPaperTab @value="nomalizedName1" @label="Content" @href="myroute.link1"/>
  <RPaperTab @value="nomalizedName2" @label="Testimonials" @href="myroute.link2"/>
  <RPaperTab @value="nomalizedName3" @label="Licenses" @href="myroute.link3" />
</RPaperTabs>
<div class="tab-output-area">
  {{outlet}}
</div>
```
## StaticTimePicker
***
[Explore React Material-UI TimePicker docs](https://mui.com/x/react-date-pickers/time-picker/#static-mode)

The most basic usages are:
```handlebars
<RPaperStaticTimePicker @label="Basic Example"
                        @onChange={{this.staticTimePickerOnChange}}
                        @value={{this.staticTimePickerValue}}
                        @adapterLocale={{this.locale}}/>
```
All attributes from `LocalizationProvider` are supported. The attribute `dateAdapter` defaults to using `AdapterMoment`
if not specified in the component.

This component supports validation using the following attributes:
```handlebars
@isTouched - this field will need to be true to display the error messages passed to the next attribute
@errors - this is an array of error validation messages.
```

## TextField
***
[Explore React Material-UI Textfield docs](https://mui.com/components/text-fields/)  

The most basic usage is:
```handlebars
<RPaperTextField @label"My Label" @value={{this.textFieldValue}} @onChange={{this.onTextFieldChanged}}/>
```

Unless `@nativeValue` is set to true, the onChange function will return the value.  If the event object is desired, set `@nativeValue={{true}}`.  

Note: this component can also act as a select component.  When `@select={{true}}` is set, the component will automatically add the object `{native:true}` to the `selectProps` property.  `<option/>` tags are the only supported children of this component.  When functioning as a select, only native mode is currently supported.  
When using the component as a select component, the selected value can be initialized by setting `@value` to the value desired.  `@value` and `@onChange`
must be set so that the select updates when the user changes the value of the select.
```handlebars
@tracked inputTextValue = 'some-initial-value';

<RPaperTextField @label="Filled" @variant="filled" @value={{this.inputTextValue}} @onChange={{this.onInputTextChanged}} @select={{true}}>
  {{#each this.contentList as |contentItem|}}
    <option value="{{contentItem}}">
      {{contentItem}}
    </option>
  {{/each}}
</RPaperTextField>
```
<i>Input Masking</i>
***
The following Components are available
`<RPaperNumberFormatTextField/>` and `<RPaperIMaskTextField/>`

## TextField - IMaskTextField
***
This component uses all of the regular TextField properties as well as that of ReactNumberFormat.  
[Explore iMask Docs](https://imask.js.org/)

The service `inputMaskTypes` is available to predefine masks for this component.
```javascript
export default class TestClass extends Component {
  @service inputMaskTypes

  constructor() {
    super(...arguments);

    const currencyNoDecimalIMask = {
      mask: '$num',
      blocks: {
        num: {
          mask: Number,
          thousandsSeparator: ',',
        },
      },
    };

    const percentageWithDecimalIMask = {
      mask: [
        {
          mask: '',
        },
        {
          mask: 'num %',
          lazy: false,
          blocks: {
            num: {
              mask: Number,
              scale: 3,
              min: 1,
              max: 100,
              radix: '.',
              mapToRadix: [','],
            },
          },
        }
      ]
    };

    this.inputMaskTypes.addIMaskType(
      'currencyNoDecimal',
      currencyNoDecimalIMask
    );

    this.inputMaskTypes.addIMaskType(
      'percentageWithDecimal',
      percentageWithDecimalIMask
    );
  }
}
```
And to use it:
```handlebars
<RPaperIMaskTextField @label="Currency IMask" @maskName="currencyNoDecimal"/>
<RPaperIMaskTextField @label="I Mask Percentage"  @maskName="percentageWithDecimal"/>
```

If `@nativeOnChange={{true}}`:
The onChange function will return the event object.  If `nativeOnChange` is not defined or false, the unmasked value will be returned.  The event object returns the following object a target object with a `value` and `maskedValue`.


## TextField - NumberFormatNumericTextField
***
This component uses all of the regular TextField properties as well as that of ReactNumberFormat Numeric.  
[Explore React Number Format Docs](https://github.com/s-yadav/react-number-format)  

This component will only accept numbers as input.

The service `inputMaskTypes` is available to predefine masks for this component.
```javascript
export default class TestClass extends Component {
  @service inputMaskTypes

  constructor() {
    super(...arguments);

    const currencyNoDecimalNMask = {
      thousandSeparator: true,
      prefix: '$ ',
      decimalScale: 0,
    };

    const percentageWithDecimalNFMask = {
      suffix: ' %',
      decimalScale: 2,
      isAllowed: (value) => {
        return value.floatValue <= 100 || value.value === '';
      },
    };

    this.inputMaskTypes.addNumberFormatNumericType(
      'currencyNoDecimal',
      currencyNoDecimalNMask
    );

    this.inputMaskTypes.addNumberFormatNumericType(
      'percentageWithDecimal',
      percentageWithDecimalNFMask
    );
  }
}
```
And to use it:
```handlebars
<RPaperNumberFormatNumericTextField @label="Regular NMask" @maskName="currencyNoDecimal"/>
<RPaperNumberFormatNumericTextField @label="NF Percent Mask" @maskName="percentageWithDecimal"/>
```

If `@nativeOnChange={{true}}`:
The onChange function will return the event object.  If `nativeOnChange` is not defined or false, the unmasked value will be returned.  The event object returns the following object a target object with a `value` and `maskedValue`.

This component will by default select the entire text area when focus is received.  If this trait is not desired, the attribute `@selectAllOnFocus={{false}}` must be explicitly set.
If `@clearOnFocus={{true}}` then instead of selecting the entire area, the value will be cleared.  If the user does not set a value, the previous value will be restored.

## TextField - NumberFormatPatternTextField
***
This component uses all of the regular TextField properties as well as that of ReactNumberFormat Pattern.  
[Explore React Number Format Docs](https://github.com/s-yadav/react-number-format)

This component will only accept numbers as input.

The service `inputMaskTypes` is available to predefine masks for this component.
```javascript
export default class TestClass extends Component {
  @service inputMaskTypes

  constructor() {
    super(...arguments);

    const myPatternFormat = {
      format: "### ###",
    };

    this.inputMaskTypes.addNumberFormatPatternType(
      'myPattern',
      myPatternFormat
    );
  }
}
```
And to use it:
```handlebars
<RPaperNumberFormatPatternTextField @label="Format Mask" @maskName="myPattern"/>
```

If `@nativeOnChange={{true}}`:
The onChange function will return the event object.  If `nativeOnChange` is not defined or false, the unmasked value will be returned.  The event object returns the following object a target object with a `value` and `maskedValue`.

This component will by default select the entire text area when focus is received.  If this trait is not desired, the attribute `@selectAllOnFocus={{false}}` must be explicitly set.
If `@clearOnFocus={{true}}` then instead of selecting the entire area, the value will be cleared.  If the user does not set a value, the previous value will be restored.

## TimePicker
***
[Explore React Material-UI TimePicker docs](https://mui.com/x/react-date-pickers/time-picker/)

The most basic usages are:
```handlebars
<RPaperTimePicker @label="Basic Example"
                  @onChange={{this.timePickerOnChange}}
                  @value={{this.timePickerValue}}
                  @adapterLocale={{this.locale}}
                  @isTouched={{true}}
                  @errors={{this.errors}}/>
```
All attributes from `LocalizationProvider` are supported. The attribute `dateAdapter` defaults to using `AdapterMoment`
if not specified in the component.

This component supports validation using the following attributes:
```handlebars
@isTouched - this field will need to be true to display the error messages passed to the next attribute
@errors - this is an array of error validation messages.
```

## Tooltip
***
[Explore React Material-UI Tooltip docs](https://mui.com/components/tooltips/)    

The most basic usage is:
```handlebars
<RPaperTooltip @title={{this.myTooltipContent}}>
Hover over me!
</RPaperTooltip>
```   
The `@title` parameter can contain html.



License
==============================================================================

This project is licensed under the [MIT License](LICENSE.md).
