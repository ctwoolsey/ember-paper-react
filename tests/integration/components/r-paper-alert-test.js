import { module} from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { RunStandardTests } from "../standard-tests/rendering-tests";

module('Integration | Component | r-paper-alert', function(hooks) {
  setupRenderingTest(hooks);

  RunStandardTests('RPaperAlert');
});

