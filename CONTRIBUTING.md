# How To Contribute

## Installation

* `git clone <repository-url>`
* `cd ember-paper-react`
* `npm install`

## Linting

* `npm run lint`
* `npm run lint:fix`

## Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

## Generating Basic Component
* `ember g r-paper <dasherized-react-component-name>`  
If the react component is IconButton the use: `icon-button`.  
This will generate the following files:
  * `addon/components/r-paper-icon-button.hbs`
  * `addon/components/r-paper-icon-button.js`
  * `addon/prop-files/icon-button-props.js`
  * `addon/react-component-lib/react-icon-button.js`
  * `addon/constants/icon-button.js`  
  * `app/components/r-paper-icon-button.js`
  * `tests/integration/components/r-paper-icon-button-test.js`



## Understanding Rendering
The issue to overcome is that React wants its children to be react children.
Take for example the following Ember code:
```angular2html
<RPaperDialogActions>
    <RPaperButton>Cancel</RPaperButton>
</RPaperDialogActions>
```
```<RPaperDialogActions>``` and ```<RPaperButton>``` are separate ember components but the button needs to be a 
child of the dialog action component.  Additionally, the `Cancel` text is a child of the button.

While some of the rendering problems can be solved similar to how the decorators `react-group` and `may-belong-to-react-group`
operate, This is not practical since not all children will be React Material-UI components.  

`<RPaperButton>` will be inserted and rendered first and then `<RPaperDialogActions>` will be rendered and copy the React
children into the React representation of `<RPaperDialogActions>`.

All items need to be inserted before `rendering/assembly` takes place.  To achieve this, a `renderStack` is used.  (In reality
the `renderStack` is really used as a `queue`.)

React attaches events to the parent container, so by creating a portal and then rendering,
the element is not placed into this r-paper-button, but at the end of the parent of r-paper-button.
For inspiration:
https://stackoverflow.com/questions/30686796/react-render-replace-container-instead-of-inserting-into/58385910#58385910

#Creating Prop File
There are four objects:
* props - these are the props as defined by the material-ui specification
* propsNotForComponent - user defined props has added and may be used in the react component file but will not
  be added to the actual material react component.
* stateProps - properties from the material-ui component that the user would like to be stateful (i.e. react to changes from ember)
* statefulPropsNotForComponent - user defined props that the user would like to react to changes from ember

This is done so that `props` in the prop file will stay pure to what was defined in the specification.
`stateProps` will duplicate what is in the `props` section as it just calls out what should be stateful. 
`propsNotForComponent` should generally be unique as should `statefulPropsNotForComponent`.  There are exceptions for 
example when there is a prop and you want to react to changes on it but not at the react component level.  Look at the `avatarGroup`
for an example.  Because children are added to the avatarGroup in a non react way, the `avatarGroup` component is unable to control
the children, so ember needs to intercept these components.  

the method `initializeProps` combines `propsNotForComponent` and `statefulPropsNotForComponent` into `this.props` for sending to the React Component.

## Ember Render Types
***
There are two base classes Ember React Components are based on. `base-emeber-paper-react` or `base-in-element-render`.
The later inherits from the former.

### base-ember-paper-react
This is the base class upon which all elements `Ember Paper React` elements are rendered.  
  
1. Elements are inserted on the DOM  
   1. Props for the react element are initialized
   2. Element is added to Ember's render stack (elaborate more)
   3. React component is created and added to DOM
2. Elements are "rendered"  
   1. React Element is moved into correct position on DOM
   2. Hooks for rendering customization are called.  
      1. renderChildren - allows customization of where children get inserted
      2. doneRendering - if rendering needs to happen on ember's `afterRender` lifestyle hook.
   3. HTML not associated with React's generated HTML is removed from DOM
  
Components that directly use this class are components that don't have children. Examples ( `RPaperCircularProgress`,
`RPaperRadio`).  This can include components that only have `Attribute Node Children` (`RPaperChip`, `RPaperAutocomplete`).

The template for this type of a component without `Attribute Node Children` will look like this:
```angular2html
<span class={{this.componentType}} ...attributes
  {{ember-paper-reactable this.inserted this.changeReactState this.changeArgs}}
></span>
```
  
### base-in-element-render
This is the base class for elements that have children.  It inherits from `base-ember-paper-react`.  Most components
use this base class.  

It modifies the base class by:
1. Moving the children off of the viewable DOM into a fragment
2. When the component is rendered, it moves the children into the React Element's children.

The template for this type of a component will look like this:
```angular2html
<span class={{this.componentType}} ...attributes
  {{ember-paper-reactable this.inserted this.changeReactState this.changeArgs}}
>
  {{#in-element this.moveLocation}}
    {{yield}}
  {{/in-element}}
</span>
```
As the name implies, the template uses Ember's `in-element` helper.  This has the advantage of:  
1. No wrapping of component children
2. Support dynamic ember code like `{{each}}` as direct children.  

