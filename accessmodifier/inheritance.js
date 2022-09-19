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
        this.coordx = x;
    };
    Animal.prototype.setcoordy = function (y) {
        this.coordy = y;
    };
    Animal.prototype.getcoordx = function () {
        return this.coordx;
    };
    Animal.prototype.getcoordy = function () {
        return this.coordy;
    };
    Animal.prototype.makeNoise = function () {
        return " Make a noise";
    };
    Animal.prototype.eat = function () {
        return "I'm eating";
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.makeNoise = function () {
        return "Bark";
    };
    Dog.prototype.returnToowner = function () {
        return "I'm at (".concat(this.coordx, ",").concat(this.coordy, ") location.");
    };
    return Dog;
}(Animal));
var dog = new Animal();
dog.setcoordx(10);
dog.setcoordy(8);
console.log(dog.returnToowner());
