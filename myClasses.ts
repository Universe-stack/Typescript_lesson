class Car {
    _make: string;
    _color: string;
    _doors: number;

    constructor(make: string, color: string, doors = 4) {
        this._make = make;
        this._color = color;
        this._doors = doors;
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

    worker():string{
        return this._make
    }
}