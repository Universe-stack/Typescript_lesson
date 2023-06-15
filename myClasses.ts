class Car {
    //properties
    private static numberOfCars: number=0;
    _make: string;
    _color: string;
    _doors: number;

    //constructor
    constructor(make: string, color: string, doors = 4) {
        this._make = make;
        this._color = color;
        this._doors = doors;
        Car.numberOfCars++;
    }


    //getters and setters
    get make() {
        return this._make
    }

    set make(make) {
        this._make = make;
    }

    get color() {
        return 'The color of the car is '+this._color
    }

    get doors() {
        return this._doors;
    }

    set doors(doors) {
        if((doors%2)===0) {
            this._doors = doors;
        }else {
            throw new Error('Doors must be an even number')
        }
    }



    //class methods
    accelerate(speed:number):string{
        return `${this.worker()} is accelerating to ${speed} MPH.`
    }

    brake():string {
        return `${this.worker()} is braking with the standard braking system.`
    }

    protected worker():string{
        return this._make
    }

    public static getNumberOfCars(): number{
        return Car.numberOfCars;
    }
}

//INSTANTIATING THE CLASS

let myCar1= new Car('Cool car company','blue',2)
console.log(myCar1._color)

let myCar2 = new Car('Galaxy Motors', 'blue', 2);
// Returns 2
console.log(Car.getNumberOfCars());



//EXTEND A CLASS
class ElectricCar extends Car{
    //properties
    private _range: number;

    //constructor
    constructor(make:string,color:string,range:number,doors=2){
        super(make,color,doors);
        this._range=range;
    }

    //get and set accessors
    get range() {
        return this._range;
    }

    set range(range) {
        this._range = range;
    }

    //Methods
    charge() {
        console.log( this.worker() + "is charging");
    }
    brake():string {
        return `${this.worker()} is braking with the standard braking system.`
    }
}

let spark = new ElectricCar('Spark Motors','silver', 124, 2);
let eCar = new ElectricCar('Electric Car Co.', 'black', 263);
console.log(eCar.doors);         // returns the default, 2
spark.charge();
console.log(spark.brake())
