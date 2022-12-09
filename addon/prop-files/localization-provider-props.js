
const props = {
  dateAdapter: undefined,
  adapterLocale: undefined,
  dateFormats: undefined,
  dateLibInstance: undefined,
  localeText: undefined,
};

const propsNotForComponent = {
}

const stateProps = {
  adapterLocale: undefined,
  dateFormats: undefined,
  dateLibInstance: undefined,
  localeText: undefined
}

const statefulPropsNotForComponent = {
}

const LocalizationProviderProps = () => { return Object.assign({}, props) };
const LocalizationProviderStateProps = () => {return Object.assign({}, stateProps) };
const LocalizationProviderPropsNotForComponent = () => {return Object.assign({}, propsNotForComponent)};
const LocalizationProviderStatePropsNotForComponent = () => {return Object.assign({}, statefulPropsNotForComponent)};

const LocalizationProviderPropObj = {
  props: LocalizationProviderProps,
  stateProps: LocalizationProviderStateProps,
  propsNotForComponent: LocalizationProviderPropsNotForComponent,
  statefulPropsNotForComponent: LocalizationProviderStatePropsNotForComponent
}

export { LocalizationProviderPropObj }
