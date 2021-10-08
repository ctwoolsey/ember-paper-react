function reactMayBelongToReactGroup(c){
  return class  ReactMayBelongToReactGroup extends c {

    initialize(propsObj) {
      super.initialize(propsObj);
      this.initializePropComparison();
    }

    initializePropComparison() {
      //only look at props related to state, normally once props are set they don't change
      //if this component is a child of a group, the props can change without state changing
      this.prevProps = {};
      for(let propName in this.state){
        this.prevProps[propName] = this.state[propName];
      }
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
      for(let propName in this.state) {
        if (this.prevProps[propName] !== nextProps[propName]){
          this.prevProps[propName] = nextProps[propName];
          this.setStateProp(propName, nextProps[propName]);
        }
      }
      return true;
    }

  }
}

export { reactMayBelongToReactGroup }
