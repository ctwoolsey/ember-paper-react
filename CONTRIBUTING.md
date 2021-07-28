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


##Understanding Rendering
The issue to overcome is that React wants its children to be react children.
Take for example the following Ember code:
```angular2html
<RPaperDialogActions>
    <RPaperButton>Cancel</RPaperButton>
</RPaperDialogActions>
```
```<RPaperDialogActions>``` and ```<RPaperButton>``` are separate ember components but the button needs to be a child of the dialog action component.  Additionally the Cancel Text is a child of the button.

When ember renders this, it will insert ```<RPaperDialogActions>``` first. But the button wont be assembled yet.

To get over this, a ```renderStack is used```.  When a no children of a ember-react component are found, then the renderStack will reverse the rendering order even though all components have been inserted.
The ```@action inserted``` is defined in the ```base-react-ember``` and then each individual component calls the base ```inserted``` method.  Within this base method the component is examined to see if it should start the rendering sequence of events.

A base ```render``` method is called which covers the most common render cases.  The re-arranging of the ember and react components occurs here.  If special needs are determined for children or child insertion points, the base method can be overridden in the component.

A special use case occurs in component which move in and off of the DOM like a ```dialog``` component.  The dialog does not initially present any insertion points when it is created.  Therefore, special callbacks must be used to insert the children when the component is displayed and then also pull the children into a ```DOMFragment``` before the component will disappear.  The cycle continues when the react component re-mounts and the children must be re-added.
These callbacks can be seen by examining the ```react-dialog.js``` code.
