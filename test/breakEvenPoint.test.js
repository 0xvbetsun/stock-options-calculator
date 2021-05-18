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
