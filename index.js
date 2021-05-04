'use strict'

const breakEvenStockPrice = require('./lib/breakEvenStockPrice')
const { PositionType, OptionType } = require('./lib/enum')
const {
  payoffFromBuyingCall,
  payoffFromBuyingPut,
  payoffFromSellingCall,
  payoffFromSellingPut
} = require('./lib/payoff')

module.exports = {
  breakEvenStockPrice,
  payoffFromBuyingCall,
  payoffFromBuyingPut,
  payoffFromSellingCall,
  payoffFromSellingPut,
  PositionType,
  OptionType
}
