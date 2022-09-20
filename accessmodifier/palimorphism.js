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
    Hero.prototype.attack = function () {
        console.log("I'm attacking");
    };
    Hero.prototype.move = function () {
        console.log("I'm moving");
    };
    Hero.prototype.eat = function () {
        console.log("eating");
    };
    return Hero;
}());
var Archer = /** @class */ (function (_super) {
    __extends(Archer, _super);
    function Archer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Archer.prototype.atteck = function () {
        _super.prototype.attack.call(this);
        console.log("firing an arrow");
    };
    return Archer;
}(Hero));
var Mage = /** @class */ (function (_super) {
    __extends(Mage, _super);
    function Mage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mage.prototype.attack = function () {
        _super.prototype.attack.call(this);
        console.log("throwing a positon");
    };
    return Mage;
}(Hero));
var Soldier = /** @class */ (function (_super) {
    __extends(Soldier, _super);
    function Soldier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Soldier.prototype.attack = function () {
        _super.prototype.attack.call(this);
        console.log("ready to attacking");
    };
    return Soldier;
}(Hero));
var Order = /** @class */ (function () {
    function Order() {
    }
    Order.prototype.setvalue = function (heros) {
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
var mage = new Mage();
var heros = [archer, soldier, mage];
var order = new Order();
order.setvalue(heros);
order.attack();
var Thief = /** @class */ (function (_super) {
    __extends(Thief, _super);
    function Thief() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Thief.prototype.attack = function () {
        console.log("pick pocket");
    };
    return Thief;
}(Hero));
var thief = new Thief();
var heros2 = [thief, soldier];
order.setvalue(heros2);
order.attack();
