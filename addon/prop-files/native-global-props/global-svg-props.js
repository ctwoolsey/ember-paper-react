//https://developer.mozilla.org/en-US/docs/Web/SVG/Element/svg

const props = {
  //Core Attributes
  id: null,
  lang: null,
  tabIndex: null,
  //Styling
  class: null,
  style: null,
  //Conditional Processing Attributes
  requiredExtensions: null,
  requiredFeatures: null,
  systemLanguage: null,
  //Global Event Attributes
  oncancel: null,
  oncanplay: null,
  oncanplaythrough: null,
  onchange: null,
  onclick: null,
  onclose: null,
  oncuechange: null,
  ondblclick: null,
  ondrag: null,
  ondragend: null,
  ondragenter: null,
  ondragleave: null,
  ondragover: null,
  ondragstart: null,
  ondrop: null,
  ondurationchange: null,
  onemptied: null,
  onended: null,
  onerror: null,
  onfocus: null,
  oninput: null,
  oninvalid: null,
  onkeydown: null,
  onkeypress: null,
  onkeyup: null,
  onload: null,
  onloadeddata: null,
  onloadedmetadata: null,
  onloadstart: null,
  onmousedown: null,
  onmouseenter: null,
  onmouseleave: null,
  onmousemove: null,
  onmouseout: null,
  onmouseover: null,
  onmouseup: null,
  onmousewheel: null,
  onpause: null,
  onplay: null,
  onplaying: null,
  onprogress: null,
  onratechange: null,
  onreset: null,
  onresize: null,
  onscroll: null,
  onseeked: null,
  onseeking: null,
  onselect: null,
  onshow: null,
  onstalled: null,
  onsubmit: null,
  onsuspend: null,
  ontimeupdate: null,
  ontoggle: null,
  onvolumechange: null,
  onwaiting: null,
  //Graphical Event Attributes
  onactivate: null,
  onfocusin: null,
  onfocusout: null,
  //Document Event Attributes
  onabort: null,
  onunload: null,
  //Document Element Event Attributes
  oncopy: null,
  oncut: null,
  onpaste: null,
  //Presentation Attributes
  alignmentBaseline: null,
  baselineShift: null,
  clip: null,
  clipPath: null,
  clipRule: null,
  color: null,
  colorInterpolation: null,
  colorInterpolationFilters: null,
  colorProfile: null,
  colorRendering: null,
  cursor: null,
  d: null,
  direction: null,
  display: null,
  dominantBaseline: null,
  enableBackground: null,
  fill: null,
  fillOpacity: null,
  fillRule: null,
  filter: null,
  floodColor: null,
  floodOpacity: null,
  fontFamily: null,
  fontSize: null,
  fontSizeAdjust: null,
  fontStretch: null,
  fontStyle: null,
  fontVariant: null,
  fontWeight: null,
  glyphOrientationHorizontal: null,
  glyphOrientationVertical: null,
  imageRendering: null,
  kerning: null,
  letterSpacing: null,
  lightingColor: null,
  markerEnd: null,
  markerMid: null,
  markerStart: null,
  mask: null,
  opacity: null,
  overflow: null,
  pointerEvents: null,
  shapeRendering: null,
  solidColor: null,
  solidOpacity: null,
  stopColor: null,
  stopOpacity: null,
  stroke: null,
  strokeDasharray: null,
  strokeDashoffset: null,
  strokeLinecap: null,
  strokeLinejoin: null,
  strokeMiterLimit: null,
  strokeOpacity: null,
  strokeWidth: null,
  textAnchor: null,
  textDecoration: null,
  textRendering: null,
  transform: null,
  unicodeBidi: null,
  vectorEffect: null,
  visibility: null,
  wordSpacing: null,
  writingMode: null,
};

const propsNotForComponent = {
}

const stateProps = {
  class: null,
  style: null
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
