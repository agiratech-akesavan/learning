// export{}
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.getDetail = function () {
        return ("the detail of the person name ".concat(this.name, " and age is ").concat(this.age, ", location is ").concat(this.location));
    };
    return Person;
}());
var mario = new Person();
var john = new Person();
var mackel = new Person();
mario.name = "mario";
mario.age = 25;
mario.location = "12,chennai";
john.name = "John";
john.age = 35;
john.location = "206,tambaram";
mackel.name = "mackel";
mackel.age = 55;
mackel.location = "107,madurai";
console.log(mario.getDetail());
console.log(john.getDetail());
console.log(mackel.getDetail());
