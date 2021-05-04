'use strict'

const test = require('tap').test
const { OptionType } = require('../lib/enum.js')
const breakEvenStockPrice = require('../lib/breakEvenStockPrice.js')

test('`call` option', t => {
  t.plan(2)
  const type = OptionType.Call

  t.test('with `premium`', t => {
    t.plan(1)

    t.equal(breakEvenStockPrice(50, type, 10), 60)
  })

  t.test('without `premium`', t => {
    t.plan(1)

    t.equal(breakEvenStockPrice(50, type), 50)
  })
})

test('`put` option', t => {
  t.plan(2)
  const type = OptionType.Put

  t.test('with `premium`', t => {
    t.plan(1)

    t.equal(breakEvenStockPrice(50, type, 10), 40)
  })

  t.test('without `premium`', t => {
    t.plan(1)

    t.equal(breakEvenStockPrice(50, type), 50)
  })
})
