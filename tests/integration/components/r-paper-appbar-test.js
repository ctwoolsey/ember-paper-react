import { module} from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { TestStandardLocationRender, TestStandardLocationDynamicRender } from "../standard-tests/rendering-tests";

module('Integration | Component | r-paper-appbar', function(hooks) {
  setupRenderingTest(hooks);

  TestStandardLocationRender('RPaperAppbar');
  TestStandardLocationDynamicRender('RPaperAppbar');
});

