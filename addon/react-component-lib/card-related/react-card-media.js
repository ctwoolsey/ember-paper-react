import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import { ReactBaseWithTheme } from "../base/react-base-with-theme";
import { ReactConditionalThemeProvider } from "../react-conditional-theme-provider";

export class ReactCardMedia extends ReactBaseWithTheme{
  constructor(props) {
    super(props);
    this.state = Object.assign(this.state,
      {
        image: props.image,
        src: props.src,
        title: props.title,
      });

  }

  render() {
    const {
      classString,
      image,
      src,
      sx,
      theme,
      title
    } = this.state;

    return (
      <ReactConditionalThemeProvider theme={theme}>
        <CardMedia
          onClick={this.props.onClick}
          {...(this.props.children ? {children: this.props.children} : {})}
          {...(classString ? {className: classString} : {})}
          {...(this.props.component ? {component: this.props.component} : {})}
          {...(image ? {image: image} : {})}
          {...(src ? {src: src} : {})}
          {...(this.props.id ? {id: this.props.id} : {})}
          {...(sx ? {sx: sx} : {})}
          {...(title ? {title: title} : {})}
          ref={this.componentRef}
        />
      </ReactConditionalThemeProvider>
    );
  }
}
