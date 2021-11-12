import Service from '@ember/service';
import Inputmask from "inputmask";

export default class InputMaskService extends Service {
  extendAliases(aliasesToExtend) {
    Inputmask.extendAliases(aliasesToExtend);
  }

  extendDefaults(defaultsToExtend) {
    Inputmask.extendDefaults(defaultsToExtend);
  }

  extendDefinitions(definitionsToExtend) {
    Inputmask.extendDefinitions(definitionsToExtend);
  }
}
