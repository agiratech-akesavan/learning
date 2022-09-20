"use strict";
// export{}
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    getDetail() {
        return (`the detail of the person name ${this.name} and age is ${this.age}, location is ${this.location}`);
        // return ("the detail of the person name "+ this.name+" and age is "+ this.age +" location is" + this.location);
    }
}
exports.Person = Person;
let mario = new Person();
let john = new Person();
let mackel = new Person();
mario.name = "mario";
mario.age = 25;
mario.location = `12,chennai`;
john.name = "John";
john.age = 35;
john.location = "206,tambaram";
mackel.name = "mackel";
mackel.age = 55;
mackel.location = "107,madurai";
console.log(mario.getDetail());
console.log(john.getDetail());
console.log(mackel.getDetail());
