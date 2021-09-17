const props = {
};

const propsNotForComponent = {
  reactRenderCallback: null,
  saveChildrenCallback: null
}

const stateProps = {
}

const statefulPropsNotForComponent = {
}

const ChildrenHolderProps = () => { return Object.assign({}, props) };
const ChildrenHolderStateProps = () => {return Object.assign({}, stateProps) };
const ChildrenHolderPropsNotForComponent = () => {return Object.assign({}, propsNotForComponent)};
const ChildrenHolderStatePropsNotForComponent = () => {return Object.assign({}, statefulPropsNotForComponent)};

export { ChildrenHolderProps, ChildrenHolderStateProps, ChildrenHolderPropsNotForComponent, ChildrenHolderStatePropsNotForComponent }
