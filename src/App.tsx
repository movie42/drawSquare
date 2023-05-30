import { Layer, Rect, Stage } from "react-konva";
import styled from "styled-components";
import { squareArea } from "./utils/squareArea";

interface SquareProps {
  width: number;
  height: number;
  x: number;
  y: number;
  fill: string;
}
const Square = ({ width, height, x, y, fill }: SquareProps) => {
  return (
    <Rect width={width} height={height} x={x} y={y} fill={fill} draggable />
  );
};

function App() {
  const count = 21;
  const { square, count: gcdCount } = squareArea(count);

  const width = (1000 / gcdCount) * 5;
  const height = square / width;
  // width가 1000을 넘어가면 안된다.
  // y를 정렬할 수 있는 방법이 필요하다.

  const squares = Array.from({ length: count })
    .fill({
      width: 0,
      height: 0
    })
    .map((_, i) => {
      const x = (width * i) % 1000;
      const y = (height * i) % 600;
      const fill = ["#dd00ff", "#ffdd00", "#00ddff"];

      const random = fill[Math.round(Math.random() * 10) % 3];
      return { width, height, x, y, fill: random };
    });

  console.log(squares);

  return (
    <Container>
      <Stage width={1000} height={600}>
        <Layer>
          {squares.map(({ width, height, x, y, fill }) => (
            <Square width={width} height={height} x={x} y={y} fill={fill} />
          ))}
        </Layer>
      </Stage>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100%;
  .konvajs-content {
    border: 1px solid gray;
  }
`;
