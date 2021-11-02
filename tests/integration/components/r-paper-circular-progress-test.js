import { module} from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { TestSimpleRender } from "../standard-tests/rendering-tests";

module('Integration | Component | r-paper-circular-progress', function(hooks) {
  setupRenderingTest(hooks);

  TestSimpleRender('RPaperCircularProgress');
});


