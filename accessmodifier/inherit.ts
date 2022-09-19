class Animal{

    protected coordination_x:number;
    protected coordination_y:number;

    setcoordx(x:number){
        this.coordination_x=x;
    }

    setcoordy(y:number){
        this.coordination_y=y;
    }

    getcoordx(){
        this.coordination_x;
    }

    getcoordy(){
        console.log(this.coordination_x);
    }

    makeNoise(){
        console.log(` Make a noise`);
    }
    
    eat(){
        console.log(`I'm eating`);
    }
    returnToowner(){
        console.log("location not delcared");
    }
}

class Dog extends Animal{

    makeNoise() {
        console.log(`Bark`);
    }

    returnToowner(){
        console.log(`I'm at (${this.coordination_x},${this.coordination_y}) location.`)
    }
}

class Ratwiller extends Dog{

    makeNoise(){
        console.log("too high");
    }

}

class Cat extends Animal{
}

let dog=new Dog();
let cat=new Cat();

let ratwiller=new Ratwiller();

dog.setcoordx(10);
dog.setcoordy(8);

cat.makeNoise();

dog.makeNoise();
dog.returnToowner();

ratwiller.makeNoise();