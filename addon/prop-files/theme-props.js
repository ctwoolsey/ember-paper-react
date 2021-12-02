const props = {
};

const stateProps = {
}

const propsNotForComponent = {
}

const statefulPropsNotForComponent = {
  theme: undefined
}

const ThemeProps = () => {return Object.assign({}, props)};
const ThemeStateProps = () => {return Object.assign({}, stateProps)};
const ThemePropsNotForComponent = () => {return Object.assign({}, propsNotForComponent)};
const ThemeStatePropsNotForComponent = () => {return Object.assign({}, statefulPropsNotForComponent)};


const ThemePropObj = {
  props: ThemeProps,
  stateProps: ThemeStateProps,
  propsNotForComponent: ThemePropsNotForComponent,
  statefulPropsNotForComponent: ThemeStatePropsNotForComponent
}

export { ThemePropObj }
