import { OptionType } from './enum.js'

export default (strike, type, premium = 0) => type === OptionType.Call ? strike + premium : strike - premium
