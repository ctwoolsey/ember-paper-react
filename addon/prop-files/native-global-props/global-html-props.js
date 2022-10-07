const props = {
  accessKey: undefined,
  autoCapitalize: undefined,
  autoFocus: undefined,
  class: undefined,
  contentEditable: undefined,
  contextMenu: undefined,
  dir: undefined,
  draggable: undefined,
  enterKeyHint: undefined,
  exportParts: undefined,
  hidden: undefined,
  id: undefined,
  inputMode: undefined,
  is: undefined,
  itemId: undefined,
  itemProp: undefined,
  itemRef: undefined,
  itemScope: undefined,
  itemType: undefined,
  lang: undefined,
  nonce: undefined,
  part: undefined,
  role: undefined,
  slot: undefined,
  spellCheck: undefined,
  style: undefined,
  tabIndex: undefined,
  title: undefined,
  translate: undefined,

  //window events
  onAfterPrint: undefined,
  onBeforePrint: undefined,
  onBeforeUnload: undefined,
  onError: undefined,
  onHashChange: undefined,
  onLoad: undefined,
  onMessage: undefined,
  onOffLine: undefined,
  onOnLine: undefined,
  onPageHide: undefined,
  onPageShow: undefined,
  onPopState: undefined,
  onResize: undefined,
  onStorage: undefined,
  onUnload: undefined,
  //form events
  onBlur: undefined,
  onChange: undefined,
  onContextMenu: undefined,
  onFocus: undefined,
  onInput: undefined,
  onInvalid: undefined,
  onReset: undefined,
  onSearch: undefined,
  onSelect: undefined,
  onSubmit: undefined,
  //keyboard events
  onKeyDown: undefined,
  onKeyPress: undefined,
  onKeyUp: undefined,
  //mouse events
  onClick: undefined,
  onDoubleClick: undefined,
  onMouseEnter: undefined,
  onMouseLeave: undefined,
  onMouseDown: undefined,
  onMouseMove: undefined,
  onMouseOut: undefined,
  onMouseOver: undefined,
  onMouseUp: undefined,
  onMouseWheel: undefined,
  onWheel: undefined,
  //drag events
  onDrag: undefined,
  onDragEnd: undefined,
  onDragEnter: undefined,
  onDragLeave: undefined,
  onDragOver: undefined,
  onDragStart: undefined,
  onDrop: undefined,
  onScroll: undefined,
  //clipboard events
  onCopy: undefined,
  onCut: undefined,
  onPaste: undefined,
  //media events
  onAbort: undefined,
  onCancel: undefined,
  onCanPlay: undefined,
  onCanPlayThrough: undefined,
  onCueChange: undefined,
  onDurationChange: undefined,
  onEmptied: undefined,
  onEnded: undefined,
  onLoadedData: undefined,
  onLoadedMetaData: undefined,
  onLoadStart: undefined,
  onPause: undefined,
  onPlay: undefined,
  onPlaying: undefined,
  onProgress: undefined,
  onRateChange: undefined,
  onSeeked: undefined,
  onSeeking: undefined,
  onShow: undefined,
  onSort: undefined,
  onStalled: undefined,
  onSuspend: undefined,
  onTimeUpdate: undefined,
  onVolumeChange: undefined,
  onWaiting: undefined,
  //misc events
  onAutocomplete: undefined,
  onAutocompleteError: undefined,
  onToggle: undefined
};

const propsNotForComponent = {
}

const stateProps = {
  class: undefined,
  style: undefined
}

const statefulPropsNotForComponent = {
}

const GlobalHtmlProps = () => {return Object.assign({}, props)};
const GlobalHtmlStateProps = () => {return Object.assign({}, stateProps)};
const GlobalHtmlPropsNotForComponent = () => {return Object.assign({}, propsNotForComponent)};
const GlobalHtmlStatePropsNotForComponent = () => {return Object.assign({}, statefulPropsNotForComponent)};

const GlobalHtmlPropObj = {
  props: GlobalHtmlProps,
  stateProps: GlobalHtmlStateProps,
  propsNotForComponent: GlobalHtmlPropsNotForComponent,
  statefulPropsNotForComponent: GlobalHtmlStatePropsNotForComponent
}

export { GlobalHtmlPropObj }
