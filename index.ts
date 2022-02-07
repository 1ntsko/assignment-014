import { getArea, Rectangle, Circle, Triangle, Shapes } from './area';

const rect: Rectangle = {
  type: Shapes.Rectangle,
  length: 12,
  width: 15,
};

const triangle: Triangle = {
  type: Shapes.Triangle,
  side1: 12,
  side2: 7,
  side3: 18,
};

const circle: Circle = {
  type: Shapes.Circle,
  radius: 20,
};

getArea(rect);
getArea(triangle);
getArea(circle);
