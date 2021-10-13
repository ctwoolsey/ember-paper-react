'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function (defaults) {
  let app = new EmberAddon(defaults, {
    babel: {
      plugins: ['@babel/plugin-transform-react-jsx', '@babel/plugin-syntax-jsx']
    },
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  app.import({
    development: 'node_modules/react/umd/react.development.js',
    production: 'node_modules/react/umd/react.production.min.js'
  });

  app.import({
    development: 'node_modules/react-dom/umd/react-dom.development.js',
    production: 'node_modules/react-dom/umd/react-dom.production.min.js'
  });

  app.import('vendor/ember/ember-template-compiler.js');

  const { maybeEmbroider } = require('@embroider/test-setup');
  return maybeEmbroider(app);
};
