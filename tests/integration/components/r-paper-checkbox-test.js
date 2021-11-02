import { module} from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { TestSimpleRender } from "../standard-tests/rendering-tests";

module('Integration | Component | r-paper-checkbox', function(hooks) {
  setupRenderingTest(hooks);

  TestSimpleRender('RPaperCheckbox');
});

