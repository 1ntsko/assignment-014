function getCircleArea(radius: number): void {
  console.log(Math.PI * Math.pow(radius, 2));
}

function getRectangleArea(width: number, height: number): void {
  console.log(width * height);
}

function getTriangleArea(side1: number, side2: number, side3: number): void {
  const s = (side1 + side2 + side3) / 2;
  const area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));
  console.log(area);
}

export enum Shapes {
  Circle,
  Rectangle,
  Triangle,
}

export interface Circle {
  type: Shapes.Circle;
  radius: number;
}

export interface Rectangle {
  type: Shapes.Rectangle;
  width: number;
  length: number;
}

export interface Triangle {
  type: Shapes.Triangle;
  side1: number;
  side2: number;
  side3: number;
}

type AllShape = Circle | Rectangle | Triangle;

export function getArea(shape: AllShape) {
  switch (shape.type) {
    case Shapes.Circle:
      getCircleArea(shape.radius);
      break;
    case Shapes.Rectangle:
      getRectangleArea(shape.length, shape.width);
      break;
    case Shapes.Triangle:
      getTriangleArea(shape.side1, shape.side2, shape.side3);
      break;
  }
}
