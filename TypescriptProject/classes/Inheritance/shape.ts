//abstract class
export abstract class shape {
    
    public get size(): number {
        return this._size;
    }
    public set size(value: number) {
        this._size = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    constructor(private _name: string, private _size: number){

    }   

    public getInfo():string {
        return `name: ${this._name}, size: ${this._size}`;
    }

    //abstract method
    abstract area(): void;
}