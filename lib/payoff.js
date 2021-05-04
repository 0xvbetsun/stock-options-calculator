'use strict'

const { OptionType, PositionType } = require('./enum')

const payoff = (position) => (option) => (strike, stock, premium = 0) => {
  if (position === PositionType.Long) {
    return (option === OptionType.Call ? Math.max(stock - strike, 0) : Math.max(strike - stock, 0)) - premium
  }
  return premium - (option === OptionType.Call ? Math.max(stock - strike, 0) : Math.max(strike - stock, 0))
}

const payoffFromBuying = payoff(PositionType.Long)
const payoffFromSelling = payoff(PositionType.Short)

module.exports = {
  payoffFromBuyingCall: payoffFromBuying(OptionType.Call),
  payoffFromBuyingPut: payoffFromBuying(OptionType.Put),
  payoffFromSellingCall: payoffFromSelling(OptionType.Call),
  payoffFromSellingPut: payoffFromSelling(OptionType.Put)
}
