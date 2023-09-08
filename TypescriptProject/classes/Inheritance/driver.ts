import { shape } from "./shape";
import { circle } from "./circle";
import { rectangle } from "./rectangle";

//compile time error as this is abstract class
   // let shapeObj = new shape("round",1);
    let circleObj = new circle(10, "circle", 2);
    let rectangleObj = new rectangle(4,5,"rectangle",1);

     
// Array of superclass which contains all subclass and super class

let  shapeArr:shape[] =[]; //empty array of shape
shapeArr.push(rectangleObj);
shapeArr.push(circleObj);
for(let obj of shapeArr){
    console.log(obj.getInfo());
    console.log(obj.area());
    console.log();
    }

console.log("DOne!!!!");
