const probabilityDensity = (num) => Math.exp(-(Math.log(2 * Math.PI) + num ** 2) * 0.5)

export const roundFour = (num) => Math.round((num + Number.EPSILON) * 1e4) / 1e4

export const normalDistribution = (num) => {
  const t = 1 / (1 + 0.2316419 * Math.abs(num))
  const t2 = t ** 2
  const y = t * (0.319381530 - 0.356563782 * t + (1.781477937 - 1.821255978 * t + 1.330274429 * t2) * t2)

  return roundFour(num > 0 ? 1 - probabilityDensity(num) * y : probabilityDensity(-num) * y)
}
