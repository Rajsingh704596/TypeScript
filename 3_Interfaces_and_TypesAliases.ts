//! Interfaces  and Type Aliases


//$1 Interface -  (Object shape define)

//User interface define
interface User{
    name:string;
    email:string;
    password:string;
    gender?:string;                          // here ? optional use means if user give gender or not it's optional , no error 
}

//here we define obj is similar to User in parameter
function getDataofUser(obj:User){
    //  obj.email;
    
}

//now we call fun. we pass argument name,email,password that must important where obj is look like User
getDataofUser({name:"rock",email:'rr',password:"ee"})



//$ Extending Interfaces -   
//here this e.g Admin have both Self property + User Property 
interface Admin extends User{
          admin:boolean;
}

function adminData(obj:Admin){
    // obj.admin
    // obj.email
    // obj.gender
    // obj.name
    // obj.password           // we can access this
}


//todo - Note two interfaces of the same name are actually merged

interface abc{
    name:string;
}

interface abc{
    email:string;
}

function mr(obj:abc){
   obj.email;
   obj.name;
}


//$2 Type Aliases - (self user define types)

// e.g.
type sankhya = number;  //here we create custom type which name is sankhya and it's number type
let sd:sankhya;     // now sd is number type    

//e.g.
type value = string | number | null;   // here we create type value which will be string/number/null  (Union use)
let cd:value;

//e.g
function abd(obj:value){

}
//fun call with argument
abd(3)
abd("r")
abd(null)



//$ Union (|) and InterSection (&) Types -

type Users={
    name:string;
    email:string;
}

type Admins = Users & {            // here intersection user that mean Admins have User type of data + self data
    getDetails(user:string):void    //method that does not return anything
}

function ad(a:Admins){     // so a have Admin and Users both property type
     a.getDetails
    // a.email
    // a.name             // now we can access this 

}


//todo - Key Diff. b/w -
//*  'Type' use for create type's merger, union, single type define.    v/s   'Interface' use for create object shape


