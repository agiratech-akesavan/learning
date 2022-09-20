class Hero{

    wait(){
        console.log("wait for the correct to time.")
    }
    attack(){
        console.log("attacking");
    }

    success(){
        console.log("definitely won it");
    }
}

class Archer extends Hero{
    attack(){
        super.attack();
        console.log("using the arrows");
    }
}

class Soldier extends Hero{

    attack(){
        super.attack();
        console.log("using gun");
    }
}

class Maga extends Hero{

    attack(){
        super.attack();
        console.log("attacked by the troops");
    }
    
}

class Order{

    private heros: Hero[];

    setHero(heros:Hero[]){
        this.heros=heros;
    }

    attack():void{
        for(let hero of this.heros){
            hero.attack();
        }
    }
}

const archer:Hero=new Archer();
const soldier:Hero=new Soldier();
const maga:Hero=new Maga();

const heros:Hero[]=[archer,soldier,maga];
const order=new Order();

order.setHero(heros);
order.attack();


class Thief extends Hero{

    attack() {
        super.attack();
        console.log("pick pocket");
    }

}


const thief:Hero=new Thief();
const theif2:Hero[]=[thief];
const order2=new Order();

order2.setHero(theif2);         // polymorphism in the value is super class name used to give the type of the sub of the sub class.
order2.attack();                //without any change of the super class and sub class we add the another sub class is called the polymorphism.                        