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
