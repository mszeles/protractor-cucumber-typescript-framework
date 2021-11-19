"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassExample = void 0;
//export keyword is needed to acces this class from another files
class ClassExample {
    constructor(username, password, ssn) {
        this.username = username;
        this.password = password;
        this.ssn = ssn;
    }
    getUserName() {
        return this.username;
    }
    setUsername(username) {
        this.username = username;
    }
    getPassword() {
        return this.password;
    }
    setPassword(password) {
        this.password = password;
    }
    getSSN() {
        return this.ssn;
    }
    setSSN(ssn) {
        this.ssn = ssn;
    }
}
exports.ClassExample = ClassExample;
function validateCar(car) {
    console.log(car.camera);
    console.log(car.engine);
    console.log(car.color);
}
