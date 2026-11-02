//Function types

//In the TS we can define the type of a function by specifying the types of its parameters and its return type.

//here the parametes are defined as number
function add(a: number, b: number) {
    return a + b;
}
//here the function returns a number, even though we have not specified the return type, TS can infer it from the return statement.


//We can also explicitly specify the return type of a function by using the colon (:) followed by the type after the parameter list.
function subtract(a: number, b: number): number {
    return a - b;
}
//here this function returns a number 
let value:string = subtract(10, 5); //in- valid
//to make it valid we need to change the type of value to number
let value1:number = subtract(10, 5); //valid


/*
If a function does not return anything, we can specify the return type as void.
*/

function logMessage(message: string): void {
    console.log(message);
}
//here this function does not return anything, so we specify the return type as void.

//but if we try to return a value from a function that has a return type of void, it will throw an error.   

function logMessage1(message: string): void {
    console.log(message);
    return "Hello"; // invalid, cannot return a value from a function that has a return type of void.
}