'use strict';
const path = require('path');
const resolve = require('resolve');
const BroccoliMergeTrees = require('broccoli-merge-trees');
const writeFile = require('broccoli-file-creator');
const Funnel = require('broccoli-funnel');


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
      development: require.resolve('react/umd/react.development.js'),
      production: require.resolve('react/umd/react.production.min.js')
    });

    app.import({
      development: require.resolve('react-dom/umd/react-dom.development.js'),
      production: require.resolve('react-dom/umd/react-dom.production.min.js')
    });

  },

  /*  ///////////////////////////////
      Below is copied and modified from ember-paper so that the layout mechanism from
      ember-paper can be re-used
      ////////////////////////////// */

  /*
    Rely on the `resolve` package to mimic node's resolve algorithm.
    It finds the angular-material-source module in a manner that works for npm 2.x,
    3.x, and yarn in both the addon itself and projects that depend on this addon.

    This is an edge case b/c angular-material-source does not have a main
    module we can require.resolve through node itself and similarily ember-cli
    does not have such a hack for the same reason.

    tl;dr - We want the non built scss files, and b/c this dep is only provided via
    git, we use this hack. Please change it if you read this and know a better way.
  */
  pathBase(packageName) {
    return path.dirname(resolve.sync(`${packageName}/package.json`, { basedir: __dirname }));
  },

  treeForStyles(tree) {
    let coreScssFiles = [
      // core styles
      'core/style/mixins.scss',  //only needed for '@mixin rtl-prop' from style/layout.scss
      'core/style/variables.scss',
      'core/style/layout.scss',
      'core/services/layout/layout.scss',

    ];

    let angularScssFiles = new Funnel(this.pathBase('angular-material-styles'), {
      files: coreScssFiles,
      srcDir: '/src',
      destDir: 'angular-material',
      annotation: 'AngularScssFunnel'
    });

    let importer = writeFile(
      'ember-paper-react.scss',
      coreScssFiles.map((path) => `@import './angular-material/${path}';`).join('\n')
    );

    //tree seems to be undefined so this has been modified from ember-paper
    let mergedTrees = null;
    if (tree) {
      mergedTrees = new BroccoliMergeTrees([angularScssFiles, importer, tree], { overwrite: true });
    } else {
      mergedTrees = new BroccoliMergeTrees([angularScssFiles, importer], { overwrite: true });
    }

    return this._super.treeForStyles(mergedTrees);
  },
};
