abstract class employee{

    constructor(private first:string,private second:string){
        this.first=first;
        this.second=second;
    }
    abstract getsalary():number;

    fullname():string{
        return `${this.first} ${this.second}`;
     }

     fullDetail(){
        return `this is ${this.fullname()},in working at the company,my salary is ${this.getsalary()}`;
     }
}

class Fultimeemployee extends employee{

    constructor(first: string, last: string, private salary: number) {
        super(first, last);
    }
    getsalary(): number {
        return this.salary;
    }
}

let john = new Fultimeemployee("john","doe",12000);

console.log(john.fullDetail())