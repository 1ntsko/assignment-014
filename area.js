"use strict";
exports.__esModule = true;
exports.getArea = exports.Shapes = void 0;
function getCircleArea(radius) {
    console.log(Math.PI * Math.pow(radius, 2));
}
function getRectangleArea(width, height) {
    console.log(width * height);
}
function getTriangleArea(side1, side2, side3) {
    var s = (side1 + side2 + side3) / 2;
    var area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));
    console.log(area);
}
var Shapes;
(function (Shapes) {
    Shapes[Shapes["Circle"] = 0] = "Circle";
    Shapes[Shapes["Rectangle"] = 1] = "Rectangle";
    Shapes[Shapes["Triangle"] = 2] = "Triangle";
})(Shapes = exports.Shapes || (exports.Shapes = {}));
function getArea(shape) {
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
exports.getArea = getArea;
