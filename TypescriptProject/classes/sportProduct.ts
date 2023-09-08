//import other module/ts in the file
import { Product } from "./classExample"

let productObj1 = new Product(1000, "Bat", "Cricket");
console.log( ` product details: ${productObj1.name}, ${productObj1.type}, ${productObj1.price}`);