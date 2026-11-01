//Unknown 
/*
This type is used when we don't know the type of a variable. It is similar to the any type, but is safer because it forces us to perform type checking before performing operations on the variable.
*/

let userName : any = "John Doe";
//this allows us to assign any type of value to the variable userName, but we lose type safety.

let userAge : unknown = 25;
//this allows us to assign any type of value to the variable userAge, but we have to perform type checking before using it.
userAge = "25"; //this is allowed, but we have to check the type before using it.
//This helps use to know if a variable is of a certain type before performing operations on it, which helps us avoid runtime errors.
export {}