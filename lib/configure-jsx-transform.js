const VersionChecker = require('ember-cli-version-checker');
const { hasPlugin, addPlugin } = require('ember-cli-babel-plugin-helpers');

function requireTransform(transformName) {
  return require.resolve(transformName);
}

module.exports = function configureJsxTransform(parent) {
  const checker = new VersionChecker(parent).for('ember-cli-babel', 'npm');

  if (checker.gte('7.0.0')) {
    if (!hasPlugin(parent, '@babel/plugin-transform-react-jsx')) {
      addPlugin(parent, require.resolve('@babel/plugin-transform-react-jsx'));
    }
    if (!hasPlugin(parent, '@babel/plugin-syntax-jsx')) {
      addPlugin(parent, require.resolve('@babel/plugin-syntax-jsx'));
    }
    parent.project.ui.writeWarnLine('ember-paper-react: Hello');
  } else {
    parent.project.ui.writeWarnLine(
      'ember-react-components: You are using an unsupported ember-cli-babel version, JSX transforms will not be included automatically'
    );
  }
};
