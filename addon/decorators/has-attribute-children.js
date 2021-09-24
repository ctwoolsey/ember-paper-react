import { REACT_ATTRIBUTE_COMPONENTS } from "../react-component-lib/constants/constants";

function hasAttributeChildren(c){
  return class HasAttributeChildren extends c {
    constructor() {
      super(...arguments);
      this.reactComponentFragments = {};
    }

    renderAdditionalItems() {
      this.findAndLoadReactAttributeChildren();
      super.renderAdditionalItems && super.renderAdditionalItems();
    }

    findAndLoadReactAttributeChildren() {
      let child = this.el.nextSibling;
      if (this.reactRef.current.componentRef.current) {
        child = this.reactRef.current.componentRef.current.nextSibling;
      }

      while (child && !this.isEndElement(child)) {
        let currentElement = child;
        child = child.nextSibling;
        if (currentElement.className === REACT_ATTRIBUTE_COMPONENTS.CLASS_NAME) {
          child = this.findEndReactAttributeElement(currentElement).nextSibling;
          this.setReactAttributeChildrenFragment(currentElement);
        }
      }
    }

    renderReactAttributeComponent(attributeName, className) {
      const reactComp = this.reactRef.current.componentRef.current;
      if (this.reactComponentFragments[attributeName]) {
        reactComp.getElementsByClassName(className)[0].replaceChildren(this.reactComponentFragments[attributeName]);
      } else {
        if (!this.args[attributeName]) {
          reactComp.getElementsByClassName(className)[0].remove();
        }
      }
    }

    setReactAttributeChildrenFragment(attributeElement) {
      let reactFragment = document.createDocumentFragment();
      let reactAttribute = attributeElement.id;
      let sibling = attributeElement.nextSibling;
      while (sibling.id !== 'end_'+reactAttribute) {
        let currentElement = sibling;
        sibling = sibling.nextSibling;
        reactFragment.appendChild(currentElement);
      }

      if (reactFragment.childNodes.length) {
        this.reactComponentFragments[attributeElement.id] = reactFragment;
      }
      attributeElement.remove();
      sibling.remove();
    }

    findEndReactAttributeElement(attributeElement) {
      let endElement = attributeElement.nextElementSibling;
      while (endElement.id !== 'end_'+attributeElement.id) {
        endElement = endElement.nextElementSibling;
      }

      return endElement;
    }

  }
}

export { hasAttributeChildren }
