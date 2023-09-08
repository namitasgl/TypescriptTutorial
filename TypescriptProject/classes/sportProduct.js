"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classExample_1 = require("./classExample");
let productObj1 = new classExample_1.Product(1000, "Bat", "Cricket");
console.log(` product details: ${productObj1.name}, ${productObj1.type}, ${productObj1.price}`);
