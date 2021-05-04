'use strict'

const OptionType = Object.freeze({
  Call: 'CALL',
  Put: 'PUT'
})

const PositionType = Object.freeze({
  Long: 'LONG',
  Short: 'SHORT'
})

module.exports = { OptionType, PositionType }
