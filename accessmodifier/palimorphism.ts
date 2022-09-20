class Hero{

    attack(){
        console.log("I'm attacking");
    }

    move(){
        console.log("I'm moving")
    }

    eat(){
        console.log("eating");
    }
}

class Archer extends Hero{

    atteck(){
        super.attack();
        console.log("firing an arrow");
    }
}

class Mage extends Hero {
    attack(): void {
        super.attack();
        console.log("throwing a positon");
    }
}

class Soldier extends Hero {
    attack(): void {
        super.attack();
        console.log("ready to attacking");
    }
}

class Order{

        private heros:Hero[];

        setvalue(heros:Hero[]){
            this.heros=heros;
        }

        attack(){
            for(let hero of this.heros){
                hero.attack();
            }
        }

}


const archer=new Archer();
const soldier=new Soldier();
const mage=new Mage();

const heros:Hero[]=[archer,soldier,mage];

const order=new Order();
order.setvalue(heros);
order.attack();

class Thief extends Hero{
    attack(): void {
        console.log("pick pocket");
    }
}

const thief=new Thief()

const heros2:Hero[]=[thief,soldier];

order.setvalue(heros2);
order.attack();
