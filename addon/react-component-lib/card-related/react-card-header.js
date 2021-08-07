import React from 'react';
import CardHeader from '@material-ui/core/CardHeader';
import { ReactBaseWithTheme } from "../base/react-base-with-theme";
import { ReactConditionalThemeProvider } from "../react-conditional-theme-provider";
import Avatar from '@material-ui/core/Avatar';

export class ReactCardHeader extends ReactBaseWithTheme{
  constructor(props) {
    super(props);
    this.state = Object.assign(this.state,
      {
        action: props.action,
        avatar: props.avatar,
        subheader: props.subheader,
        subheaderTypographyProps: props.subheaderTypographyProps,
        title: props.title,
        titleTypographyProps: props.titleTypographyProps
      });
  }

  componentDidMount() {
    console.log('header mounted');
    this.props.renderAttributeComponents();
  }

  //need to figure out how to use the action  it is another React Element like a Button and avatar
  //maybe mark up a yield area where the component will just be placed?
  render() {
    const {
      action,
      avatar,
      classString,
      subheader,
      subheaderTypographyProps,
      sx,
      title,
      titleTypographyProps,
      theme
    } = this.state;

    return (
      <ReactConditionalThemeProvider theme={theme}>
        <CardHeader
          onClick={this.props.onClick}
          {...(action ? {action: action} : {})}
          avatar={<Avatar>Dummy</Avatar>}
          {...(classString ? {className: classString} : {})}
          {...(this.props.component ? {component: this.props.component} : {})}
          {...(this.props.disableTypography ? {disableTypography: this.props.disableTypography} : {})}
          {...(subheader ? {subheader: subheader} : {})}
          {...(subheaderTypographyProps ? {subheaderTypographyProps: subheaderTypographyProps} : {})}
          {...(this.props.id ? {id: this.props.id} : {})}
          {...(sx ? {sx: sx} : {})}
          {...(title ? {title: title} : {})}
          {...(titleTypographyProps ? {titleTypographyProps: titleTypographyProps} : {})}
          ref={this.componentRef}
        />
      </ReactConditionalThemeProvider>
    );
  }
}
