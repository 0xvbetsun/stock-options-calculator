import { OptionType } from './enum.js'
import { normalDistribution as N, roundFour } from './math.js'
import { validate } from './validation.js'

const BLACK_SCHOLES_SCHEMA = {
  type: 'object',
  required: ['stock', 'strike', 'interestRate', 'volatility', 'timeToExpire'],
  properties: {
    stock: { type: 'number', minimum: 0 },
    strike: { type: 'number', minimum: 0 },
    interestRate: { type: 'number', minimum: 0, maximum: 1 },
    volatility: { type: 'number', minimum: 0, maximum: 1 },
    timeToExpire: { type: 'number', minimum: 0 },
    dividend: { type: 'number', minimum: 0, maximum: 1, default: 0 }
  }
}

const exercisedProbability = (blackScholesInput) => {
  const { stock, strike, interestRate, dividend, volatility, timeToExpire } = blackScholesInput

  return (Math.log(stock / strike) + (interestRate - dividend + (volatility ** 2) / 2) * timeToExpire) / (volatility * Math.sqrt(timeToExpire))
}

const notExercisedProbability = ({ volatility, timeToExpire }, d1) => d1 - volatility * Math.sqrt(timeToExpire)

const countCall = (blackScholesInput, d1, d2) => {
  const { stock, strike, interestRate, timeToExpire, dividend } = blackScholesInput

  return roundFour(stock * Math.E ** (-dividend * timeToExpire) * N(d1) - strike * Math.E ** (-interestRate * timeToExpire) * N(d2))
}

const countPut = (blackScholesInput, d1, d2) => {
  const { stock, strike, interestRate, timeToExpire, dividend } = blackScholesInput

  return roundFour(strike * Math.E ** (-interestRate * timeToExpire) * N(-d2) - stock * Math.E ** (-dividend * timeToExpire) * N(-d1))
}

const price = (type) => (blackScholesInput) => {
  validate(blackScholesInput, BLACK_SCHOLES_SCHEMA)

  const d1 = exercisedProbability(blackScholesInput)
  const d2 = notExercisedProbability(blackScholesInput, d1)

  return type === OptionType.Call ? countCall(blackScholesInput, d1, d2) : countPut(blackScholesInput, d1, d2)
}

export const callPrice = price(OptionType.Call)
export const putPrice = price(OptionType.Put)
