const props = {
  children: null,
  classString: '',
  component: null,
  elevation: null,
  square: null,
  sx: null,
  variant: null,
  id: null,
  theme: null,
  ref: null
};

const PaperProps = Object.assign({}, props);

const PaperStateProps = {
  classString: '',
  elevation: null,
  square: null,
  sx: null,
  variant: null,
  theme: null
}

export { PaperProps, PaperStateProps }
