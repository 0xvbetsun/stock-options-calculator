'use strict'

const { test } = require('tap')
const { OptionType } = require('../lib/enum.js')
const payoffFromBuying = require('../lib/payoffFromBuying.js')

test('payoffFromBuying', t => {
  t.plan(2)

  t.test('for `call` option', t => {
    t.plan(4)
    const type = OptionType.Call
    t.test('and `strike` is less than `stock` without `premium`', t => {
      t.plan(1)

      t.equal(payoffFromBuying(1000, 1400, type), 400)
    })

    t.test('and `strike` is less than `stock` with `premium`', t => {
      t.plan(1)

      t.equal(payoffFromBuying(1000, 1400, type, 15), 385)
    })

    t.test('and `strike` is more than `stock` without `premium`', t => {
      t.plan(1)

      t.equal(payoffFromBuying(1500, 1400, type), 0)
    })

    t.test('and `strike` is more than `stock` with `premium`', t => {
      t.plan(1)

      t.equal(payoffFromBuying(1500, 1400, type, 15), -15)
    })
  })

  t.test('for `put` option', t => {
    t.plan(4)
    const type = OptionType.Put

    t.test('and `strike` is less than `stock` without `premium`', t => {
      t.plan(1)

      t.equal(payoffFromBuying(1000, 1400, type), 0)
    })

    t.test('and `strike` is less than `stock` with `premium`', t => {
      t.plan(1)

      t.equal(payoffFromBuying(1000, 1400, type, 15), -15)
    })

    t.test('and `strike` is more than `stock` without `premium`', t => {
      t.plan(1)

      t.equal(payoffFromBuying(1500, 1400, type), 100)
    })

    t.test('and `strike` is more than `stock` with `premium`', t => {
      t.plan(1)

      t.equal(payoffFromBuying(1500, 1400, type, 15), 85)
    })
  })
})
