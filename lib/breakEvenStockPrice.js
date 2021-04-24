'use strict'

const { OptionType } = require('./enum')

module.exports = (strike, type, premium = 0) => type === OptionType.Call ? strike + premium : strike - premium
