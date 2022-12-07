function usesLocale(c){
  class UsesLocale extends c {
    initializeProps() {
      this.propsToPass.locale = this.propsToPass.locale || null;
      super.initializeProps();
    }
  }
  return UsesLocale;
}

export { usesLocale }
