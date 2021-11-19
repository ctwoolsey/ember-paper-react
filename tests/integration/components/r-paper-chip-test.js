import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import AccessAlarmRounded from '@mui/icons-material/AccessAlarmRounded';
import { render, settled } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { tracked } from "@glimmer/tracking";

module('Integration | Component | r-paper-chip', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders with an icon', async function(assert) {
    this.set('iconToUse', {icon: AccessAlarmRounded});
    await render(hbs`<div><RPaperChip @id='test-me' @icon={{this.iconToUse}} @label="my-chip" /></div>`);

    const testElement = document.getElementById('test-me');
    const labelElement = testElement.querySelector('.MuiChip-label');
    assert.ok(labelElement, `label element found`);
    assert.equal(labelElement.textContent.trim(), 'my-chip');
    const iconElement = testElement.firstElementChild;
    assert.ok(iconElement, `firstElementChild (icon?) exists`);
    assert.equal(iconElement.nodeName, 'svg', `firstElementChild is an icon element`);
    assert.equal(iconElement.dataset.testid, 'AccessAlarmRoundedIcon', `correct icon inserted`);
  });

  test('it renders with an avatar and is dynamic', async function(assert) {
    class MyContext {
      @tracked avatarText = 'W';
      @tracked chipLabel = 'avatar only'
    }
    let ctx = new MyContext();
    this.setProperties({ctx});

    this.set('iconToUse', {icon: AccessAlarmRounded});
    await render(hbs`
                    <div>
                      <RPaperChip @id='test-me' @avatar={{true}} @label={{this.ctx.chipLabel}} >
                        <:avatar><RPaperAvatar>{{this.ctx.avatarText}}</RPaperAvatar></:avatar>
                      </RPaperChip>
                    </div>`);

    const testElement = document.getElementById('test-me');
    const labelElement = testElement.querySelector('.MuiChip-label');
    assert.ok(labelElement, `label element found`);
    assert.equal(labelElement.textContent.trim(), 'avatar only');
    const avatarElement = testElement.querySelector('.ember-paper-react-avatar');
    assert.ok(avatarElement, `avatar element found`);
    assert.equal(avatarElement.textContent.trim(), 'W', `avatar content matches`);

    this.ctx.avatarText = 'N';
    await settled();
    assert.equal(avatarElement.textContent.trim(), 'N', `avatar content matches after update`);

    this.ctx.chipLabel = 'updated label';
    await settled();
    assert.equal(labelElement.textContent.trim(), 'updated label', `label content matches after update`);

  });

  test('it renders icon only when both icon and avatar exist', async function(assert) {
    this.set('iconToUse', {icon: AccessAlarmRounded});

    await render(hbs`
                    <div>
                      <RPaperChip @id='test-me' @avatar={{true}} @icon={{this.iconToUse}} @label='my-chip' >
                        <:avatar><RPaperAvatar>W</RPaperAvatar></:avatar>
                      </RPaperChip>
                    </div>
                 `);

    const testElement = document.getElementById('test-me');
    const labelElement = testElement.querySelector('.MuiChip-label');
    assert.ok(labelElement, `label element found`);
    assert.equal(labelElement.textContent.trim(), 'my-chip');
    const iconElement = testElement.firstElementChild;
    assert.ok(iconElement, `firstElementChild (icon?) exists`);
    assert.equal(iconElement.nodeName, 'svg', `firstElementChild is an icon element`);
    assert.equal(iconElement.dataset.testid, 'AccessAlarmRoundedIcon', `correct icon inserted`);

    const avatarElement = testElement.querySelector('.ember-paper-react-avatar');
    assert.notOk(avatarElement, `avatar element correctly not placed`);
  });

  test('it renders label only when no icon or avatar exist', async function(assert) {
    await render(hbs`
                    <div>
                      <RPaperChip @id='test-me' @label='my-chip' />
                    </div>
                 `);

    const testElement = document.getElementById('test-me');
    const labelElement = testElement.querySelector('.MuiChip-label');
    assert.ok(labelElement, `label element found`);
    assert.equal(labelElement.textContent.trim(), 'my-chip');
    assert.equal(testElement.childElementCount, 1, `only label content was rendered`)
  });

  test('it renders label through attribute node', async function(assert) {
    await render(hbs`
                    <div>
                      <RPaperChip @id='test-me'>
                        <:label>my-chip</:label>
                      </RPaperChip>
                    </div>
                 `);

    const testElement = document.getElementById('test-me');
    const labelElement = testElement.querySelector('.MuiChip-label');
    assert.ok(labelElement, `label element found`);
    assert.equal(labelElement.textContent.trim(), 'my-chip');
    assert.equal(testElement.childElementCount, 1, `only label content was rendered`)
  });
});
