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


// Parameter types can also be optional by using the question mark (?) after the parameter name.

function greet(name: string, age?: number): string {
    if (age) {
        return `Hello ${name}, you are ${age} years old.`;
    } else {
        return `Hello ${name}`;

    }
}


//default parameters can also be specified by using the equals sign (=) after the parameter name.

function greet1(name: string, age: number = 18): string {
    return `Hello ${name}, you are ${age} years old.`;
}

//rest parameters can also be specified by using the spread operator (...) before the parameter name.

function sum(...numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}


//A function only have a single rest parameter and must be the last parameter in the parameter list.

function displayInfo(name:string, ...info: string[]): string {
    return `Hello ${name}, your info is ${info.join(", ")}`;
}

displayInfo("John", "age: 30", "gender: male", "location: USA"); //valid



//Function Types can also be defined using type aliases.
type AddFunction = (a: number, b: number) => number;
//this addfunction type alias defines a function that takes two parameters of type number and returns a number.

//Now which ever function we define with this type alias, it must have the same parameter types and return type as defined in the type alias.
const add1: AddFunction = (a, b) => a + b; //valid
function add2(a: number, b: number): number {
    return a + b;
}

// function types as parameter
function calculate(a:number, b:number, sum: AddFunction): number {
    return sum(a, b);
}
function displayFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
}


let calculation : (a:number, b:number) => number = (a, b) => a + b; //valid
calculation= add2; //valid
calculation= displayFullName; //invalid, because the function types are not compatible.



//Function overloading ...
function display(value: string): string;
function display(value: number): number;

//function display(value:boolean): boolean; //if we were to add this overload, then the function will accept boolean type as well.
function display(value: string | number): string | number {

    if (typeof value == "string"){
        return `Hello ${value}`;
    }else
    {
        return value * 2; 
    }
}

display("John"); //valid
display(10);
display(true); //invalid, because the function types are not compatible.

// but if I were to again overload this function with a boolean type, then it will be valid.

