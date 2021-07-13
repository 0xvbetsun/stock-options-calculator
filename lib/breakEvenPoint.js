import { OptionType } from './enum.js'
import { validate } from './validation.js'

const BREAK_EVEN_POINT_SCHEMA = {
  type: 'object',
  required: ['strike'],
  properties: {
    strike: { type: 'number', minimum: 0 },
    premium: { type: 'number', minimum: 0, validate: () => {} }
  }
}

const breakEvenPoint = (option) => (strike, premium = 0) => {
  validate({ strike, premium }, BREAK_EVEN_POINT_SCHEMA)

  return option === OptionType.Call ? strike + premium : strike - premium
}

export const callBreakEvenPoint = breakEvenPoint(OptionType.Call)
export const putBreakEvenPoint = breakEvenPoint(OptionType.Put)
