//Enums 
//It is the set of named constants 
//Enums are used to define a collection of related values that can be numeric or string values. They provide a way to give more meaningful names to these values, making the code more readable and maintainable.


enum Role {
    ADMIN = "ADMIN",
    USER = "USER",
    SuperAdmin = "SUPERADMIN"
}

enum Role{
    ADMIN, // BY DEFAULT IT WILL BE 0
    USER, // BY DEFAULT IT WILL BE 1
    SuperAdmin // BY DEFAULT IT WILL BE 2

}


//WE CAN ASSIGN VALUE TO AN ENUM MEMBER JUST LIKE HOW WE HAVE ASSIGEND ABOVE IN 6 NUMBER

let role:Role   = Role.ADMIN;
role = Role.USER; //valid 
role = "Support "; //invalid because it is not part of the enum