const props = {
  accessKey: null,
  class: null,
  contentEditable: null,
  dir: null,
  draggable: null,
  hidden: null,
  id: null,
  lang: null,
  spellCheck: null,
  style: null,
  tabIndex: null,
  title: null,
  translate: null,

  //window events
  onAfterPrint: null,
  onBeforePrint: null,
  onBeforeUnload: null,
  onError: null,
  onHashChange: null,
  onLoad: null,
  onMessage: null,
  onOffLine: null,
  onOnLine: null,
  onPageHide: null,
  onPageShow: null,
  onPopState: null,
  onResize: null,
  onStorage: null,
  onUnload: null,
  //form events
  onBlur: null,
  onChange: null,
  onContextMenu: null,
  onFocus: null,
  onInput: null,
  onInvalid: null,
  onReset: null,
  onSearch: null,
  onSelect: null,
  onSubmit: null,
  //keyboard events
  onKeyDown: null,
  onKeyPress: null,
  onKeyUp: null,
  //mouse events
  onClick: null,
  onDoubleClick: null,
  onMouseDown: null,
  onMouseMove: null,
  onMouseOut: null,
  onMouseOver: null,
  onMouseUp: null,
  onMouseWheel: null,
  onWheel: null,
  //drag events
  onDrag: null,
  onDragEnd: null,
  onDragEnter: null,
  onDragLeave: null,
  onDragOver: null,
  onDragStart: null,
  onDrop: null,
  onScroll: null,
  //clipboard events
  onCopy: null,
  onCut: null,
  onPaste: null,
  //media events
  onAbort: null,
  onCanPlay: null,
  onCanPlayThrough: null,
  onCueChange: null,
  onDurationChange: null,
  onEmptied: null,
  onEnded: null,
  onLoadedData: null,
  onLoadedMetaData: null,
  onLoadStart: null,
  onPause: null,
  onPlay: null,
  onPlaying: null,
  onProgress: null,
  onRateChange: null,
  onSeeked: null,
  onSeeking: null,
  onStalled: null,
  onSuspend: null,
  onTimeUpdate: null,
  onVolumeChange: null,
  onWaiting: null,
  //misc events
  onToggle: null
};

const stateProps = {
  class: null,
  style: null
}

const GlobalHtmlProps = () => {return Object.assign({}, props)};
const GlobalHtmlStateProps = () => {return Object.assign({}, stateProps)};

export { GlobalHtmlProps, GlobalHtmlStateProps }
