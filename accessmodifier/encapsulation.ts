// export{}

class Player{
    private health:number;
    private speed:number;
    

    setHealth(health:number){
        this.health=health;
    }

    setSpeed(speed:number){
        this.speed=speed;
    }

    getHealth(){
        return this.health;
    }

    getSpeed(){
        return this.speed;
    }
    

}





const mari=new Player();

mari.setHealth(8);
mari.setSpeed(2);
console.log(`mario has health is ${mari.getHealth()}out of the 10`);
console.log(`${mari.getSpeed()}`);