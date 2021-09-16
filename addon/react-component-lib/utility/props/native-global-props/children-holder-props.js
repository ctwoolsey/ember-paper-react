const props = {
  reactRenderCallback: null,
  saveChildrenCallback: null
};

const stateProps = {
}

const statefulPropsNotForComponent = {
  reactRenderCallback: null,
  saveChildrenCallback: null
}

const ChildrenHolderProps = () => { return Object.assign({}, props) };
const ChildrenHolderStateProps = () => {return Object.assign({}, stateProps) };
const ChildrenHolderPropsNotForComponent = () => {return Object.assign({}, statefulPropsNotForComponent)};

export { ChildrenHolderProps, ChildrenHolderStateProps, ChildrenHolderPropsNotForComponent }
