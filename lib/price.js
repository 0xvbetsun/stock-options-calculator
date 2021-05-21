import { roundFour, normalDistribution as N } from './math.js'

const exercisedProbability = ({ stock, strike, interestRate, dividend, volatility, timeToExpire }) =>
  (Math.log(stock / strike) + (interestRate - dividend + (volatility ** 2) / 2) * timeToExpire) / (volatility * Math.sqrt(timeToExpire))

const notExercisedProbability = (d1, volatility, timeToExpire) => d1 - volatility * Math.sqrt(timeToExpire)

export const callPrice = ({ stock, strike, interestRate, dividend, volatility, timeToExpire }) => {
  const d1 = exercisedProbability({ stock, strike, interestRate, dividend, volatility, timeToExpire })
  const d2 = notExercisedProbability(d1, volatility, timeToExpire)

  return roundFour(stock * Math.E ** (-dividend * timeToExpire) * N(d1) - strike * Math.E ** (-interestRate * timeToExpire) * N(d2))
}

export const putPrice = ({ stock, strike, interestRate, dividend, volatility, timeToExpire }) => {
  const d1 = exercisedProbability({ stock, strike, interestRate, dividend, volatility, timeToExpire })
  const d2 = notExercisedProbability(d1, volatility, timeToExpire)

  return roundFour(strike * Math.E ** (-interestRate * timeToExpire) * N(-d2) - stock * Math.E ** (-dividend * timeToExpire) * N(-d1))
}
