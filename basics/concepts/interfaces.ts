//Interfaces
//It is a way to define the structure of an object. It is a contract that defines the properties and methods that an object must have. Interfaces are used to define the shape of an object, and they can be implemented by classes or objects.

interface Person{
    name: string;
    age: number;
}
// we can extend the interface to create a new interface that inherits the properties of the original interface.
//This allows us to create more specific types without having to duplicate code.
interface Employee extends Person{
    employeeId: number;
    email:string
}



let person1 : Person ={
    name: "John",
    age: 30
}

let person2 : Person ={
    name: "Jane",
    age: 25
}


let employee1 : Employee ={
    name: "Mike",
    age: 35,
    employeeId: 123,
    email: "mike@example.com"
}