Type inference
Look at this code:
let username = "Shuvam";
let age = 21;
let isDeveloper = true;


Answer these questions:
1. What types does TypeScript infer?
2. Can you assign 25 to age?
3. Can you assign "Twenty" to age?
4. Do you need to explicitly specify types here? Why?


Answers
1 -> username : string 
    age : number 
    isDeveloper : boolean

2 -> Yes, As it is of same type ( number)
3-> No, As it is of different type 
(variable: number x value : string)

4-> No need to explicitly specify types here as typescript can infer types according to the value assigned to it. 