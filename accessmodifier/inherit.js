var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.setcoordx = function (x) {
        this.coordination_x = x;
    };
    Animal.prototype.setcoordy = function (y) {
        this.coordination_y = y;
    };
    Animal.prototype.getcoordx = function () {
        this.coordination_x;
    };
    Animal.prototype.getcoordy = function () {
        console.log(this.coordination_x);
    };
    Animal.prototype.makeNoise = function () {
        console.log(" Make a noise");
    };
    Animal.prototype.eat = function () {
        console.log("I'm eating");
    };
    Animal.prototype.returnToowner = function () {
        console.log("location not delcared");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.makeNoise = function () {
        console.log("Bark");
    };
    Dog.prototype.returnToowner = function () {
        console.log("I'm at (".concat(this.coordination_x, ",").concat(this.coordination_y, ") location."));
    };
    return Dog;
}(Animal));
var Ratwiller = /** @class */ (function (_super) {
    __extends(Ratwiller, _super);
    function Ratwiller() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ratwiller.prototype.makeNoise = function () {
        console.log("too high");
    };
    return Ratwiller;
}(Dog));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Cat;
}(Animal));
var dog = new Dog();
var cat = new Cat();
var ratwiller = new Ratwiller();
dog.setcoordx(10);
dog.setcoordy(8);
cat.makeNoise();
dog.makeNoise();
dog.returnToowner();
ratwiller.makeNoise();
