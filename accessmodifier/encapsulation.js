// export{}
var Player = /** @class */ (function () {
    function Player() {
    }
    Player.prototype.setHealth = function (health) {
        this.health = health;
    };
    Player.prototype.setSpeed = function (speed) {
        this.speed = speed;
    };
    Player.prototype.getHealth = function () {
        return this.health;
    };
    Player.prototype.getSpeed = function () {
        return this.speed;
    };
    return Player;
}());
var mari = new Player();
mari.setHealth(8);
mari.setSpeed(2);
console.log("mario has health is ".concat(mari.getHealth(), "out of the 10"));
console.log("".concat(mari.getSpeed()));
