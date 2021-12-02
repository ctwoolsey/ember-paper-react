const props = {
  accessKey: undefined,
  class: undefined,
  contentEditable: undefined,
  dir: undefined,
  draggable: undefined,
  hidden: undefined,
  id: undefined,
  lang: undefined,
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
  onStalled: undefined,
  onSuspend: undefined,
  onTimeUpdate: undefined,
  onVolumeChange: undefined,
  onWaiting: undefined,
  //misc events
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
