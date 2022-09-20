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
var Hero = /** @class */ (function () {
    function Hero() {
    }
    Hero.prototype.wait = function () {
        console.log("wait for the correct to time.");
    };
    Hero.prototype.attack = function () {
        console.log("attacking");
    };
    Hero.prototype.success = function () {
        console.log("definitely won it");
    };
    return Hero;
}());
var Archer = /** @class */ (function (_super) {
    __extends(Archer, _super);
    function Archer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Archer.prototype.attack = function () {
        _super.prototype.attack.call(this);
        console.log("using the arrows");
    };
    return Archer;
}(Hero));
var Soldier = /** @class */ (function (_super) {
    __extends(Soldier, _super);
    function Soldier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Soldier.prototype.attack = function () {
        _super.prototype.attack.call(this);
        console.log("using gun");
    };
    return Soldier;
}(Hero));
var Maga = /** @class */ (function (_super) {
    __extends(Maga, _super);
    function Maga() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Maga.prototype.attack = function () {
        _super.prototype.attack.call(this);
        console.log("attacked by the troops");
    };
    return Maga;
}(Hero));
var Order = /** @class */ (function () {
    function Order() {
    }
    Order.prototype.setHero = function (heros) {
        this.heros = heros;
    };
    Order.prototype.attack = function () {
        for (var _i = 0, _a = this.heros; _i < _a.length; _i++) {
            var hero = _a[_i];
            hero.attack();
        }
    };
    return Order;
}());
var archer = new Archer();
var soldier = new Soldier();
var maga = new Maga();
var heros = [archer, soldier, maga];
var order = new Order();
order.setHero(heros);
order.attack();
var Thief = /** @class */ (function (_super) {
    __extends(Thief, _super);
    function Thief() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Thief.prototype.attack = function () {
        _super.prototype.attack.call(this);
        console.log("pick pocket");
    };
    return Thief;
}(Hero));
var thief = new Thief();
var theif2 = [thief];
var order2 = new Order();
order2.setHero(theif2); //polymorphism. polymorphism in the value is super class name used to give the type of the sub of the sub class.
order2.attack(); //without any change of the super class and sub class we add the another sub class is called the                        
