import { test } from 'tap'
import { normalDistribution as N } from '../lib/math.js'

test('Cumulative Distribution Function', t => {
  t.plan(3)

  t.equal(N(0.39), 0.6517, 'positive number that greater than `0`')
  t.equal(N(-0.39), 0.3483, 'positive number that lower than `0`')
  t.equal(N(0), 0.5, 'positive number that equal `0`')
})
