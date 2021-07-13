import { OptionType, PositionType } from './enum.js'
import { validate } from './validation.js'

const PAYOFF_SCHEMA = {
  type: 'object',
  required: ['stock', 'strike'],
  properties: {
    stock: { type: 'number', minimum: 0 },
    strike: { type: 'number', minimum: 0 },
    premium: { type: 'number', minimum: 0 }
  }
}

const payoff = (position) => (type) => (strike, stock, premium = 0) => {
  validate({ strike, stock, premium }, PAYOFF_SCHEMA)

  if (position === PositionType.Long) {
    return (type === OptionType.Call ? Math.max(stock - strike, 0) : Math.max(strike - stock, 0)) - premium
  }
  return premium - (type === OptionType.Call ? Math.max(stock - strike, 0) : Math.max(strike - stock, 0))
}

const payoffFromBuying = payoff(PositionType.Long)
const payoffFromSelling = payoff(PositionType.Short)

export const payoffFromBuyingCall = payoffFromBuying(OptionType.Call)
export const payoffFromBuyingPut = payoffFromBuying(OptionType.Put)
export const payoffFromSellingCall = payoffFromSelling(OptionType.Call)
export const payoffFromSellingPut = payoffFromSelling(OptionType.Put)
