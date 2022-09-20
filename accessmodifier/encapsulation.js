"use strict";
// export{}
class Player {
    setHealth(health) {
        this.health = health;
    }
    setSpeed(speed) {
        this.speed = speed;
    }
    getHealth() {
        return this.health;
    }
    getSpeed() {
        return this.speed;
    }
}
const mari = new Player();
mari.setHealth(8);
mari.setSpeed(2);
console.log(`mario has health is ${mari.getHealth()}out of the 10`);
console.log(`${mari.getSpeed()}`);
