import { xswitch } from '../xswitch';

describe('xswitch', () => {
  test('should return "x:1 is equal to z:1"', () => {
    // WHEN
    const result = xswitch(
      {
        xcase: (x, y, z) => x === y && y === z,
        return: () => `All are equal`,
      },
      {
        xcase: (x, y) => x === y,
        return: (x, y) => `x:${x} is equal to y:${y}`,
      },
      {
        xcase: (x, y, z) => x === z,
        return: (x, y, z) => `x:${x} is equal to z:${z}`,
      },
      {
        xcase: (x, y, z) => y === z,
        return: (x, y, z) => `y:${y} is equal to z:${z}`,
      }
    )(1, 2, 1);

    // THEN
    expect(result).toBe('x:1 is equal to z:1');
  });

  test('should return undefined', () => {
    // WHEN
    const result = xswitch(
      {
        xcase: (x, y, z) => x === y && y === z,
        return: () => `All are equal`,
      },
      {
        xcase: (x, y) => x === y,
        return: (x, y) => `x:${x} is equal to y:${y}`,
      },
      {
        xcase: (x, y, z) => x === z,
        return: (x, y, z) => `x:${x} is equal to z:${z}`,
      },
      {
        xcase: (x, y, z) => y === z,
        return: (x, y, z) => `y:${y} is equal to z:${z}`,
      }
    )(1, 2, 3);

    // THEN
    expect(result).toBeUndefined();
  });
});
