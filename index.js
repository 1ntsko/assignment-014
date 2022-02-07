"use strict";
exports.__esModule = true;
var area_1 = require("./area");
var rect = {
    type: area_1.Shapes.Rectangle,
    length: 12,
    width: 15
};
var triangle = {
    type: area_1.Shapes.Triangle,
    side1: 12,
    side2: 7,
    side3: 18
};
var circle = {
    type: area_1.Shapes.Circle,
    radius: 20
};
(0, area_1.getArea)(rect);
(0, area_1.getArea)(triangle);
(0, area_1.getArea)(circle);
