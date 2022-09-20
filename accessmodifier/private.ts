
export class Person{
        private name:string;
        private age:number;

        constructor(name:string,age:number){
            this.name=name;
            this.age=age;
        }

        getValue() : string{                             //This position we give the data type or void. void mean the function doesn't return the value.we give the data type like(string or number)the function return the value.
            return `${this.name} ${this.age}`;          //the get value function used to call the class constructor value.
        }

    }

    let person=new Person("kesavan",23);
    console.log(person.getValue());                           //the name is private ke word using so we doesn't call output side of the function.
