import { OptionType } from './enum.js'

const breakEvenPoint = (option) => (strike, premium = 0) => option === OptionType.Call ? strike + premium : strike - premium

export const callBreakEvenPoint = breakEvenPoint(OptionType.Call)
export const putBreakEvenPoint = breakEvenPoint(OptionType.Put)
