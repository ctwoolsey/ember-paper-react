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

##Updated Rendering Section
Principles:
* Want all items inserted onto DOM
  * all items are inserted into DOM in a flat manner and React items are at the bottom of the DOM
  * HTML for component uses a structure of a thow away 'span' where all change args and attributes get attached initially
  * On most components there is a child span so that ember functionality will work inside of {{each}} loops.
  * There is an end identifier span, to help copy all children.  ??? Is this really needed if we use a child span now?
* Once that is done, do rendering.  Hence using a render stack.  Items are usually rendered in the order they were added, so more of a queue than a stack.
* There is a renderLaterStack (true stack) This should be used for React components which have other react elements as their children. This allows the children to render first. And then be added to the parent.

Rendering Default:
* move React element from bottom of DOM to be a sibling of the current ember component
* clone Attributes and styles from component throw away 'span' and put it on the react element
* Render children into the react item
* Render additional Items (??Need to explain this??)
* remove ember el (removes throw away span)
* call an after Render method (??Need to explain this??)
* remove child end marker
* render next item in renderStack (queue)
* some children need to handle {{each}} loops so we use inline #in-element to move the children, Can I refactor and remove the other children methods?

##Understanding Rendering
The issue to overcome is that React wants its children to be react children.
Take for example the following Ember code:
```angular2html
<RPaperDialogActions>
    <RPaperButton>Cancel</RPaperButton>
</RPaperDialogActions>
```
```<RPaperDialogActions>``` and ```<RPaperButton>``` are separate ember components but the button needs to be a child of the dialog action component.  Additionally the Cancel Text is a child of the button.

When ember renders this, it will insert ```<RPaperDialogActions>``` first. But the button won't be assembled yet.

To get over this, a ```renderStack is used```.  When a no children of a ember-react component are found, then the renderStack will reverse the rendering order even though all components have been inserted.
The ```@action inserted``` is defined in the ```base-react-ember``` and then each individual component calls the base ```inserted``` method.  Within this base method the component is examined to see if it should start the rendering sequence of events.

A base ```render``` method is called which covers the most common render cases.  The re-arranging of the ember and react components occurs here.  If special needs are determined for children or child insertion points, the base method can be overridden in the component.

A special use case occurs in component which move in and off of the DOM like a ```dialog``` component.  The dialog does not initially present any insertion points when it is created.  Therefore, special callbacks must be used to insert the children when the component is displayed and then also pull the children into a ```DOMFragment``` before the component will disappear.  The cycle continues when the react component re-mounts and the children must be re-added.
These callbacks can be seen by examining the ```react-dialog.js``` code.

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

## Render Types
***

### in-element  
 uses:
1. Allows no wrapping of component children
2. Allows children to support dynamic ember code like `{{each}}`
> * extend from: BaseInElementRender  
> * place rendering code in component file 
> ```angular2html
> renderElement() {
>   ~your code here~
>   set this.moveLocation = <some HTML element>
>   super.renderElement();
> }
> ```
> * follow this form in template
> ```angular2html
> {{#if this.canRenderChildren}}
>    {{#in-element this.moveLocation}}
>      {{yield}}
>    {{/in-element}}
> {{/if}}
> ```
>> Examples: r-paper-menu & r-paper-text-field
 


