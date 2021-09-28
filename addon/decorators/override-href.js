import { inject as service } from '@ember/service';
import { action } from '@ember/object';

function overrideHref(c){
  return class OverrideHref extends c {
    @service router;

    initializeProps() {
      super.initializeProps();
      if (this.args.href) {
        this.propsToPass.onClick = this.overrideHrefHandler;
      }
    }

    @action
    overrideHrefHandler(event) {
      this.args.onClick && this.args.onClick(event);
      let useReactHref = false;
      try {
        !event.defaultPrevented && this.router.transitionTo(this.args.href);
      } catch {
        useReactHref = true;
      }
      !useReactHref && event.preventDefault();
    }

  }
}

export { overrideHref }
