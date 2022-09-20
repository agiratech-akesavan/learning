"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getValue() {
        return `${this.name} ${this.age}`; //the get value function used to call the class constructor value.
    }
}
exports.Person = Person;
let person = new Person("kesavan", 23);
console.log(person.getValue()); //the name is private ke word using so we doesn't call output side of the function.
