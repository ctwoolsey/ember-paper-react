import React from 'react';
import Card from '@material-ui/core/Card';
import { ReactBaseWithTheme } from '../base/react-base-with-theme';
import { ReactConditionalThemeProvider } from '../react-conditional-theme-provider';

export class ReactCard extends ReactBaseWithTheme{
  constructor(props) {
    super(props);
    this.state = Object.assign(this.state,
      {
        elevation: props.elevation,
        raised: props.raised,
        square: props.square,
        variant: props.variant
      });

  }

  render() {
    const {
      classString,
      elevation,
      raised,
      square,
      sx,
      variant,
      theme
    } = this.state;

    return (
      <ReactConditionalThemeProvider theme={theme}>
        <Card
          onClick={this.props.onClick}
          {...(this.props.children ? {children: this.props.children} : {})}
          {...(classString ? {className: classString} : {})}
          {...(this.props.component ? {component: this.props.component} : {})}
          {...(elevation ? {elevation: elevation} : {})}
          {...(this.props.id ? {id: this.props.id} : {})}
          {...(raised ? {raised: raised} : {})}
          {...(square ? {square: square} : {})}
          {...(sx ? {sx: sx} : {})}
          {...(variant ? {variant: variant} : {})}
          ref={this.componentRef}
        />
      </ReactConditionalThemeProvider>
    );
  }
}
