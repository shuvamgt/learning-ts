// here are the basic types for string ,numbers ,boolean 

let name : string = "";
let age : number = 10;
let isUser: boolean = true;
let otherThing:string; //valid way of declaring variable and assigning a type

// here, we have already defined the rules for these variables so now we cannot defy it 

// if i try to give name = 10 then it will throw a type error saying type string cannot be assigned a number. 

//It goes same for age and isUser variables: 
/*
age = "" --> type error as age was defined to be a number 
isUser = ""  or isUser = 1 ---> type error as age was supposed to a boolean

Anything other than a defined rule is a type error in typescript 
*/
export {}