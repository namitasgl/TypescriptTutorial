"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cricket_1 = require("./cricket");
const footBall_1 = require("./footBall");
let footballObj = new footBall_1.football();
let cricketObj = new cricket_1.cricket();
console.log(footballObj.getSportName());
console.log(cricketObj.getSportName());
//declare array of sports
let sportArr = [];
sportArr.push(footballObj);
sportArr.push(cricketObj);
for (let obj of sportArr) {
    console.log(" sport :" + obj.getSportName());
}
