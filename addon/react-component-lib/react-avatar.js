import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { ReactBaseWithTheme } from "./base/react-base-with-theme";
import { ReactConditionalThemeProvider } from "./react-conditional-theme-provider";

export class ReactAvatar extends ReactBaseWithTheme{
  constructor(props) {
    super(props);
    this.state = Object.assign(this.state,
      {
        imgProps: props.imgProps,
        sizes: props.sizes,
        src: props.src,
        srcSet: props.srcSet,
        variant: props.variant
      });
  }

  render() {
    const {
      classString,
      imgProps,
      sizes,
      src,
      srcSet,
      sx,
      variant,
      theme
    } = this.state;

    return (
      <ReactConditionalThemeProvider theme={theme}>
        <Avatar
          {...(this.props.alt ? {alt: this.props.alt} : {})}
          {...(classString ? {className: classString} : {})}
          {...(this.props.children ? {children: this.props.children} : {})}
          {...(this.props.component ? {component: this.props.component} : {})}
          {...(this.props.id ? {id: this.props.id} : {})}
          {...(imgProps ? {imgProps: imgProps} : {})}
          {...(sizes ? {sizes: sizes} : {})}
          {...(src ? {src: src} : {})}
          {...(srcSet ? {srcSet: srcSet} : {})}
          {...(sx ? {sx: sx} : {})}
          {...(variant ? {variant: variant} : {})}
          ref={this.componentRef}
        />
      </ReactConditionalThemeProvider>
    );
  }
}
