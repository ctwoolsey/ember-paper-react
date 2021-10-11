import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | test/test-base-ember-paper-react', function(hooks) {
  setupRenderingTest(hooks);

  test('it creates props correctly', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    const service = this.owner.lookup('service:test/component-reference');
    assert.ok(service);
    await render(hbs`<Test::TestBaseEmberPaperReact />`);
    const component = service.component;
    assert.ok(component);

    //assert.equal(component.props.a, 'A');
    assert.ok(Object.prototype.hasOwnProperty.call(component.props,'a'), `props found 'a'`);
    assert.ok(Object.prototype.hasOwnProperty.call(component.props,'b', `props found 'b'`));
    assert.ok(Object.prototype.hasOwnProperty.call(component.props,'c', `props found 'c'`));
    assert.ok(Object.prototype.hasOwnProperty.call(component.props,'d', `props found 'd'`));
    assert.equal(Object.keys(component.props).length, 4, `props length is 4`);

    assert.ok(Object.prototype.hasOwnProperty.call(component.stateProps,'b', `stateProps found 'b'`));
    assert.ok(Object.prototype.hasOwnProperty.call(component.stateProps,'c', `stateProps found 'c'`));
    assert.equal(Object.keys(component.stateProps).length, 2, `stateProps length is 2`);

    assert.ok(Object.prototype.hasOwnProperty.call(component.propsNotForComponent,'e'), `propsNotForComponent found 'e'`);
    assert.equal(Object.keys(component.propsNotForComponent).length, 1, `propsNotForComponent length is 1`);

    assert.ok(Object.prototype.hasOwnProperty.call(component.statefulPropsNotForComponent,'d', `statefulPropsNotForComponent found 'd'`));
    assert.equal(Object.keys(component.statefulPropsNotForComponent).length, 1, `statefulPropsNotForComponent length is 1`);
  });
});
