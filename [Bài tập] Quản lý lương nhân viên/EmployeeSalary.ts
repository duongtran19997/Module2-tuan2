export class EmployeeSalary<T>{
    month:number
    money:number
    next:EmployeeSalary<T>|null=null
    constructor(month:number,money:number) {
        this.money=money
        this.month=month
    }
    getData(){
        return {
            money:this.money,
            month:this.month
        }
    }

}