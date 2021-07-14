# 📉 Stock Options Calculator 📈

![CI](https://github.com/VBetsun/stock-options-calculator/workflows/CI/badge.svg)
[![Known Vulnerabilities](https://snyk.io/test/github/VBetsun/stock-options-calculator/badge.svg)](https://snyk.io/test/github/VBetsun/stock-options-calculator)
[![Coverage Status](https://coveralls.io/repos/github/VBetsun/stock-options-calculator/badge.svg?branch=main)](https://coveralls.io/github/VBetsun/stock-options-calculator?branch=main)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)

## Table of Contents

  - [Install](#install)
  - [Usage](#usage)
  - [License](#license)
  
## Install

```sh
npm i stock-options-calculator
```

## Usage

### Find break even point

### Count payoff

#### Arguments

  | Argument | Type    | Description                                       |
  |----------|---------|---------------------------------------------------|
  | strike   | number  | strike price ($$$ per share)                      |
  | stock    | number  | underlying price ($$$ per share)                  |
  | premium  | number? | current market price of an option ($$$ per share) |

- From buying call option
  
  #### Returns
  `number` - payoff from buying call ($$$ per share)
  #### Example

  ```js
  const { payoffFromBuyingCall } = require('stock-options-calculator')

  payoffFromBuyingCall(50, 70) // returns 20
  payoffFromBuyingCall(50, 70, 10) // returns 10
  ```
- From buying put option
  
  #### Returns
  `number` - payoff from buying put ($$$ per share)
  #### Example

  ```js
  const { payoffFromBuyingPut } = require('stock-options-calculator')

  payoffFromSellingCall(50, 40) // returns 0
  payoffFromSellingCall(50, 40, 10) // returns 10
  ```
- From selling call option
  
  #### Returns
  `number` - payoff from selling call ($$$ per share)
  #### Example

  ```js
  const { payoffFromBuyingCall } = require('stock-options-calculator')

  payoffFromBuyingCall(50, 70) // returns 20
  payoffFromBuyingCall(50, 70, 10) // returns 10
  ```
- From selling put option
  
  #### Returns
  `number` - payoff from selling put ($$$ per share)
  #### Example

  ```js
  const { payoffFromSellingPut } = require('stock-options-calculator')

  payoffFromSellingPut(50, 40) // returns -10
  payoffFromSellingPut(50, 70, 10) // returns 10
  ```
### Count price using Black-Scholes Model

## License

Stock Options Calculator is provided under the [ISC License](LICENSE)
