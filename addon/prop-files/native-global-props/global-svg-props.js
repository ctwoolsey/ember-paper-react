//https://developer.mozilla.org/en-US/docs/Web/SVG/Element/svg

const props = {
  //Core Attributes
  id: undefined,
  lang: undefined,
  tabIndex: undefined,
  //Styling
  class: undefined,
  style: undefined,
  //Conditional Processing Attributes
  requiredExtensions: undefined,
  requiredFeatures: undefined,
  systemLanguage: undefined,
  //Global Event Attributes
  oncancel: undefined,
  oncanplay: undefined,
  oncanplaythrough: undefined,
  onchange: undefined,
  onclick: undefined,
  onclose: undefined,
  oncuechange: undefined,
  ondblclick: undefined,
  ondrag: undefined,
  ondragend: undefined,
  ondragenter: undefined,
  ondragleave: undefined,
  ondragover: undefined,
  ondragstart: undefined,
  ondrop: undefined,
  ondurationchange: undefined,
  onemptied: undefined,
  onended: undefined,
  onerror: undefined,
  onfocus: undefined,
  oninput: undefined,
  oninvalid: undefined,
  onkeydown: undefined,
  onkeypress: undefined,
  onkeyup: undefined,
  onload: undefined,
  onloadeddata: undefined,
  onloadedmetadata: undefined,
  onloadstart: undefined,
  onmousedown: undefined,
  onmouseenter: undefined,
  onmouseleave: undefined,
  onmousemove: undefined,
  onmouseout: undefined,
  onmouseover: undefined,
  onmouseup: undefined,
  onmousewheel: undefined,
  onpause: undefined,
  onplay: undefined,
  onplaying: undefined,
  onprogress: undefined,
  onratechange: undefined,
  onreset: undefined,
  onresize: undefined,
  onscroll: undefined,
  onseeked: undefined,
  onseeking: undefined,
  onselect: undefined,
  onshow: undefined,
  onstalled: undefined,
  onsubmit: undefined,
  onsuspend: undefined,
  ontimeupdate: undefined,
  ontoggle: undefined,
  onvolumechange: undefined,
  onwaiting: undefined,
  //Graphical Event Attributes
  onactivate: undefined,
  onfocusin: undefined,
  onfocusout: undefined,
  //Document Event Attributes
  onabort: undefined,
  onunload: undefined,
  //Document Element Event Attributes
  oncopy: undefined,
  oncut: undefined,
  onpaste: undefined,
  //Presentation Attributes
  alignmentBaseline: undefined,
  baselineShift: undefined,
  clip: undefined,
  clipPath: undefined,
  clipRule: undefined,
  color: undefined,
  colorInterpolation: undefined,
  colorInterpolationFilters: undefined,
  colorProfile: undefined,
  colorRendering: undefined,
  cursor: undefined,
  d: undefined,
  direction: undefined,
  display: undefined,
  dominantBaseline: undefined,
  enableBackground: undefined,
  fill: undefined,
  fillOpacity: undefined,
  fillRule: undefined,
  filter: undefined,
  floodColor: undefined,
  floodOpacity: undefined,
  fontFamily: undefined,
  fontSize: undefined,
  fontSizeAdjust: undefined,
  fontStretch: undefined,
  fontStyle: undefined,
  fontVariant: undefined,
  fontWeight: undefined,
  glyphOrientationHorizontal: undefined,
  glyphOrientationVertical: undefined,
  imageRendering: undefined,
  kerning: undefined,
  letterSpacing: undefined,
  lightingColor: undefined,
  markerEnd: undefined,
  markerMid: undefined,
  markerStart: undefined,
  mask: undefined,
  opacity: undefined,
  overflow: undefined,
  pointerEvents: undefined,
  shapeRendering: undefined,
  solidColor: undefined,
  solidOpacity: undefined,
  stopColor: undefined,
  stopOpacity: undefined,
  stroke: undefined,
  strokeDasharray: undefined,
  strokeDashoffset: undefined,
  strokeLinecap: undefined,
  strokeLinejoin: undefined,
  strokeMiterLimit: undefined,
  strokeOpacity: undefined,
  strokeWidth: undefined,
  textAnchor: undefined,
  textDecoration: undefined,
  textRendering: undefined,
  transform: undefined,
  unicodeBidi: undefined,
  vectorEffect: undefined,
  visibility: undefined,
  wordSpacing: undefined,
  writingMode: undefined,
};

const propsNotForComponent = {
}

const stateProps = {
  class: undefined,
  style: undefined
}

const statefulPropsNotForComponent = {

}

const GlobalSvgProps = () => {return Object.assign({}, props)};
const GlobalSvgStateProps = () => {return Object.assign({}, stateProps)};
const GlobalSvgPropsNotForComponent = () => {return Object.assign({}, propsNotForComponent)};
const GlobalSvgStatePropsNotForComponent = () => {return Object.assign({}, statefulPropsNotForComponent)};

const GlobalSvgPropObj = {
  props: GlobalSvgProps,
  stateProps: GlobalSvgStateProps,
  propsNotForComponent: GlobalSvgPropsNotForComponent,
  statefulPropsNotForComponent: GlobalSvgStatePropsNotForComponent
}

export { GlobalSvgPropObj }
