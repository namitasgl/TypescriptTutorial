import { shape } from "./shape";

export class circle extends shape {
    area(): void {
        console.log(`Circle area :${super.size * super.size}`);
    }

    constructor(private _radius:number, name:string, size:number)
    {
        super(name, size);
    }

    public getInfo(): string{
        return (super.getInfo()+ ", radius:"+ this._radius );
    }

}