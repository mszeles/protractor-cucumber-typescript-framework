import { Vehicle } from "./accessclass";
//export keyword is needed to acces this class from another files
export class ClassExample {
    //We do not use the let keyword for properties (it is assigned by default)
    username:string;
    password:string;
    ssn:number;

    constructor(username: string, password: string, ssn:number) {
        this.username = username;
        this.password = password;
        this.ssn = ssn;
    }

    getUserName(): string {
        return this.username;
    }

    setUsername(username: string): void {
        this.username = username;
    }

    getPassword():string {
        return this.password;
    }

    setPassword(password: string): void {
        this.password = password;
    }

    getSSN():number {
        return this.ssn;
    }

    setSSN(ssn:number): void {
        this.ssn = ssn;
    }
}

function validateCar(car: Vehicle) {
    console.log(car.camera);
    console.log(car.engine);
    console.log(car.color);
}


