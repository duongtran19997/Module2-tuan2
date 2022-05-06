import {EmployeeSalary} from "./EmployeeSalary";
import {employeeSalaryList} from "./employeesalaryList";
let employeeSalaryList1 = new employeeSalaryList()
employeeSalaryList1.addSalary(12,20000000)
employeeSalaryList1.addSalary(2,240000000)
employeeSalaryList1.addSalary(1,30000000)
employeeSalaryList1.addSalary(10,201000000)
console.log(employeeSalaryList1.maxSalary());
// console.log(employeeSalaryList1.showListSalary());