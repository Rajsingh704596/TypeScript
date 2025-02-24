//! Fundamental of Classes and Objects
//Class and Object
//Constructors
//Access modifiers (public, private, protected)
//Readonly properties
//Optional properties
//Parameter properties
//Getter and Setter
//Static member
//Abstract classes and methods


//^ Class 
class detail{
    value=10;
    data=100;
    message='Correct';
}

const tl=new detail     //here new keyword create new detail(it's class) which we store in tl, now tl we access that class


//^ Constructor - it's maker , used inside class , which is firstly execute when class run .
                // note inside Constructor access specifier must be define 

class BottleMaker{
    constructor(public name:string, public price:number){ }   // it's run first , both variable create when we pass value
}

let b2=new BottleMaker("Milton",1200);  //name and price value pass which we access using b2 , so b2 when console it has name and price with value


//2.eg
class HumanMaker{
    age=0;      //fix value
    constructor(public name:string,public isGood:boolean){         //constructor want name and isGood value which we need to set

    }
}

// so we can create multiple HumanMaker passing name and other value
let hum=new HumanMaker("rock",true);   //value pass in constructor inside class


//3.eg
class Music{
    constructor(public artist:string, public length:number, public thumbnail:string="thumbnail.jpg"){
       if(!thumbnail){
        this.thumbnail="thumbnail.jpg";
       }
    }     //if thumbnail not give default execute
}

let m1=new Music("rock",4,"");             //here thumbnail not pass so default execute
let m2=new Music("tr",4,"rr.jpg");
m2.artist="rr";          //now m2 artist value change  

//otherWay to write this code 

// class Music{
//     public artist;
//     public length;
//     public thumbnail;

//     constructor(artist:string, length:number, thumbnail:string="thumbnail.jpg" ){
//         this.artist=artist;
//         this.length=length;
//         this.thumbnail=thumbnail
//     }
// }


//^ Classes & Objects : this.keyword -(access variable,method call inside class)
class Abcd{
    name="rock";

    changeName(){             //inside class defined fun called method
      let a=2;
      console.log(a);        //local variable access
      
      console.log(this.name)             // access variable inside class using this keyword

      this.changeSomeMoreStuff   //method call 
    }

    changeSomeMoreStuff(){
      console.log("hey");
    }
}

//2 e.g
//  class BottleMaker2{
//     public name;
//     constructor(name:string){
//         this.name = name;
//     }
//  }

// let b4= new BottleMaker2("milton");

//short way
class BottleMaker2{
    constructor(public name:string){}        //now this.name no need , it' enough to create variable and set it's value
}

// let b3= new BottleMaker2("milton");


//$ Access Modifier-
   //^1.   public property accessible or change anywhere(like inside constructor, inside method, class inherit change)
   //^2.   Private property accessible or change only inside class (using constructor , method) , class inherit not change 

   class BottleMaker3{
    constructor(private name:string){
        this.name                          //here name is milton when b4 console
    }
    changeName(){
        this.name="role";      //name value is role assign when method call        // here name is role
    }

   }
 let b4= new BottleMaker3("milton");    //b4 access anything inside class
 b4.changeName();            // inside class changeName method call which change private property name 


 //? Inheritance e.g (when we use extends keyword ,class a data inherit class b)
 class Maker1{
    public role:string = "leader";        //public property it can also access in maker2 class 
    constructor(public name:string){ }        

  //  private role:string ="co-leader";
  //  constructor(private name:string){ }          //private  it's means name property only access in this class , it's not support to inheritance so it's throw error in compile time but execute data
 }

 class Maker2 extends Maker1{              // here extends means inherit make 1 into maker 2 so now maker 2 have self data + maker 1 data
    constructor(name:string){
        super(name);
    }

    getValue(){
        console.log(this.name,this.role);      //public type access from Maker 1 class

    //    console.log(this.name, this.role);  //Property 'name' is private and only accessible within class 'Maker1'.ts(2341)

    }

 }
 let i= new Maker2("Root");         
 //now Root goes maker 2 constructor there super name transfer to it's parent class maker 1 there constructor it's set

 i.getValue();             // in public type it's accessible, in private type it's not accessible



 //^3. Protected -if value is protected so it accessible within class e.g Maker3 and if extended so it's subclass e.g Maker4 (means class inheritance support to change and access variable of parent class), but not accessible outside of both class.  
 // so we can say Protected has combined functionality of private and public property.

 class Maker3{
    protected name="milton" ;
 }

 class Maker4 extends Maker3{        //inheritance
    public material = "metal";

    changeName(){
        this.name = "some other name";
    }
 }

 let t2 = new Maker4();   
 console.log(t2)       // o/p- Maker4{name:'milton', material:metal}

 t2.changeName();       // so name change, here name is "some other name" because type is protected  
 // in Private both give error but execute the code

 // but in Protected name is not change outside the both class
// t2.changeName = "change name";



//$ ReadOnly and Optional Properties-

//^ ReadOnly property use when we want that value property not change 
class U2{
    // constructor(public name:string){}          // here name change when we call ChangeName() method
     constructor(public readonly name:string){ }        //^ here readonly properties use so now name is not change 

    changeName(){
      //  this.name="hello";       //Cannot assign to 'name' because it is a read-only property.ts(2540)  
    }
}

let u1= new U2("rock");      // here name is rock
u1.changeName();             // only work when readonly property not used , so name is changed rock to hello 




 






