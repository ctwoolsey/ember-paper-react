import { DivNativeProps } from "./native-global-props/div-native-props";
import { DivNativeStateProps } from "./native-global-props/div-native-props";
import { ButtonStateProps } from "./button-props";

const props = {
  children: null,
  class: '',
  component: null,
  elevation: null,
  square: null,
  sx: null,
  variant: null,
  id: null,
  theme: null,
  ref: null
};

const stateProps = {
  class: '',
  elevation: null,
  square: null,
  sx: null,
  variant: null,
  theme: null
}

const PaperStatePropsArgs = (args) => {
  return {
    class: args.class,
    elevation: args.elevation,
    square: args.square,
    sx: args.sx,
    variant: args.variant,
    theme: args.theme
  }
}

const PaperProps = Object.assign({}, props, DivNativeProps);
const PaperStateProps = Object.assign({}, stateProps, DivNativeStateProps);

const TestArgs = (args) => {
  const argObj = {};
  const paperStatePropsArgs = PaperStateProps;
  for (let propName in paperStatePropsArgs) {
    if (propName !== 'theme') {
      if (Object.prototype.hasOwnProperty.call(paperStatePropsArgs, propName)) {
        /*let proxy = new Proxy(args, {
          get: function(target, prop, receiver) {
            return Reflect.get(...arguments);
          },
          set: function(obj, prop, value) {
            obj[prop] = value;
            return true;
          }
        });*/

        argObj[propName] = args; //proxy;
      }
    }
  }
  return argObj;
}

/*const TestArgs = (args) => {
  let proxy = new Proxy(args,{});
  const argObj = {args: proxy};
  const paperStatePropsArgs = PaperStateProps;
  for (let propName in paperStatePropsArgs) {
    if (propName !== 'theme') {
      if (Object.prototype.hasOwnProperty.call(paperStatePropsArgs, propName)) {
        argObj[propName] = null;
      }
    }
  }
  return argObj;
}*/

export { PaperProps, PaperStateProps, PaperStatePropsArgs, TestArgs }
