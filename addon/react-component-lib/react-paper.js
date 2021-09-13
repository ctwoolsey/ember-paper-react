import Paper from '@material-ui/core/Paper';
import { ReactBase } from "./base/react-base";
import { PaperStateProps } from "./utility/props/paper-props";

export class ReactPaper extends ReactBase{
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = Paper;
    this.initialize(PaperStateProps())
    this.addedEmberChildren = false;
  }
}
