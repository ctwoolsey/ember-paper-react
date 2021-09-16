import { PaperProps, PaperStateProps, PaperPropsNotForComponent } from './paper-props';

const props = {
  children: null,
  classes: null,
  color: null,
  enableColorOnDark: null,
  position: null,
  sx: null,
  ref: null
};

const stateProps = {
  color: null,
  position: null,
  sx: null
}

const statefulPropsNotForComponent = {
  theme: null
}

const AppbarProps = () => { return Object.assign({}, PaperProps(), props) };
const AppbarStateProps = () => {return Object.assign({}, PaperStateProps(), stateProps) };
const AppbarPropsNotForComponent = () => {return Object.assign({}, PaperPropsNotForComponent(), statefulPropsNotForComponent)};

export { AppbarProps, AppbarStateProps, AppbarPropsNotForComponent }
