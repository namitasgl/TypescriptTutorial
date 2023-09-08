import { cricket } from "./cricket";
import { football } from "./footBall";
import { sport } from "./sport";

let footballObj = new football();
let cricketObj = new cricket();

console.log(footballObj.getSportName());
console.log(cricketObj.getSportName());

//declare array of sports
let sportArr:sport[] = [];
sportArr.push(footballObj);
sportArr.push(cricketObj);

for(let obj of sportArr){
    console.log(" sport :" + obj.getSportName());
}