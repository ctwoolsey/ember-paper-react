import { LocalizationProviderPropObj } from '../prop-files/localization-provider-props';

function usesLocale(c){
  class UsesLocale extends c {
    constructor() {
      super(...arguments);
      this.loadLocalizationProviderPropObject()
    }

    loadLocalizationProviderPropObject() {
      Object.assign(this.props, LocalizationProviderPropObj.props());
      Object.assign(this.stateProps, LocalizationProviderPropObj.stateProps());
      Object.assign(this.propsNotForComponent, LocalizationProviderPropObj.propsNotForComponent());
      Object.assign(this.statefulPropsNotForComponent, LocalizationProviderPropObj.statefulPropsNotForComponent());
    }

    initializeProps() {
      this.propsToPass.locale = this.propsToPass.locale || null;
      super.initializeProps();
    }
  }
  return UsesLocale;
}

export { usesLocale }
