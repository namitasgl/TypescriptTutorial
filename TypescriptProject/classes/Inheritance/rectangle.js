"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rectangle = void 0;
const shape_1 = require("./shape");
class rectangle extends shape_1.shape {
    constructor(_length, _width, name, size) {
        super(name, size);
        this._length = _length;
        this._width = _width;
    }
    area() {
        console.log(`Rectangle area : ${this._length * this._width}`);
    }
    getInfo() {
        return (super.getInfo() + ", length: " + this._length + ", width: " + this._width);
    }
    print() {
        console.log(`length : ${this._length} , width : ${this._width}`);
    }
}
exports.rectangle = rectangle;
