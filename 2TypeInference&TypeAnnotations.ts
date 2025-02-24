//Type Inference-   variable which we not give type, typescript automatic infer the value is which type.
let c=3;  

//Type Annotations- where we defined type using : colon

//(variable)
let d:number;

let mul:number | boolean | string;
mul=12; 
mul='e';
mul=true;

//(function parameter and return , we use type annotation)
function ab(a:number,b:string):void{ }
