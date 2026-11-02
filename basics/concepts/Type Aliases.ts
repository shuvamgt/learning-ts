// Type Aliases

//-> Helps to create a custom type instead of using the complex type directly in the code
//we can simply create a type alias and re-use it in the code
type UserId = string | number;
let user_id: string | number = 234;
//instead of using the complex type directly in the code, we can create a type alias and re-use it in the code

let userId: UserId = 123; // valid
userId = "abc"; // valid
userId = true; // invalid, boolean is not assignable to type 'UserId'

let userId2: UserId = 456; // valid
//I created it once and I can now reUse it where ever I want to use it in the code. 


//We can also create a type alias for an object type
type User = {
    id: UserId;
    name: string;
    age: number;
    email: string; 
}

//Now any object that we create with the type User will have to follow the structure defined in the type alias. It may have more properties but it must have at least the properties defined in the type alias.

let user1: User = {
    id: 1,
    name: "John Doe",
    age: 30,
    email: ""} // vaild 

let user2: User = {
    id: "abc",
    name: "Jane Doe",
    age: 25,
} // invalid as email property is missing.

//but we can also make that property optional by using the ? operator in the type alias. 
type Animal= {
    name:string,
    age?:number //optional property
}

let animal1: Animal = {
    name: "Dog",
    age: 5
} // valid


//we can also make a property readonly by using the readonly keyword in the type alias.
type Car = {
    readonly brand: string;
    model: string;
}

let car1:Car = {
    brand:"Toyota",
    model:"Camry"
}

//i will be able to change the model property but not the brand property as it is readonly.
car1.model = "Corolla"; // valid
car1.brand = "Honda"; // invalid, cannot assign to 'brand' because it is a read-only property.
//It will throw an error if we try to change the value of the readonly property.

//We can extend the type alias to create a new type alias that inherits the properties of the original type. 

type Vehicle = Car & {
    wheels: number;
}

let car3: Vehicle = {
    brand: "Honda",
    model: "Civic",
    wheels: 4
}
let bike1: Vehicle = {
    brand: "Yamaha",
    model: "R15",
    wheels: 2
}
