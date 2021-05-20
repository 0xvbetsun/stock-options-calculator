import N from './normalDistribution.js'

/**
 * St = underlying price ($$$ per share)
 * K = strike price ($$$ per share)
 * s = volatility (% p.a.)
 * r = continuously compounded risk-free interest rate (% p.a.)
 * q = continuously compounded dividend yield (% p.a.)
 * t = time to expiration (% of year)
 * https://medium.com/magnimetrics/black-scholes-model-first-steps-bdcbe1691da7
 */
const St = 60
const K = 58
const r = 3.5
const s = 20
const t = 0.5
const q = 1.25
// d1 = 0.3900
// d2 = 0.2486
// N(d1) =NORM.DIST(0.39, 0, 1, TRUE) = 0.6517

const d1 = (St, K, r, q, s, t) => (Math.log(St / K) + (r - q + (s ** 2) / 2) * t) / (s * Math.sqrt(t))

const d2 = (d1, s, t) => d1 - s * Math.sqrt(t)

export const callPrice = (St, K, r, q, t) => {
  return St * Math.E ** -q * t * N(d1) - K * Math.E ** -r * t * N(d2)
}

export const putPrice = (St, K, r, q, t) => {
  return K * Math.E ** -r * t * N(-d2) - St * Math.E ** -q * t * N(-d1)
}
