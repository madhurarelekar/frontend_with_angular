// Boolean
var pending : boolean;
pending = true;

// number
var price = 2.5;
console.log(price);

// string
var firstname : string = "john";
var description = `this typescript string can
span multiple
lines`

console.log(description);

// Array
var skills = ['problem solving','software design','programming'];
console.log(skills[0]);

skills.push("design analysis");
console.log(skills[3]);

// tuple

var tuple : [string,number];
tuple = ["programming",7];

// any

var result : any;
var result1;
var result2;

result1: 99;
result:8;
result:"tt";

//union
let uresult : number | string ;

uresult = 10;
uresult = "HI";

console.log(uresult);

// string literal
// let click : string;
// click : "hh";
// click :"jj";

let click : "hi";

let mouseEvent : 'click' | 'dbclick' | 'mouseup'
mouseEvent = 'dbclick';

// Intersection

// &

interface BusinessPartner{
    name : string;
    credit: number;
}
interface Contact{
    email:string;
    phone:string;
}
type Customer = BusinessPartner & Contact;

let c: Customer ={
    name :'Ab',
    credit : 12,
    email : 'rs',
    phone : '22'
}

var age = 88;

//conditional datatype
const age1 =16;
const beverage = age1 >=21 ? "BEER" : "JUICE"
console.log(beverage);

// syntax T extends U ? X : Y
type NonNullabel<T> = T extends null | boolean ? never :T;
NonNullabel<boolean> = boolean extends null | boolean ? never :boolean;
NonNullabel<null> = null extends null | boolean ? never :null;
NonNullabel<string> = string extends null | boolean ? never :null;

type A = NonNullabel<boolean>// never
type B = NonNullabel<null>// never
type C = NonNullabel<string>// string






