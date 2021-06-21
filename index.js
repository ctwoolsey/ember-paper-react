'use strict';

const configureJsxTransform = require('./lib/configure-jsx-transform');
const addJsxExtensionSupport = require('./lib/add-jsx-extension-support');
const { hasPlugin, addPlugin } = require('ember-cli-babel-plugin-helpers');

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

   /* app.import('vendor/shims/react.js');
    app.import('vendor/shims/react-dom.js');*/

    //configureJsxTransform(app);
    /*if (!hasPlugin(appOrAddon, '@babel/plugin-transform-react-jsx')) {
      addPlugin(appOrAddon, require.resolve('@babel/plugin-transform-react-jsx'));
      appOrAddon.project.ui.writeInfoLine('ember-paper-react: added plugin-transform-react-jsx')
    }
     if (!hasPlugin(appOrAddon, '@babel/plugin-syntax-jsx')) {
      addPlugin(appOrAddon, require.resolve('@babel/plugin-syntax-jsx'));
      appOrAddon.project.ui.writeInfoLine('ember-paper-react: added @babel/plugin-syntax-jsx')
    }
    appOrAddon.project.ui.writeInfoLine('finished checking plugins')

    if (appOrAddon.options['ember-cli-babel']['extensions']) {
      appOrAddon.project.ui.writeInfoLine('has extensions')
      if (!appOrAddon.options['ember-cli-babel']['extensions'].includes('js')) {
        appOrAddon.project.ui.writeInfoLine('did not have js extension')
        appOrAddon.options['ember-cli-babel']['extensions'].push('js');
      }
      if (!appOrAddon.options['ember-cli-babel']['extensions'].includes('jsx')) {
        appOrAddon.project.ui.writeInfoLine('did not have jsx extension')
        appOrAddon.options['ember-cli-babel']['extensions'].push('jsx');
      }
    } else {
      appOrAddon.project.ui.writeInfoLine('added js and jsx extension')
      appOrAddon.options['ember-cli-babel']['extensions'] = ['js', 'jsx'];
    }
    appOrAddon.project.ui.writeInfoLine('finished checking extensions')*/
    //addJsxExtensionSupport(app);
  }
};
