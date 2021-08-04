import { getOffset, getValidPercentage } from './util';

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