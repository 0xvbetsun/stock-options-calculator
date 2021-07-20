# 📉 Stock Options Calculator 📈

![CI](https://github.com/VBetsun/stock-options-calculator/workflows/CI/badge.svg)
[![Known Vulnerabilities](https://snyk.io/test/github/VBetsun/stock-options-calculator/badge.svg)](https://snyk.io/test/github/VBetsun/stock-options-calculator)
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

#### Arguments

| Argument | Type    | Description                                       |
| -------- | ------- | ------------------------------------------------- |
| strike   | number  | strike price ($$$ per share)                      |
| premium  | number? | current market price of an option ($$$ per share) |

- For call option

  #### Returns

  `number` - break-even price for call ($$$ per share)

  #### Example

  ```js
  const { callBreakEvenPoint } = require('stock-options-calculator')

  callBreakEvenPoint(50) // returns 50
  callBreakEvenPoint(50, 10) // returns 60
  ```
- For put option

  #### Returns

  `number` - break-even price for put ($$$ per share)

  #### Example

  ```js
  const { putBreakEvenPoint } = require('stock-options-calculator')

  putBreakEvenPoint(50) // returns 50
  putBreakEvenPoint(50, 10) // returns 40
  ```

### Count payoff

#### Arguments

| Argument | Type    | Description                                       |
| -------- | ------- | ------------------------------------------------- |
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

#### Arguments

| Argument          | Type    | Description                                       |
| ----------------- | ------- | ------------------------------------------------- |
| blackScholesInput | Object  | Black-Scholes Model                               |

#### blackScholesInput

| Argument     | Type    | Description                                              |
| ------------ | ------- | -------------------------------------------------------- |
| strike       | number  | strike price ($$$ per share)                             |
| stock        | number  | underlying price ($$$ per share)                         |
| interestRate | number  | continuously compounded risk-free interest rate (% p.a.) |
| volatility   | number  | annual volatility (% p.a.)                               |
| timeToExpire | number  | time to expiration (% of year)                           |
| dividend     | number? | continuously compounded dividend yield (% p.a.)          |

- For call option

  #### Returns

  `number` - price for call ($$$ per share)

  #### Example

  ```js
  const { callPrice } = require('stock-options-calculator')

  const strike = 58
  const stock = 60
  const interestRate = 0.035
  const volatility = 0.2
  const timeToExpire = 0.5
  const dividend: 0.0125  

  callPrice({ strike, stock, interestRate, volatility, timeToExpire }) // returns 5.0171
  callPrice({ strike, stock, interestRate, volatility, timeToExpire, dividend }) // returns 4.7704
  ```

- For put option

  #### Returns

  `number` - price for putPrice ($$$ per share)

  #### Example

  ```js
  const { putPrice } = require('stock-options-calculator')

  const strike = 58
  const stock = 60
  const interestRate = 0.035
  const volatility = 0.2
  const timeToExpire = 0.5
  const dividend: 0.0125  

  putPrice({ strike, stock, interestRate, volatility, timeToExpire }) // returns 2.0109
  putPrice({ strike, stock, interestRate, volatility, timeToExpire, dividend }) // returns 2.138
  ```

## License

Stock Options Calculator is provided under the [ISC License](LICENSE)
