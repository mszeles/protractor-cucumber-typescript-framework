import {ClassExample} from './classexample';

export interface Vehicle {
    color: string;
    engine: number;
    //? means optional
    camera?: boolean;
}

let obj = new ClassExample("bbb", "ccc", 12);
obj.setUsername("aaa");
console.log(obj.getUserName());
print("Hello world");
console.log(increment(3));

function print(value: string): void {
    console.log(value);
}

function increment(value: number): number {
    return value + 1;
}

function validateCar(car: Vehicle) {
    console.log(car.camera);
    console.log(car.engine);
    console.log(car.color);
}

let bmw = {
    color:"red",
    engine:100,
    camera:true
}

let mercedes = {
    color:"black",
    engine:500,
}

validateCar(bmw);
validateCar(mercedes);