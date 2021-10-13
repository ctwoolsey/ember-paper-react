import { module} from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { TestSimpleRender } from "../standard-tests/rendering-tests";

module('Integration | Component | r-paper-radio', function(hooks) {
  setupRenderingTest(hooks);

  TestSimpleRender('RPaperRadio');
});

