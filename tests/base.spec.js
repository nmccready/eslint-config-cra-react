import test from 'tape';

const base = require('../');

const config = base;

test('does reference react', (t) => {
  t.plan(2);

  // scan plugins for react and fail if it is found
  const hasReactPlugin =
    Object.prototype.hasOwnProperty.call(config, 'plugins') &&
    config.plugins.indexOf('react') !== -1;
  t.notOk(hasReactPlugin, 'there is no react plugin');

  // scan rules for react/ and fail if any exist
  const reactRuleIds = Object.keys(config.rules).filter(
    (ruleId) => ruleId.indexOf('react/') === 0
  );
  t.ok(reactRuleIds.length, 'there are no react/ rules');
});
