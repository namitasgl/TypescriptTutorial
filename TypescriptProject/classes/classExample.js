"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class customer {
    constructor(FirstName, LastName) {
        this.firstName = FirstName;
        this.lastName = LastName;
    }
}
let custObj = new customer("Namita", "Sehgal");
console.log(` Hello ${custObj.firstName} ${custObj.lastName}`);
custObj.firstName = "Muskaan";
custObj.lastName = "Sehgal";
console.log(`Again Hello ${custObj.firstName} ${custObj.lastName}`);
// now any file can import the product class
class Product {
    // property parameter -> _price 
    constructor(_price, Name, type) {
        this._price = _price;
        this._name = Name;
        this._type = type;
    }
    //select the property declaration line and IDE provide set get generated method
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
    get name() {
        return this._name;
    }
    //set is a public accessor to set the value of private property. 
    //the same accessor name can be used outside to set the value 
    set name(theName) {
        this._name = theName;
    }
}
exports.Product = Product;
let productObj = new Product(100, "BasketBall", "Ball");
productObj.name = "Football"; //internally called the set accesor to set private property value.
console.log(`Product name is : ${productObj.name}`); //internally called get accesor to retrieve private property value
console.log(`Product Name: ${productObj.name}, Product type: ${productObj.type}, Product price: ${productObj.price}`);
