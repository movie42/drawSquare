const gcd = (a: number, b: number): number => {
  return a % b === 0 ? b : gcd(b, a % b);
};

export const squareArea = (
  count: number
): { square: number; count: number } => {
  const widthA = 1000;
  const heightA = 600;
  const area = widthA * heightA;

  if (gcd(widthA, count) === 1) {
    return squareArea(count + 1);
  }
  return { square: area / count, count };
};
