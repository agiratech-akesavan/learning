var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getValue = function () {
        return "".concat(this.name, " ").concat(this.age); //the get value function used to call the class constructor value.
    };
    return Person;
}());
var person = new Person("kesavan", 23);
console.log(person.getValue()); //the name is private ke word using so we doesn't call output side of the function.
