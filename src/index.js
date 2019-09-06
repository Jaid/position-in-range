/** @module position-in-range */

/**
 * @function
 * @param {number} [compareValue]
 * @returns {number} Seconds passed since Unix epoch (01 January 1970)
 * @example
 * import positionInRange from "position-in-range"
 * const result = positionInRange()
 * result === 1549410770
 * setTimeout(() => {
 *   const result2 = positionInRange(result)
 *   result2 === 3
 * }, 3000)
 */
export default compareValue => {
  const seconds = Math.floor(Date.now() / 1000)
  if (compareValue === undefined) {
    return seconds
  } else {
    return seconds - compareValue
  }
}