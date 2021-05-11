import { OptionType, PositionType } from './enum.js'

const payoff = (position) => (option) => (strike, stock, premium = 0) => {
  if (position === PositionType.Long) {
    return (option === OptionType.Call ? Math.max(stock - strike, 0) : Math.max(strike - stock, 0)) - premium
  }
  return premium - (option === OptionType.Call ? Math.max(stock - strike, 0) : Math.max(strike - stock, 0))
}

const payoffFromBuying = payoff(PositionType.Long)
const payoffFromSelling = payoff(PositionType.Short)

export const payoffFromBuyingCall = payoffFromBuying(OptionType.Call)
export const payoffFromBuyingPut = payoffFromBuying(OptionType.Put)
export const payoffFromSellingCall = payoffFromSelling(OptionType.Call)
export const payoffFromSellingPut = payoffFromSelling(OptionType.Put)
