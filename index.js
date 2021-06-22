'use strict';

module.exports = {
  name: require('./package').name,
  options: {
    babel: {
      plugins: [require.resolve('@babel/plugin-transform-react-jsx'), require.resolve('@babel/plugin-syntax-jsx')]
    }
  },

  included(appOrAddon) {
    let app = appOrAddon.app || appOrAddon;
    this._super.included.apply(this, arguments);

    app.import('node_modules/react/umd/react.development.js');
    app.import('node_modules/react-dom/umd/react-dom.development.js');

  }
};
