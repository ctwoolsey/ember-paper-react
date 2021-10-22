'use strict';

module.exports = {
  description: 'Creates an ember-paper-react component based on the common base-in-element-render',

  locals(options) {
    // Return custom template variables here
    const name = options.entity.name; //name should be in kebab case (dasherized)
    const camelCase = () => {
      return name.toLowerCase().replace(/-(.)/g, function(match, group1) {
        return group1.toUpperCase();
      });
    };

    const pascalCase = () => {
      const camelCaseString = camelCase();
      return `${camelCaseString[0].toUpperCase()}${camelCaseString.slice(1)}`;
    }

    return ({
              kebabCase: name,
              pascalCase: pascalCase(),
              capitalize: name.replace(/-/g,'').toUpperCase(),
              snakeCase: name.replace(/-/g,'_').toUpperCase()
           });
  }
};
