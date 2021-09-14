const props = {
};

const stateProps = {
}

const statefulPropsNotForComponent = {
  theme: null
}

const ThemeProps = () => {return Object.assign({}, props)};
const ThemeStateProps = () => {return Object.assign({}, stateProps)};
const ThemePropsNotForComponent = () => {return Object.assign({}, statefulPropsNotForComponent)};


export { ThemeProps, ThemeStateProps, ThemePropsNotForComponent }
