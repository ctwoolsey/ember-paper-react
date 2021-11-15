import Tabs from '@mui/material/Tabs';
import { ReactBase } from './base/react-base';
import { TabsPropObj } from '../prop-files/tabs-props';

export class ReactTabs extends ReactBase{
  constructor(props) {
    super(props);
    this.DefaultComponentToRender = Tabs;
    this.initialize(TabsPropObj);
  }
}
