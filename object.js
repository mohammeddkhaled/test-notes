import { r } from "./variables.js";

const obj1={
    name: "John",
    age: 30,
    city: "New York",
    getAge: function(){
        return this.age
    }
}
console.log(obj1['city']);

//data abstraction,encapsulation, inheritance, polymorphism


//class
class Person {
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
    getAge(){
        return this.age;
    }
    setName(newName){
        this.name=newName;
    }
}

const tajamul=new Person('tajamul',20);

console.log(tajamul.getAge());

let string1=new String("")
let string="hello world"
console.log(r);
