let a = 5;
const b = 6;
let c:string = "abc";
let d:number = 5;
let l = [1, 2, 3];
let list:Array<number> = [1, 2, 3];
let dynamic:any = 3;
dynamic = "";
let flag: boolean = false;

for(let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 100 * i);
}
