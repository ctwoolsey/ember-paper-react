import { ReactLabeledCheckRadioSwitch } from './react-labeled-check-radio-switch';
import Radio from '@mui/material/Radio';
import {RadioPropObj} from '../prop-files/radio-props';
import { reactMayBelongToReactGroup } from "../decorators/for-react/react-may-belong-to-react-group";

@reactMayBelongToReactGroup
export class ReactRadio extends ReactLabeledCheckRadioSwitch {
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = Radio;
    this.initialize(RadioPropObj);
  }
}
