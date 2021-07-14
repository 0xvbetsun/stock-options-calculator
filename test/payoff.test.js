import { test } from 'tap'
import {
  payoffFromBuyingCall,
  payoffFromBuyingPut,
  payoffFromSellingCall,
  payoffFromSellingPut
} from '../lib/payoff.js'

test('payoff for `call` option in `long` position', t => {
  t.plan(4)

  t.equal(payoffFromBuyingCall(50, 70), 20, 'get profit when `strike` without `premium` is less than `stock`')
  t.equal(payoffFromBuyingCall(50, 70, 10), 10, 'get profit when `strike` with `premium` is less than `stock`')
  t.equal(payoffFromBuyingCall(50, 40), 0, 'get no profit when `strike` without `premium` is more than `stock`')
  t.equal(payoffFromBuyingCall(50, 50, 10), -10, 'get loss when `strike` with `premium` is more than `stock`')
})

test('payoff for `put` option in `long` position', t => {
  t.plan(4)

  t.equal(payoffFromBuyingPut(50, 40), 10, 'get profit when `strike` without `premium` is more than `stock`')
  t.equal(payoffFromBuyingPut(50, 30, 10), 10, 'get profit when `strike` with `premium` is more than `stock`')
  t.equal(payoffFromBuyingPut(50, 60), 0, 'get no profit when `strike` without `premium` is less than `stock`')
  t.equal(payoffFromBuyingPut(50, 70, 10), -10, 'get loss when `strike` with `premium` is less than `stock`')
})

test('payoff for `call` option in `shot` position', t => {
  t.plan(5)

  t.equal(payoffFromSellingCall(50, 40), 0, 'get no profit when `strike` without `premium` is more than `stock`')
  t.equal(payoffFromSellingCall(50, 40, 10), 10, 'get profit when `strike` with `premium` is more than `stock`')
  t.equal(payoffFromSellingCall(50, 60), -10, 'get loss when `strike` without `premium` is less than `stock`')
  t.equal(payoffFromSellingCall(50, 70, 10), -10, 'get loss when `strike` with `premium` is less than `stock`')
  t.equal(payoffFromSellingCall(50, Infinity, 10), -Infinity, 'get infinity loss when `stock` get infinity raise')
})

test('payoff for `put` option in `short` position', t => {
  t.plan(4)

  t.equal(payoffFromSellingPut(50, 40), -10, 'get loss when `strike` without `premium` is less than `stock`')
  t.equal(payoffFromSellingPut(50, 70, 10), 10, 'get profit when `strike` with `premium` is less than `stock`')
  t.equal(payoffFromSellingPut(50, 60), 0, 'get no profit when `strike` without `premium` is less than `stock`')
  t.equal(payoffFromSellingPut(50, 30, 10), -10, 'get loss when `strike` with `premium` is more than `stock`')
})

test('throw errors with invalid input', t => {
  t.plan(12)

  t.throws(() => payoffFromBuyingCall(-1), new Error('.strike should be >= 0'), 'with `strike` less than allowed')
  t.throws(() => payoffFromBuyingPut(-1), new Error('.strike should be >= 0'), 'with `strike` less than allowed')
  t.throws(() => payoffFromSellingCall(-1), new Error('.strike should be >= 0'), 'with `strike` less than allowed')
  t.throws(() => payoffFromSellingPut(-1), new Error('.strike should be >= 0'), 'with `strike` less than allowed')

  t.throws(() => payoffFromBuyingCall(1, -1), new Error('.stock should be >= 0'), 'with `stock` less than allowed')
  t.throws(() => payoffFromBuyingPut(1, -1), new Error('.stock should be >= 0'), 'with `stock` less than allowed')
  t.throws(() => payoffFromSellingCall(1, -1), new Error('.stock should be >= 0'), 'with `stock` less than allowed')
  t.throws(() => payoffFromSellingPut(1, -1), new Error('.stock should be >= 0'), 'with `stock` less than allowed')

  t.throws(() => payoffFromBuyingCall(1, 1, -1), new Error('.premium should be >= 0'), 'with `premium` less than allowed')
  t.throws(() => payoffFromBuyingPut(1, 1, -1), new Error('.premium should be >= 0'), 'with `premium` less than allowed')
  t.throws(() => payoffFromSellingCall(1, 1, -1), new Error('.premium should be >= 0'), 'with `premium` less than allowed')
  t.throws(() => payoffFromSellingPut(1, 1, -1), new Error('.premium should be >= 0'), 'with `premium` less than allowed')
})
