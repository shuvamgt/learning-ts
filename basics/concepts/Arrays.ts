// Array Types
//1 . Array Annotation 

//just like how we can annotate a variable with a type, we can also annotate an array with a type.


let numbers: number[] = [1, 2, 3, 4, 5]; //this is an array of numbers
numbers.push(6); //this is allowed because 6 is a number
numbers.push("7"); //this is not allowed because "7" is a string

let names: string[] = ["John", "Jane", "Doe"]; //this is an array of strings
names.push("Smith"); //this is allowed because "Smith" is a string
names.push(123); //this is not allowed because 123 is a number
let isActive: boolean[] = [true, false, true]; //this is an array of booleans
isActive.push(true); //this is allowed because true is a boolean
isActive.push("false"); //this is not allowed because "false" is a string


// 2 . Alternative Array Annotation Array<T> (Generic Array Syntax)

//TypeScript also provides an alternative way to annotate arrays using the Array<T> syntax, where T is the type of the elements in the array.

let numbers2: Array<number> = [1, 2, 3, 4, 5]; //this is an array of numbers
numbers2.push(6);
numbers2.push("7"); //this is not allowed because "7" is a string


/*
    here each and every element of the array but be as its type of the array, if we try to push an element of a different type, TypeScript will throw an error.
*/


// Multidimensional Arrays
//2d array
let matrix: number[][] = [[1, 2], [3, 4]];
//3d array
let cube: number[][][] = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
