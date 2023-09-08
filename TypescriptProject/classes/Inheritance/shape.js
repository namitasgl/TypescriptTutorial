"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shape = void 0;
//abstract class
class shape {
    constructor(_name, _size) {
        this._name = _name;
        this._size = _size;
    }
    get size() {
        return this._size;
    }
    set size(value) {
        this._size = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    getInfo() {
        return `name: ${this._name}, size: ${this._size}`;
    }
}
exports.shape = shape;
