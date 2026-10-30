//Type checking is the process of checking whether your code follows  the type rules you've defined.

/*here if you look at this code, the age was defined to be a number but in the next line
I updated the value into another data type which is string and it gives me an error  
Type 'string' is not assignable to type 'number'.ts

*/
let username: string = "Shuvam";
let age: number = 21;
age = "twenty-one"; // this causes an error as the age is number type.It is called Type Error


/*
Difference betweeen typechecking and compilation 

type checking
=> it checks whether our code is following the type rules that we have defined 

compilation 
=> It translate / converts the TS code into JS code.


Now there is a thing to understand. 
If Typescript finds a type error. Then by default it will still generate the JS file.
(Note: Default behaviour of TS is, Even if there is a type error in the ts file still it would be compiled and will emit JS File)

To prevent generating the js file Typescript provides a compiler option called noEmitOnError

It controls whether javascript output should be generated when errors are in present.
{
  "compilerOptions": {
    "noEmitOnError": true //in tsconfig.json
  }
}

With this setting enabled:
- If there are type errors, JavaScript output is not generated.
- If there are no errors, JavaScript output can be generated.
*/ 




export {}