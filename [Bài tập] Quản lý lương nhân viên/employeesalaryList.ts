import {EmployeeSalary} from "./EmployeeSalary";

export class employeeSalaryList<T> {
    head: EmployeeSalary<T> | null
    tail: EmployeeSalary<T> | null
    size: number

    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    addSalary(month, money) {
        let employeeSalary: EmployeeSalary<any> = new EmployeeSalary(month, money);
        if(this.tail!=null){
            this.tail.next = employeeSalary
            this.tail = employeeSalary
       }
        else{
            // employeeSalary.next=this.head
            this.head = employeeSalary
            // this.tail.next=employeeSalary
            this.tail=employeeSalary
        }
        this.size++
    }

    showListSalary() {
        let listSalary: EmployeeSalary<T>[] = [];
        let employeeSalary = this.head
        while (employeeSalary != null) {
            listSalary.push(employeeSalary)
            employeeSalary = employeeSalary.next
        }
        return listSalary
    }

    totalSalary() {
        let totalSalary = 0
        let employeeSalary = this.head
        while (employeeSalary != null) {
            totalSalary += employeeSalary.money
        }
        return totalSalary
    }

    maxSalary() {
        let employeeSalaryMaxList: any[] = [];
        let employeeSalary = this.head
        let max = employeeSalary.money;
        while (employeeSalary != null) {
            if (max < employeeSalary.money) {
                max = employeeSalary.money

            }
            // employeeSalary.money = employeeSalary.next.money
            employeeSalary = employeeSalary.next
        }
        employeeSalary = this.head
        while (employeeSalary != null) {
            if (employeeSalary.money == max) {
                employeeSalaryMaxList.push(employeeSalary.getData())
            }
            employeeSalary = employeeSalary.next
        }
        return employeeSalaryMaxList
    }
}