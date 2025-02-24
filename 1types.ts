//! TypeScript - Type Safety with feature of java script. it's superset of js

//$ Basic types-
// primitives types- (number, string, boolean)
// it's immutable, directly copy 

// Reference types- [],{},()
// it's mutable, spread operator use for copy 

// arrays  
// tuples
// Enums
// Any, Unknown, Void, Null, Undefined, Never


let a=5;
let b='rock';

//^ Arrays
let arr=[1,2,3,"rr",true,null,undefined,{name:"roy"},{age:23}];

let arr2:number[]=[1,3]

//^ Tuples- array with fixed size and type and fixed position
let arr3:[string,number]=["rd",2]

//^ Enums- enumeration we use multiple value and set it's property (Note - key value pair and use equal sign instead of colon)
enum UserRoles{
    Admin="admin",
    Guest="guest",
    Super_Admin="super_Admin"
}

UserRoles.Admin       //here we use enum to get property of that key

enum StatusCodes{
    ABANDONED = "abandoned status code 500",
    NOTFOUND = 'not found status code 404'
}

StatusCodes.NOTFOUND

// Any - any type of data assign
let r;   
r=2;
r="rr";             // it's js       

//@ note - Make sure variable type should not Any 
let s:number;
s=2;

//^ Unknown - it's same like Any , it's allow any type value but when we use that value we should give typeof

let t:unknown;
t=2;
t="rt";

// t.toUpperCase();      //  here we get error

if(typeof t === "string")
    t.toUpperCase();      // here we use


//^Void - fun. which is not return anything at that time we use void

function abc(): void {
    console.log("hi");
}

//if return something we should give that type like this
function cab():string{
    return "rok";
}

function dc():boolean{
    return true;
}

//^ Null-
//let n=null;      // here it's any type
let n:null;    // now we can't assign any value it's throw error

let m: string | null;    //here union use m value is string or null acceptable
m='r';
m=null;

//^ Undefined- variable which has no value
let u:undefined;

//^ Never- when we use it, next code not execute. it's basically use for infinite loop, throw error (use case)

// function abcd():never{       
//     while(true){}   //if while always true it's infinite loop
// }

// abcd();
// console.log("hey");   //before never type so this line not execute







