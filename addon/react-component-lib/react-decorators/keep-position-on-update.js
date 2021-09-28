function keepPositionOnUpdate(c){
  return class KeepPositionOnUpdate extends c {
    constructor(props) {
      super(props);
      this.positionMarker = null;
    }

    componentDidUpdate() {
      this.positionMarker?.insertAdjacentElement('afterend', this.componentRef.current);
      this.positionMarker?.remove();
    }

    shouldComponentUpdate() {
      this.positionMarker = document.createElement('div');
      this.componentRef.current.parentElement.insertBefore(this.positionMarker, this.componentRef.current);
      return true;
    }

  }
}

export { keepPositionOnUpdate }
