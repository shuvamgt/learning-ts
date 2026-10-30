// TypeScript compilation example

// This is the basic ts way of writing code which is mentioning the types that a variable stores 
let username: string = "Shuvam";
let age: number = 21;

console.log(username);
console.log(age);
//Its similar to js as Typescript is the superset of js, which means it supports javascript syntax and adds static type checking on top of it  

//So, ts has its own compiler for translating code into js and this process is called compilation

//Compilation simply is the process of translating code from one form to another

//After compilation a js file is generated inside which we have the translated (compiled) code.

/*In the compiled code, we wont find the type type annotations 
let username: string = "Shuvam";(ts)  --compiled to ----> let username = "Shuvam";(js)

Type Annotations are removed during the compilation

Why the type annotations are removed? 
because the js doesnot understand typescript's type annotation syntax
the type annotations are purely the typescript understanding not javascripts

Type annotations are used for compile time type checking So, it is not necessary in the js code as javascript doesnot use them.
*/
export {}