"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.circle = void 0;
const shape_1 = require("./shape");
class circle extends shape_1.shape {
    constructor(_radius, name, size) {
        super(name, size);
        this._radius = _radius;
    }
    area() {
        console.log(`Circle area :${super.size * super.size}`);
    }
    getInfo() {
        return (super.getInfo() + ", radius:" + this._radius);
    }
}
exports.circle = circle;
