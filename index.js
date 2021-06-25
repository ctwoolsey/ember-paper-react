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

    app.import({
      development: 'node_modules/react/umd/react.development.js',
      production: 'node_modules/react/umd/react.production.min.js'
    });

    app.import({
      development: 'node_modules/react-dom/umd/react-dom.development.js',
      production: 'node_modules/react-dom/umd/react-dom.production.min.js'
    });

  }
};
