import { shape } from "./shape";

export class rectangle extends shape{
 area(): void {
    console.log(`Rectangle area : ${this._length * this._width}`);
 }

 constructor(private _length :number, private _width :number, name:string, size:number)
 {
    super(name,size);
 }

 public getInfo():string {
    return (super.getInfo() + ", length: "+this._length +", width: "+ this._width);
 }

 print():void{
    console.log(`length : ${this._length} , width : ${this._width}`);
 }
}