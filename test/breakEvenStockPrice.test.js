'use strict'

const { test } = require('tap')
const { OptionType } = require('../lib/enum.js')
const breakEvenStockPrice = require('../lib/breakEvenStockPrice.js')

test('breakEvenStockPrice', t => {
  t.plan(2)

  t.test('for `call` option', t => {
    t.plan(2)
    const type = OptionType.Call

    t.test('with `premium`', t => {
      t.plan(1)

      t.equal(breakEvenStockPrice(1400, type, 50), 1450)
    })

    t.test('without `premium`', t => {
      t.plan(1)

      t.equal(breakEvenStockPrice(1400, type), 1400)
    })
  })

  t.test('for `put` option', t => {
    t.plan(2)
    const type = OptionType.Put

    t.test('with `premium`', t => {
      t.plan(1)

      t.equal(breakEvenStockPrice(1400, type, 50), 1350)
    })

    t.test('without `premium`', t => {
      t.plan(1)

      t.equal(breakEvenStockPrice(1400, type), 1400)
    })
  })
})
