import {
  getOffset,
  getValidPercentage,
  calculateDiameter,
  getViewBoxForCircle,
} from '.';

describe('getOffset', () => {
  it('should return a valid offset', () => {
    const progress = 41;
    const diameter = 1100;
    const expected = 649;
    const actual = getOffset(progress, diameter);
    expect(actual).toBe(expected);
  })
});

describe('getValidPercentage', () => {
  it('should return a valid percentage given a valid progress', () => {
    const progress = 50;
    const actual = getValidPercentage(progress);
    expect(actual).toBe(progress);
  });

  it('should return 0 if a negative number is provided', () => {
    const progress = -50;
    const actual = getValidPercentage(progress);
    expect(actual).toBe(0);
  });

  it('should return 100 if a number over 100 is provided', () => {
    const progress = 500;
    const actual = getValidPercentage(progress);
    expect(actual).toBe(100);
  });

  it('should round to the nearest integer', () => {
    const progress = 5.1111;
    const actual = getValidPercentage(progress);
    expect(actual).toBe(5);
  });
});

describe('calculateDiameter', () => {
  it('should return the correct diameter', () => {
    const radius = 175;
    const expected = 1100;
    const actual = calculateDiameter(radius);
    expect(actual).toBe(expected);
  });
});

describe('getViewBoxForCircle', () => {
  it('should return the correct viewBox', () => {
    const radius = 175;
    const strokeWidth = 25;
    // As the bounding box of a circle is a square, we calculate a viewBox
    // with equal width & height. The X/Y values are the strokeWidth * -1,
    // and the width & height are radius * 2 + strokeWidth (175*2+25):
    const expected = '-25 -25 400 400';
    const actual = getViewBoxForCircle(radius, strokeWidth);
    expect(actual).toBe(expected);
  });
});
