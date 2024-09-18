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

//enum in ts mainly use in named constant(called cannot be change in code)

let arr=[1,2];
enum size {
    small = 1,
    medium = 2,
    large = 3
}
let sizecal: size = size.medium;
console.log(sizecal);

//function in ts
function addtwonumber(num:number) {
    return num+2
}
addtwonumber(3)
 
let touppercase=(val:string)=>{
    return val.toUpperCase};
touppercase("samip")

let signupuser=(name:string,id:number,islogin:boolean =false)=>(console.log(name))
signupuser("samip",123)

//we can return just the string to avoid this we can just do this

function addtwonumbers(num:number):number {
    return num+2
}
addtwonumbers(3)

const hero=["samip","nepal"]
hero.map((heros):string=>{
return `hero is ${hero}`
})

//other function also
function fail(msg: string): never {
    throw new Error(msg);
  }