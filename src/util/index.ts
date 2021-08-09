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
 * and a diameter. For example, if progress == 0, the offset will equal
 * the diameter. If progress == 100, the offset will equal zero.
 * @param {number} progress
 * @param {number} diameter
 * @returns {number}
 */
export const getOffset = (progress: number, diameter: number): number => {
  return Math.round((100 - getValidPercentage(progress)) / 100 * diameter);
};

/**
 * Calculate diameter given a radius (2 * PI * r)
 * @param {number} radius
 * @returns {number}
 */
export const calculateDiameter = (radius: number): number => {
  return Math.round(Math.PI * radius * 2);
};

/**
 * Get the SVG viewBox string given a radius and stroke-width
 * @param {string} radius
 * @param {string} strokeWidth
 * @returns {string}
 */
export const getViewBoxForCircle = (radius: number, strokeWidth: number): string => {
  const size = (radius * 2) + (strokeWidth * 2);
  return `${-strokeWidth} ${-strokeWidth} ${size} ${size}`;
}
