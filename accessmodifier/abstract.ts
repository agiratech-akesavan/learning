abstract class Employee{
    constructor(private first:string,private second:string){
    }
    fullname():string{
        return `${this.first},${this.second}`
    }
    
    abstract getSalary():number;

    fulldetail(){
        console.log(`this is ${this.fullname()} and I have monthly salary ${this.getSalary()}`);
    }
}

class FullTimeemployee extends Employee{
  
    constructor(first:string,second:string,private salary:number){
        super(first,second);
    }
getSalary():number{
    return this.salary;
}
}


const fullTimeemployee=new FullTimeemployee("john","doe",12000);

fullTimeemployee.fulldetail();