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

let signupuser=(name:string,_id:number,_islogin:boolean =false)=>(console.log(name))
signupuser("samip",123)

//we can return just the string to avoid this we can just do this

function addtwonumbers(num:number):number {
    return num+2
}
addtwonumbers(3)

const hero=["samip","nepal"]
hero.map((_heros):string=>{
return `hero is ${hero}`
})

//other function also
function fail(msg: string): never {
    throw new Error(msg);
  }

  //object in ts
//   let userid={
//     name:"samip",
//     id:1234,
//     isavt:true
//   }

// function userid({}): void {
//   }
//   userid({name:"samip",id:1123});

//   //other method of object type

//   type users={
//     name:string;
//     email:string;
//     isactv:boolean
//   }
//   function userinfo( user: users) {
// }
// userinfo({name:"samip",email:"samipnepal555@gmail.com", isactv: true})

//readonly and optional

type userid={
    readonly_id:string
    name:string
        email:string
        isactv:boolean
        creaditcard?:boolean
       }

       let userids:userid={
           readonly_id: "2334",  
    name:"samip",
        email:"samipnepal555@gmail.com",
        isactv:true
       }


type cardnumber={
    cardnumber:string
}
type carddate={
    carddetails:string
}

type corddetails=cardnumber &carddate;

//union help to define many type in same variable

type User = {
    name: string;
    id: number;
  };
  
  type Admin = {
    username: string;
    id: number;
  };
  let samip: User | Admin = { name: "samip", id: 3554 };
  // Assigning an object with properties matching the Admin type
  samip = { username: "hc", id: 345};

//   function detabaseid(id:string | number) {
//     console.log(`db is is ${id}`);
    
//   }
   detabaseid(3)
   detabaseid("3")
   function detabaseid(id:string | number) {
        if (typeof id ==="string") {
            id.toUpperCase();
        }
   }
   //array 

   let array:(number |string|boolean)[]=[1,2,3,"3",true]
   let seatallocation:"left"|"middle"|"right"

   //tuples in ts can be written as
   type arr1=[string,number]
   let newarr1:arr1=["samip",123]
   newarr1[0]="samipdon"//tuple not following it rule
   //can use all the method of array like push pop and so on

// interface

interface userids{
    readonly iddata:number
    email:string,
    userid:number
    googleid?:number
    starttrails():string
    gets(name:string):number
}
interface userids{
    githubtoken:string
    role:string
}
interface Admines extends userids {
    role:"samip";
}
 let userinfo:userids={
    role: "start",

     iddata: 344, email: "samipnepal@", userid: 123,
githubtoken:"1234",
     starttrails:()=>{
        return "samip"
     },
     gets: (_hello = "samip") => {
         return 10;
     }
 }

userinfo.email="samipnepal222"










  export{}