import { test } from 'tap'
import { callBreakEvenPoint, putBreakEvenPoint } from '../lib/breakEvenPoint.js'

test('`call` option', t => {
  t.plan(2)

  t.test('with `premium`', t => {
    t.plan(1)

    t.equal(callBreakEvenPoint(50, 10), 60)
  })

  t.test('without `premium`', t => {
    t.plan(1)

    t.equal(callBreakEvenPoint(50), 50)
  })
})

test('`put` option', t => {
  t.plan(2)

  t.test('with `premium`', t => {
    t.plan(1)

    t.equal(putBreakEvenPoint(50, 10), 40)
  })

  t.test('without `premium`', t => {
    t.plan(1)

    t.equal(putBreakEvenPoint(50), 50)
  })
})

test('throw errors with invalid input', t => {
  t.plan(4)

  t.throws(() => callBreakEvenPoint(-1), new Error('.strike should be >= 0'), 'with `strike` less than allowed')
  t.throws(() => putBreakEvenPoint(-1), new Error('.strike should be >= 0'), 'with `strike` less than allowed')

  t.throws(() => callBreakEvenPoint(1, -1), new Error('.premium should be >= 0'), 'with `premium` less than allowed')
  t.throws(() => putBreakEvenPoint(1, -1), new Error('.premium should be >= 0'), 'with `premium` less than allowed')
})
