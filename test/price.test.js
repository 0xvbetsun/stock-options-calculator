import t from 'tap'
import { callPrice, putPrice } from '../lib/price.js'

const { test, only } = t

const buildBlackScholesInput = ({ strike = 58, stock = 60, interestRate = 0.035, volatility = 0.2, timeToExpire = 0.5, dividend } = {}) => ({
  strike,
  stock,
  interestRate,
  volatility,
  timeToExpire,
  dividend
})

only('price for `call` option', t => {
  t.plan(2)

  t.equal(callPrice(buildBlackScholesInput({ dividend: 0.0125 })), 4.7704, 'return correct price with `dividend`')
  t.equal(callPrice(buildBlackScholesInput()), 5.0171, 'return correct price without `dividend`')
})

test('price for `put` option', t => {
  t.plan(2)

  t.equal(putPrice(buildBlackScholesInput({ dividend: 0.0125 })), 2.138, 'return correct price with `dividend')
  t.equal(putPrice(buildBlackScholesInput()), 2.0109, 'return correct price without `dividend')
})

test('throw errors with invalid `Black-Scholes Input`', t => {
  t.plan(20)

  t.throws(() => callPrice({}), new Error('should have required property \'stock\',  should have required property \'strike\',  should have required property \'interestRate\',  should have required property \'volatility\',  should have required property \'timeToExpire\''), 'with empty input')
  t.throws(() => putPrice({}), new Error('should have required property \'stock\',  should have required property \'strike\',  should have required property \'interestRate\',  should have required property \'volatility\',  should have required property \'timeToExpire\''), 'with empty input')

  t.throws(() => callPrice(buildBlackScholesInput({ stock: -1 })), new Error('.stock should be >= 0'), 'with `stock` less than allowed')
  t.throws(() => putPrice(buildBlackScholesInput({ stock: -1 })), new Error('.stock should be >= 0'), 'with `stock` less than allowed')

  t.throws(() => callPrice(buildBlackScholesInput({ strike: -1 })), new Error('.strike should be >= 0'), 'with `strike` less than allowed')
  t.throws(() => putPrice(buildBlackScholesInput({ strike: -1 })), new Error('.strike should be >= 0'), 'with `strike` less than allowed')

  t.throws(() => callPrice(buildBlackScholesInput({ interestRate: -1 })), new Error('.interestRate should be >= 0'), 'with `interestRate` less than allowed')
  t.throws(() => putPrice(buildBlackScholesInput({ interestRate: -1 })), new Error('.interestRate should be >= 0'), 'with `interestRate` less than allowed')
  t.throws(() => callPrice(buildBlackScholesInput({ interestRate: 2 })), new Error('.interestRate should be <= 1'), 'with `interestRate` greater than allowed')
  t.throws(() => putPrice(buildBlackScholesInput({ interestRate: 2 })), new Error('.interestRate should be <= 1'), 'with `interestRate` greater than allowed')

  t.throws(() => callPrice(buildBlackScholesInput({ volatility: -1 })), new Error('.volatility should be >= 0'), 'with `volatility` less than allowed')
  t.throws(() => putPrice(buildBlackScholesInput({ volatility: -1 })), new Error('.volatility should be >= 0'), 'with `volatility` less than allowed')
  t.throws(() => callPrice(buildBlackScholesInput({ volatility: 2 })), new Error('.volatility should be <= 1'), 'with `volatility` greater than allowed')
  t.throws(() => putPrice(buildBlackScholesInput({ volatility: 2 })), new Error('.volatility should be <= 1'), 'with `volatility` greater than allowed')

  t.throws(() => callPrice(buildBlackScholesInput({ timeToExpire: -1 })), new Error('.timeToExpire should be >= 0'), 'with `timeToExpire` less than allowed')
  t.throws(() => putPrice(buildBlackScholesInput({ timeToExpire: -1 })), new Error('.timeToExpire should be >= 0'), 'with `timeToExpire` less than allowed')

  t.throws(() => callPrice(buildBlackScholesInput({ dividend: -1 })), new Error('.dividend should be >= 0'), 'with `dividend` less than allowed')
  t.throws(() => putPrice(buildBlackScholesInput({ dividend: -1 })), new Error('.dividend should be >= 0'), 'with `dividend` less than allowed')
  t.throws(() => callPrice(buildBlackScholesInput({ dividend: 2 })), new Error('.dividend should be <= 1'), 'with `dividend` greater than allowed')
  t.throws(() => putPrice(buildBlackScholesInput({ dividend: 2 })), new Error('.dividend should be <= 1'), 'with `dividend` greater than allowed')
})
