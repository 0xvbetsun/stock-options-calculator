const probabilityDensity = (z) => Math.exp(-(Math.log(2 * Math.PI) + z ** 2) * 0.5)

export default (z) => {
  const t = 1 / (1 + 0.2316419 * Math.abs(z))
  const t2 = t ** 2
  const y = t * (0.319381530 - 0.356563782 * t + (1.781477937 - 1.821255978 * t + 1.330274429 * t2) * t2)

  return 1 - probabilityDensity(z) * y
}
