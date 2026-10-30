//Type inference 

/*
Until now we have expicitly defined types like this 
 */
let name: string = "";
//This is the type annotation which is explicitly provided

/*
But typescript also supports type inferece
In simple words , Without providing any type annotation, TS assumes/sets types according to the value a variable is given during declaration/assignment operation.
*/
let age = 10;
//Here just guess what's the data type of age ?
/*

-> If you have guessed it to be any other type apart from number then you are a fool for now 
but if you have guessed it correct then you are smart. 

Just like how you can know that age has to be a number type as it is assigned with a number(10) 
In the same way it can also infered it to be a number type 
 */
//If you could not guess the correct answer then let try again. 
//(I have blessed you with a chance.) 

let isUser = true;
//Looking at this statement if you could say the isUser is a boolean type then you are getting smarter.


// Now Lets move forward with this 
let firstName;
let lastName;

/* 
    Look at the code
    Guess what type will the Typescript Infer to these (firstName and lastName ) variable 
    
    
    If you have guessed string type for both the names by just looking at their identifier then you are still thinking stupid because typescript cannot or any programming language until this date cannot infer a type based on the name of the identifier.


    So, what do you think, the typescript will infer these variable 

    ....1....2....3 taaaddaaa
    "any" type 
    If there is no value assigned during the declaration then typescript exclusive "any" type will be infered to the variable.

    And by saying any now these vairable can hold any data type like string number boolean etc
 */

// lets see one example 

firstName = "Shuvam" //valid 
lastName = "Gautam" // valid 

firstName = 1 // valid 
lastName = 0 // valid 


// just put you cursor just above the identifier in the vs code you will see it is infered with any type 

/*
    Now you might say Its basically what js does from our view point right ? 
    Like you can re assign any data with any variable right ? 
    yes but no technially js doesnot have "any " type infact "any" type is TS exclusive but looking at js we feel its the same thing happening. 


    coming back to the point, This what happens when no type rule is defined during assignment or declaration. 

    BUT BUT BUTT!
    TS can be configured from tsconfig.json to actually not Implicitly assign type "any" when the type rule is not defined during declaration or assignement. 

    With {noImplicitAny: false}, your example generally infers any.


With {noImplicitAny: true}, TypeScript reports an error
when it has to implicitly assign the any type.

But why doesn't TypeScript simply stop checking the file?

Because TypeScript doesn't stop at the first error.
It reports the error and continues checking other statements
to identify additional errors.
*/



export { }