## Enhanced render types
Decorators are used for enhancing the existing render types.  
### has-attribute-node-children
>Note, that even though "icon" attributes by definition should return a react Icon, attribute-node-children are not needed.
> All icon attributes take a javascript object of the format: {icon: ..., iconProps: ...} instead of using attribute-node-children.

Sometimes a React component will have an attribute that should be a ReactNode.  This decorator is added so that the Ember 
Application does not have to use React and also to preserve the functionality and advantages of using Ember.
In the main Ember application `named block content` can be used. So for `<RPaperCardHeader>` which has an avatar node,
an avatar can be used like so:  
```angular2html
<RPaperCardHeader>
  <:avatar><RPaperAvatar>Y</RPaperAvatar></:avatar>
</RPaperCardHeader>
```
The library component will have the following template:
```angular2html
<span class={{this.componentType}} ...attributes
  {{ember-paper-reactable this.inserted this.changeReactState this.changeArgs}}
>
  {{#if (has-block 'avatar')}}
    <AttributeNodeChild class="react=component avatar" @attribute="avatar" @loadAttributeInfo={{this.loadAttributeInfo}}>{{yield to='avatar'}}</AttributeNodeChild>
  {{/if}}
</span>
```
The Ember component will need to define one method: ```onRenderAttributeNodeChildren()```  
This method needs to place the Attribute Node into the correct spot in the React Component.  This can be done like so:
```angular2html
onRenderAttributeNodeChildren() {
  const reactComp = this.reactRef.current.componentRef.current;
  const moveMethod = this.getAttributeMoveMethod('avatar');
  if (moveMethod) {
    moveMethod(reactComp.getElementsByClassName('MuiCardHeader-avatar')[0]);
  }
}
```
An advanced variation usage of this can be found in `r-paper-autocomplete.js`.  Autocomplete uses attribute nodes, but
does not render/place them immediately.  To facilitate this, `has-attribute-node-children`  provides the move method used
to move the children as well as the fragment where the children are stored.

### protect-children-from-react-destruction
Sometimes, when an attribute changes or react used a presentation portal (with dialogs and drawers) react will re-render
the component.  Since children that react knows nothing about have been placed inside the React component, 
these children will be destroyed.  

This decorator adds callbacks that trigger React to save the children to a fragment and then when it loads again, pull
the children from the fragment.

If special placement is needed, the Ember component can override `reactRender(insertElement)` similar to how `RPaperButton`
does.

### render-later
This decorator incorporates the `protect-children-from-react-destruction` decorator.  Some components render
their children into a portal and are not displayed immediately.  It will keep children from being
rendered into a non-existant element.  By using with the `protect-children-from-react-destruction` decorator, when the 
React element is ready to display the children, the children will be rendered correctly.

`renderLater()` can be overridden to provide custom rendering as in `RPaperDrawer`.  

### react-group & may-belong-to-react-group  
Certain React components are groups and exercise control over their children only if they are created with those children.
The children cannot be added after their creation.  These types of groups should be decorated with `@reactGroup`.  Some examples
are: `<RPaperRadioGroup>` and `<RPaperAvatarGroup>`  Their children must be React Material-UI children.  These children can 
be part of the Group or they can stand alone on their own.  Thus they get decorated with: `@mayBelongToReactGroup`.

The group requires a template of the form:
```angular2html
<span class={{this.componentType}} data-group-identifier={{this.groupIdentifier}} ...attributes
  {{ember-paper-reactable this.inserted this.changeReactState this.changeArgs}}
>{{yield}}</span>
```

## Render Helpers/Enhancers
The following decorators add capabilities to components and simplify the code.

### overrride-href
If a component like `<RPaperButton>` uses an `href` attribute it will break react's routing.  React requires `<LinkTo>`
or `TransitionTo`.  Placing an `@overrideHref` decorator on `RPaperButton` converts the `href` into a `TransitionTo` usage.

### use-input-mask
If a component has an input and uses an `inputRef`, using `@useInputMask` will allow add certain `input mask` attributes
on the component. The following link is to the input mask library used: [inputmask](https://github.com/RobinHerbots/Inputmask/)

To use the mask feature the following attributes become available (only `@mask` is required):
* `@mask` - In the `inputmask` documentation this is the object or string that is input into the `Inputmask()` initializer.
* `@maskDefaults`
* `@maskDefinitions`
* `@maskAliases`  
  
This will also automatically update the change handler so that the method will return the `event` and `unmasked value`.
If no `@mask` is defined, the change handler will only return the `event`.

## Understanding the React Side
Part of the magic of ember is that arguments that change can update the component.  In React this is done by changing 
`state`. The modifier `ember-paper-reactable` links the two.  An ember `arg` change will trigger a `state` change if 
it should trigger a `state` change as defined by the component `prop` files.

All react components are derived from `react-base.js`.  This base code, initializes props, determines which ones should
be assigned to state vs static props etc.  Rendering is also defined here.  Should the component be wrapped with `theme`
or should it have children?

This allows the majority of React components to be very simple.  Each component needs to pass the actual React Material-UI
component to the base and call the initialze method with the component specific `prop` file.

Occasionally a component like `Autocomplete` may need to override the generic render method.

