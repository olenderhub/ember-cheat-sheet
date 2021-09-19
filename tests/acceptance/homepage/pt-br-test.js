import { visit } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';

import percySnapshot from '@percy/ember';
import { setupIntl } from 'ember-intl/test-support';

module('Acceptance | Homepage | pt-BR', function (hooks) {
  setupApplicationTest(hooks);
  setupIntl(hooks, 'pt-br');

  // eslint-disable-next-line qunit/require-expect
  test('Percy snapshot', async function (assert) {
    await visit('/');
    await percySnapshot(assert);

    assert.ok(true);
  });

  test('We set the correct lang attribute in <html> element', async function (assert) {
    await visit('/');

    assert
      .dom(document.querySelector('html'))
      .hasAttribute('lang', 'pt-br', 'We set the correct lang attribute.');
  });
});
