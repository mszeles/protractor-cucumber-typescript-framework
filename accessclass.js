"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classexample_1 = require("./classexample");
let obj = new classexample_1.ClassExample("bbb", "ccc", 12);
obj.setUsername("aaa");
console.log(obj.getUserName());
print("Hello world");
console.log(increment(3));
function print(value) {
    console.log(value);
}
function increment(value) {
    return value + 1;
}
function validateCar(car) {
    console.log(car.camera);
    console.log(car.engine);
    console.log(car.color);
}
let bmw = {
    color: "red",
    engine: 100,
    camera: true
};
let mercedes = {
    color: "black",
    engine: 500,
};
validateCar(bmw);
validateCar(mercedes);
