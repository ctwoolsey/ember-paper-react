import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import AccessAlarmRounded from '@mui/icons-material/AccessAlarmRounded';
import AcUnit from '@mui/icons-material/AcUnit';
import { tracked } from "@glimmer/tracking";

module('Integration | Component | r-paper-icon', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders native react Icon', async function(assert) {
    class MyContext {
      @tracked reactIcon = AccessAlarmRounded;
    }
    let ctx = new MyContext();
    this.setProperties({ctx});

    await render(hbs`
      <div>
        <RPaperIcon @id='test-me' @reactIcon={{this.ctx.reactIcon}}/>
      </div>
    `);

    let testElement = document.getElementById('test-me');
    assert.ok(testElement, `found icon`);
    assert.equal(testElement.dataset.testid, 'AccessAlarmRoundedIcon', `correct icon found initially`);

    this.ctx.reactIcon = AcUnit;
    await settled();
    testElement = document.getElementById('test-me');
    assert.equal(testElement.dataset.testid, 'AcUnitIcon', `correct icon found after icon update`);
  });

  test('it renders google Icon', async function(assert) {
    class MyContext {
      @tracked googleIconName = 'add_circle';
    }
    let ctx = new MyContext();
    this.setProperties({ctx});

    await render(hbs`
      <div>
        <RPaperIcon @id='test-me' @baseClassName="material-icons-two-tone" @iconName={{this.ctx.googleIconName}}/>
      </div>
    `);

    let testElement = document.getElementById('test-me');
    assert.ok(testElement, `found icon`);
    assert.equal(testElement.textContent.trim(), 'add_circle', `correct icon found after icon update`);

    this.ctx.googleIconName = 'description';
    await settled();
    testElement = document.getElementById('test-me');
    assert.equal(testElement.textContent.trim(), 'description', `correct icon found after icon update`);
  });

  test('it renders font awesome icon', async function(assert) {
    class MyContext {
      @tracked fontAwesomeIconName = 'fa-award';
    }
    let ctx = new MyContext();
    this.setProperties({ctx});

    await render(hbs`
      <div>
        <RPaperIcon @id='test-me' @baseClassName="fas" @class={{this.ctx.fontAwesomeIconName}} />
      </div>
    `);

    let testElement = document.getElementById('test-me');
    assert.ok(testElement, `found icon`);
    assert.true(testElement.className.includes('fa-award'), `correct icon found`);

    this.ctx.fontAwesomeIconName = 'fa-baby';
    await settled();
    testElement = document.getElementById('test-me');
    assert.true(testElement.className.includes('fa-baby'), `correct icon found after icon update`);
  });

  test('it renders svg icon from path', async function(assert) {

    this.set('pathData', 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z');
    await render(hbs`
      <div>
        <RPaperIcon @id='test-me' @hasPath={{true}}>
          <path d={{this.pathData}} />
        </RPaperIcon>
      </div>
    `);

    let testElement = document.getElementById('test-me');
    assert.ok(testElement, `found icon`);
    assert.equal(testElement.nodeName, 'svg', `icon element is svg`);
    assert.equal(testElement.firstElementChild.nodeName, 'path', `icon element has path`);
    assert.equal(testElement.firstElementChild.getAttribute('d'), this.pathData, `icon path data matches`);

  });
});
