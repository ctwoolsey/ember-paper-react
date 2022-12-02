import React from 'react';

function wrapsChildren(c){
  return class WrapsChildren extends c {

    renderComponentChildren(ComponentToRender) {
      return (
        <ComponentToRender
          ref={this.componentRef}
          {...(this.placeStaticProps(this.staticProps))}
          {...(this.placeStateProps(this.statePropsForComponent))}
        >
          <div className='react-wrap-children'>
            {this.renderChildren()}
          </div>
        </ComponentToRender>
      )
    }

  }
}

export { wrapsChildren }
