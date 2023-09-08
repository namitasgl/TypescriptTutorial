"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const circle_1 = require("./circle");
const rectangle_1 = require("./rectangle");
//compile time error as this is abstract class
// let shapeObj = new shape("round",1);
let circleObj = new circle_1.circle(10, "circle", 2);
let rectangleObj = new rectangle_1.rectangle(4, 5, "rectangle", 1);
// Array of superclass which contains all subclass and super class
let shapeArr = []; //empty array of shape
shapeArr.push(rectangleObj);
shapeArr.push(circleObj);
for (let obj of shapeArr) {
    console.log(obj.getInfo());
    console.log(obj.area());
    console.log();
}
console.log("DOne!!!!");
