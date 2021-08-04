/**
 * Return an integer between 1 and 100
 * @param {number} progress
 * @returns {number}
 */
export const getValidPercentage = (progress: number): number => {
  return Math.round(Math.min(Math.max(progress, 0), 100));
};

/**
 * Calculate the SVG stroke-dashoffset value given a progress percentage
 * and a diameter
 * @param {number} progress
 * @param {number} diameter
 * @returns {number}
 */
export const getOffset = (progress: number, diameter: number): number => {
  return Math.round((100 - getValidPercentage(progress)) / 100 * diameter);
};
