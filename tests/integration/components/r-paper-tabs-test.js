import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { tracked } from '@glimmer/tracking';

module('Integration | Component | r-paper-tabs', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    class MyContext {
      @tracked tabValue;
    }

    let ctx = new MyContext();
    this.setProperties({ ctx });

    this.set('handleChange', (evt, newValue) => {
      this.ctx.tabValue = newValue;
    });

  });

  test('it works as expected', async function(assert) {
    await render(hbs`
      <div>
        <RPaperTabs @value={{this.ctx.tabValue}} @onChange={{this.handleChange}} aria-label="basic tabs example">
          <RPaperTab id="my-tab-0" aria-controls="my-tabpanel-0" @value={{0}} @label="Item One" />
          <RPaperTab id="my-tab-1" aria-controls="my-tabpanel-1" @value={{1}} @label="Item Two" />
          <RPaperTab id="my-tab-2" aria-controls="my-tabpanel-2" @value={{2}} @label="Item Three" />
        </RPaperTabs>
        <div id="outputArea">
          <RPaperTabPanel  id="my-tabpanel-0" aria-labelledby="my-tab-0" @value={{this.ctx.tabValue}} @index={{0}}>Item 1</RPaperTabPanel>
          <RPaperTabPanel  id="my-tabpanel-1"  aria-labelledby="my-tab-1" @value={{this.ctx.tabValue}} @index={{1}}>Item 2</RPaperTabPanel>
          <RPaperTabPanel  id="my-tabpanel-2"  aria-labelledby="my-tab-2" @value={{this.ctx.tabValue}} @index={{2}}>Item 3</RPaperTabPanel>
        </div>
      </div>
  `);

    let tabToClick = document.getElementById('my-tab-1');
    await click(tabToClick);

    let tabPanel0 = document.getElementById('my-tabpanel-0');
    assert.true(tabPanel0.hasAttribute('hidden'), 'tabpanel-0 is hidden');
    let tabPanel1 = document.getElementById('my-tabpanel-1');
    assert.false(tabPanel1.hasAttribute('hidden'), 'tabpanel-1 is visible');
    let tabPanel2 = document.getElementById('my-tabpanel-2');
    assert.true(tabPanel2.hasAttribute('hidden'), 'tabpanel-2 is hidden');

    tabToClick = document.getElementById('my-tab-2');
    await click(tabToClick);

    //tabPanel0 = document.getElementById('my-tabpanel-0');
    assert.true(tabPanel0.hasAttribute('hidden'), 'tabpanel-0 is hidden');
    //tabPanel1 = document.getElementById('my-tabpanel-1');
    assert.true(tabPanel1.hasAttribute('hidden'), 'tabpanel-1 is hidden');
    //tabPanel2 = document.getElementById('my-tabpanel-2');
    assert.false(tabPanel2.hasAttribute('hidden'), 'tabpanel-2 is visible');
  });
});

