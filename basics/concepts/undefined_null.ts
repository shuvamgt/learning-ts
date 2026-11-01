//null and undefined in typescript 
/*
    if a variable is declared but not initialized then it is undefined
    if a variable is declared and initialized with null then it is null
*/

let age = null;
console.log(age); // null
let lastName;
console.log(lastName); // undefined


//we can use union types to allow a variable to accept null or undefined values along with other types.

let userName: string | null = "shuvamgt";
userName = null; // valid
userName = undefined; // invalid
console.log(userName); // null

let firstName: string | undefined;
firstName = undefined; // valid
firstName = "shuvamgt"; // valid
fristName = null; // invalid
console.log(firstName); // undefined

//What about strictNullChecks?
/*
{
  "compilerOptions": {
    "strictNullChecks": true
  }
}
When enabled, you cannot freely assign null or undefined to a variable expecting a string.
*/
