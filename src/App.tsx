import { Layer, Rect, Stage } from "react-konva";
import styled from "styled-components";

import { KonvaEventObject } from "konva/lib/Node";

interface Rect {
  width: number;
  x: number;
  y: number;
  height: number;
}
function App() {
  function haveIntersection(r1: Rect, r2: Rect) {
    return !(
      r2.x > r1.x + r1.width ||
      r2.x + r2.width < r1.x ||
      r2.y > r1.y + r1.height ||
      r2.y + r2.height < r1.y
    );
  }
  const handleDragMove = (e: KonvaEventObject<DragEvent>) => {
    const target = e.target;
    const targetRect = e.target.getClientRect();

    e.currentTarget.getLayer()?.children?.forEach((group) => {
      const groupClientRect = group.getClientRect();
      if (target === group) {
        return;
      }
      if (haveIntersection(groupClientRect, targetRect)) {
        group.setAttr("fill", "black");
      } else {
        group.setAttr("fill", "red");
      }
    });
  };

  const handleDragEnd = (e: KonvaEventObject<DragEvent>) => {
    const target = e.target;
    const targetRect = e.target.getClientRect();

    e.currentTarget.getLayer()?.children?.forEach((group) => {
      const groupClientRect = group.getClientRect();
      if (target === group) {
        return;
      }
      if (haveIntersection(groupClientRect, targetRect)) {
        const calY = targetRect.y - groupClientRect.y - groupClientRect.height;
        const calX = targetRect.x - groupClientRect.x - groupClientRect.width;
        target.setAttrs({ x: targetRect.x - calX, y: targetRect.y - calY });
      }
    });
  };
  return (
    <Container>
      <Stage width={1000} height={600}>
        <Layer onDragMove={handleDragMove} onDragEnd={handleDragEnd}>
          <Rect draggable x={1} y={1} width={100} height={100} fill="green" />
          <Rect draggable x={150} y={150} width={100} height={100} fill="red" />
          <Rect draggable x={150} y={150} width={100} height={100} fill="red" />
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
