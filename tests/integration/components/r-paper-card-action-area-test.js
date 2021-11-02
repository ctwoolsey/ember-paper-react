import { module} from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import {
  TestStandardLocationChangingContent,
  TestStandardLocationDynamicRender,
  TestStandardLocationRender
} from "../standard-tests/rendering-tests";

module('Integration | Component | r-paper-card-action-area', function(hooks) {
  setupRenderingTest(hooks);

  TestStandardLocationRender('RPaperCardActionArea');
  TestStandardLocationDynamicRender('RPaperCardActionArea', 1);
  TestStandardLocationChangingContent('RPaperCardActionArea');
});


