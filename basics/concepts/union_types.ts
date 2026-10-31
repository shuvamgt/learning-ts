//Union types allows a variable to accept more that 1 specified types 
//for eg: A userId can contain numbers or string 
let userId : number | string ;
userId = 123; // valid 
userId = "SN123"; //valid 
userId = true; //invalid
//Why we need it ? 
// In API if user is identified using either an email or numeric Id. 
function getUser(id: number | string){
    console.log(id);
}

//here this function takes 1 argument which can be either number or string . 

getUser(123);
getUser("sn123");


// without union type we would have needed to create a seperate function to handle number and string types in TypeScript

function getUserById(id:number){
    console.log(id);
}
function getUserByEmail(email:string){
    console.log(email);
}
// instead of creating two different function for the same purpose.  I can now use union type to do the same thing using a single function.


let role :"developer" | "Admin" ="developer";
// Remember literal types? we can use union types in this literal types as well .
export {}