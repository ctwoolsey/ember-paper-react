import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, settled, fillIn } from '@ember/test-helpers';
import { A } from '@ember/array';
import { next } from '@ember/runloop';
import { TestSimpleRender } from "../standard-tests/rendering-tests";
import { hbs } from 'ember-cli-htmlbars';
import { tracked } from "@glimmer/tracking";
import { act, fireEvent } from '@testing-library/react';
import { TEXT_FIELD } from 'ember-paper-react/constants/text-field';

module('Integration | Component | r-paper-text-field', function(hooks) {
  setupRenderingTest(hooks);

  TestSimpleRender('RPaperTextField');

  test('it displays the correct text value', async function(assert) {

    await render(hbs`
      <RPaperTextField @id="test-me" @value="some-value" />
    `);

    next(this, function() {
      const testElement = document.getElementById('test-me');
      assert.equal(testElement.nodeName, 'INPUT', `element type is not an 'input'`);
      assert.equal(testElement.value, 'some-value', `input value did not equal passed value`);
    });
  });

  test('it displays the select correctly', async function(assert) {
    class MyContext {
      @tracked contentList = A(['A', 'B', 'C']);
    }
    let ctx = new MyContext();
    this.setProperties({ctx});

    await render(hbs`
      <div>
        <RPaperTextField @id="test-me" @select={{true}}  @value="B" >
          {{#each this.ctx.contentList as |contentItem|}}
            <option value="{{contentItem}}">
              {{contentItem}}
            </option>
          {{/each}}
        </RPaperTextField>
      </div>
    `);

    let testElement = null;
    next(this, function() {
      testElement = document.getElementById('test-me');
      assert.equal(testElement.nodeName, 'SELECT', `element type is not an 'select'`);
      assert.equal(testElement.options.length, 3, `option count for select does not match`);
      assert.equal(testElement.options[testElement.selectedIndex].text, 'B', `select value did not equal passed value`);
    });
    await settled();
    this.ctx.contentList = A(['A', 'B', 'C', 'D']);
    await settled();
    assert.equal(testElement.options.length, 4, `option count for select does not match after add update`);
    await settled();
    this.ctx.contentList = A(['A', 'B']);
    await settled();
    assert.equal(testElement.options.length, 2, `option count for select does not match after removal update`);
  });

  test('using native onChange returns the event object', async function(assert) {
    class MyContext {
      @tracked textValue = null;
      @tracked evtObj = null;
    }
    let ctx = new MyContext();
    this.setProperties({ctx});

    this.set('onInputTextChanged', (evt) => {
      this.ctx.textValue = evt.target.value;
    });


    await render(hbs`
      <div>
        <RPaperTextField @id="test-me" @nativeOnChange={{true}} @onChange={{this.onInputTextChanged}} />
      </div>
    `);

    next(this, async function() {
      const testElement = document.getElementById('test-me');
      assert.equal(testElement.nodeName, 'INPUT', `element is an 'input'`);
      act(() => {
        testElement.focus();
        fireEvent.change(document.activeElement, {target: {value: 'bc5555'}});
      });
      assert.equal(this.ctx.textValue, 'bc5555', `text value is what it should be: 'bc5555'`);
    });

  });

  test('using onChange returns the value object', async function(assert) {
    class MyContext {
      @tracked textValue = null;
      @tracked evtObj = null;
    }
    let ctx = new MyContext();
    this.setProperties({ctx});

    this.set('onInputTextChanged', (value) => {
      this.ctx.textValue = value;
    });


    await render(hbs`
      <div>
        <RPaperTextField @id="test-me" @onChange={{this.onInputTextChanged}} />
      </div>
    `);

    next(this, async function() {
      const testElement = document.getElementById('test-me');
      assert.equal(testElement.nodeName, 'INPUT', `element is an 'input'`);
      act(() => {
        testElement.focus();
        fireEvent.change(document.activeElement, {target: {value: 'bc5555'}});
      });
      assert.equal(this.ctx.textValue, 'bc5555', `text value is what it should be: 'bc5555'`);
    });

  });

  test('displays validation errors correctly', async function(assert) {
    class MyContext {
      @tracked isTouched = false;
      @tracked errors = '';
    }
    let ctx = new MyContext();
    this.setProperties({ctx});


    await render(hbs`
      <div>
        <RPaperTextField @id="test-me" @isTouched={{this.ctx.isTouched}} @errors={{this.ctx.errors}} />
      </div>
    `);

    let testElement = null;
    let parentElement = null;
    let errorElement = null;

    testElement = document.getElementById('test-me');
    assert.equal(testElement.nodeName, 'INPUT', `element is an 'input'`);
    parentElement = testElement.parentElement.parentElement;
    errorElement = parentElement.querySelector(`.${TEXT_FIELD.ERROR_CLASS}.${TEXT_FIELD.HELPER_CLASS}`);
    assert.notOk(errorElement, 'error element does not exist');
    this.ctx.isTouched = true;
    await settled();

    errorElement = parentElement.querySelector(`.${TEXT_FIELD.ERROR_CLASS}.${TEXT_FIELD.HELPER_CLASS}`);
    assert.notOk(errorElement, 'error element does not exist');

    this.ctx.errors = ['has errors'];
    await settled();

    next(this, async function() {
      testElement = document.getElementById('test-me');
      parentElement = testElement.parentElement.parentElement;
      errorElement = parentElement.querySelector(`.${TEXT_FIELD.ERROR_CLASS}.${TEXT_FIELD.HELPER_CLASS}`);
      assert.ok(errorElement, 'error element exists');
      assert.equal(errorElement.textContent, 'has errors', 'textValue is filled in correctly');
    });
  });
});


