class customer {
     firstName: string;
     lastName: string;

     constructor(FirstName: string, LastName: string){
        this.firstName = FirstName;
        this.lastName = LastName;
     }

}

let custObj = new customer("Namita","Sehgal");
console.log(` Hello ${custObj.firstName} ${custObj.lastName}`);
custObj.firstName = "Muskaan";
custObj.lastName = "Sehgal"
console.log(`Again Hello ${custObj.firstName} ${custObj.lastName}`);


// now any file can import the product class
export class Product {
   
    private _name: string;
    private _type: string;

    // property parameter -> _price 
    constructor(private _price: number, Name:string, type:string){
        this._name= Name;
        this._type = type;
        }

    //select the property declaration line and IDE provide set get generated method
    public get type(): string {
        return this._type;
    }
    public set type(value: string) {
        this._type = value;
    }

    public get price(): number {
        return this._price;
    }
    public set price(value: number) {
        this._price = value;
    }
    
    public get name():string {
        return this._name;
    }
    //set is a public accessor to set the value of private property. 
    //the same accessor name can be used outside to set the value 
    public set name( theName: string) {
        this._name= theName;
    }
}

let productObj = new Product(100, "BasketBall","Ball");
productObj.name = "Football"; //internally called the set accesor to set private property value.
console.log(`Product name is : ${productObj.name}`); //internally called get accesor to retrieve private property value
console.log(`Product Name: ${productObj.name}, Product type: ${productObj.type}, Product price: ${productObj.price}`);