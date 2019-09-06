/** @module position-in-range */

/**
 * @function
 * @param {number} lowerRangeNumber
 * @param {number} upperRangeNumber
 * @param {number} position
 * @returns {number} Relative position of given `position` within the range
 * @example
 * import positionInRange from "position-in-range"
 * positionInRange(2, 5,   2) //   0
 * positionInRange(2, 5,   5) //   1
 * positionInRange(2, 5, 3.5) // 0.5
 * positionInRange(2, 5,   8) //   2
 * positionInRange(2, 5,  -4) //  -2
 */
export default (lowerRangeNumber, upperRangeNumber, position) => {
  const normalizedUpper = upperRangeNumber - lowerRangeNumber
  const normalizedPosition = position - lowerRangeNumber
  return normalizedPosition / normalizedUpper
}