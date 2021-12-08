import { strict as assert } from 'assert'

export const validateBreakEvenPoint = (strike, premium) => {
  assert(typeof strike === 'number', Error('.strike should be a number'))
  assert(strike >= 0, Error('.strike should be >= 0'))

  assert(typeof premium === 'number', Error('.premium should be a number'))
  assert(premium >= 0, Error('.premium should be >= 0'))
}

export const validatePayoff = (strike, stock, premium) => {
  assert(typeof strike === 'number', Error('.strike should be a number'))
  assert(strike >= 0, Error('.strike should be >= 0'))

  assert(typeof stock === 'number', Error('.stock should be a number'))
  assert(stock >= 0, Error('.stock should be >= 0'))

  assert(typeof premium === 'number', Error('.premium should be a number'))
  assert(premium >= 0, Error('.premium should be >= 0'))
}

export const validateBlackScholes = ({ stock, strike, interestRate, volatility, timeToExpire, dividend = 0 }) => {
  assert(stock && strike && interestRate && volatility && timeToExpire, Error('should have required property \'stock\',  should have required property \'strike\',  should have required property \'interestRate\',  should have required property \'volatility\',  should have required property \'timeToExpire\''))

  assert(typeof stock === 'number', Error('.stock should be a number'))
  assert(stock >= 0, Error('.stock should be >= 0'))

  assert(typeof strike === 'number', Error('.strike should be a number'))
  assert(strike >= 0, Error('.strike should be >= 0'))

  assert(typeof interestRate === 'number', Error('.interestRate should be a number'))
  assert(interestRate >= 0, Error('.interestRate should be >= 0'))
  assert(interestRate <= 1, Error('.interestRate should be <= 1'))

  assert(typeof volatility === 'number', Error('.volatility should be a number'))
  assert(volatility >= 0, Error('.volatility should be >= 0'))
  assert(volatility <= 1, Error('.volatility should be <= 1'))

  assert(typeof timeToExpire === 'number', Error('.timeToExpire should be a number'))
  assert(timeToExpire >= 0, Error('.timeToExpire should be >= 0'))

  assert(typeof dividend === 'number', Error('.dividend should be a number'))
  assert(dividend >= 0, Error('.dividend should be >= 0'))
  assert(dividend <= 1, Error('.dividend should be <= 1'))
}
