import { test } from 'tap'
import { callPrice, putPrice } from '../lib/price.js'

const BlackScholesInput = {
  strike: 58,
  stock: 60,
  interestRate: 0.035,
  volatility: 0.2,
  timeToExpire: 0.5,
  dividend: 0.0125
}
test('price for `call` option', t => {
  t.plan(1)

  t.equal(callPrice(BlackScholesInput), 4.7704, 'return correct price')
})

test('price for `put` option', t => {
  t.plan(1)

  t.equal(putPrice(BlackScholesInput), 2.138, 'return correct price')
})
