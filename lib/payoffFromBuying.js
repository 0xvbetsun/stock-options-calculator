'use strict'

const { OptionType } = require('./enum')

module.exports = (strike, stock, type, premium = 0) => {
  if (type === OptionType.Call) {
    return Math.max(stock - strike, 0) - premium
  }

  return Math.max(strike - stock, 0) - premium
}
