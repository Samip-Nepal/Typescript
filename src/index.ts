let age=25;
let first_name="samip";
let ishero= true;
//any 
function hi_there(document:any) {
    console.log(document);//document is not define variable can do any 
}

//let number:number[]=[1,2,3,"2"];//string cannot be place
//array
let number=[1,2,3,4];
number.forEach((num)=>(console.log(num)));

//tupple(many use when two value)
let user :[number,string]=[1,"a"];
