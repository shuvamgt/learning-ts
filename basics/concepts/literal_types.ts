// Literal Types and CONST

let first_name = "shuvam";

/*
Here first_name is infered as string but why ? 
 It could have been shuvam type as well for example 
 
*/
let firstName:"shuvam"; //This is also valid 
firstName = "shuvam"; // valid data 
firstName = "gautam";  // invalid data 

// As variables can be reassigned so typescript uses a broader type which is string 

//But why would anyone use string value as a type ? 
/*
    Here, Your confusion is valid as variable can be anything of same type at any given point. 

    This doesnot make any sense just by looking at a variable. So, Let's see how it works on const. 
*/
const username: "developer" = 'developer';

const name = "shuvam";
// we learnt about type inference so here ts inferes the type as "shuvam" for const. 
/*
    Variables could be reassigned but the const are not supposed to be ressigned so, here instead of using a broader type string we can use literal types. 
*/

//lets understand how "developer" is different than string 

/* type                Accepted Values
    string              Any string (for eg: "dog", "name",etc)
    "developer"         Only "developer"
*/

//lets see something more of a practical example 

let role :"developer" | "Admin" ="developer";
//here a role has to be a string but it has to be of developer literal or admin literal.
role = "Admin"; // valid
role = "developer"; // valid
role = "manager"; //Invalid

//This help prevent invalid values from entering your application.

//Literals are just strings but it can be any  number ,boolean types
export {}