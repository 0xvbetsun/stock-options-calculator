import { OptionType } from './enum.js'
import { validateBreakEvenPoint } from './validation.js'

const breakEvenPoint = (option) => (strike, premium = 0) => {
  validateBreakEvenPoint(strike, premium)

  return option === OptionType.Call ? strike + premium : strike - premium
}

export const callBreakEvenPoint = breakEvenPoint(OptionType.Call)
export const putBreakEvenPoint = breakEvenPoint(OptionType.Put)
