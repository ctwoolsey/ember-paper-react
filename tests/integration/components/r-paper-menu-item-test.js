import { module} from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import {
  TestStandardLocationChangingContent,
  TestStandardLocationDynamicRender,
  TestStandardLocationRender
} from "../standard-tests/rendering-tests";

module('Integration | Component | r-paper-menu-item', function(hooks) {
  setupRenderingTest(hooks);

  TestStandardLocationRender('RPaperMenuItem');
  TestStandardLocationDynamicRender('RPaperMenuItem', 1);
  TestStandardLocationChangingContent('RPaperMenuItem')
});

