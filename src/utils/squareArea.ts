const gcd = (a: number, b: number): number => {
  return a % b === 0 ? b : gcd(b, a % b);
};

export const squareArea = (
  count: number
): { square: number; count: number } => {
  const widthA = 1000;
  const heightA = 600;
  const area = widthA * heightA;
  n;

  if (gcd(widthA, count) === 1) {
    return squareArea(count + 1);
  }
  return { square: area / count, count };
};

export function calculateRectangleCount(lineCount: number) {
  if (lineCount < 0) {
    return 0;
  }

  // 가로 선의 개수
  const horizontalCount = Math.ceil(lineCount / 2);
  // 세로 선의 개수
  const verticalCount = Math.floor(lineCount / 2);

  // 사각형의 개수 계산
  const rectangleCount = (horizontalCount + 1) * (verticalCount + 1);

  return rectangleCount;
}
