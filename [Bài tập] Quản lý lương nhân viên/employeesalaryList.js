"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeeSalaryList = void 0;
var EmployeeSalary_1 = require("./EmployeeSalary");
var employeeSalaryList = /** @class */ (function () {
    function employeeSalaryList() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    employeeSalaryList.prototype.addSalary = function (month, money) {
        var employeeSalary = new EmployeeSalary_1.EmployeeSalary(month, money);
        if (this.tail != null) {
            this.tail.next = employeeSalary;
            this.tail = employeeSalary;
        }
        else {
            // employeeSalary.next=this.head
            this.head = employeeSalary;
            // this.tail.next=employeeSalary
            this.tail = employeeSalary;
        }
        this.size++;
    };
    employeeSalaryList.prototype.showListSalary = function () {
        var listSalary = [];
        var employeeSalary = this.head;
        while (employeeSalary != null) {
            listSalary.push(employeeSalary);
            employeeSalary = employeeSalary.next;
        }
        return listSalary;
    };
    employeeSalaryList.prototype.totalSalary = function () {
        var totalSalary = 0;
        var employeeSalary = this.head;
        while (employeeSalary != null) {
            totalSalary += employeeSalary.money;
        }
        return totalSalary;
    };
    employeeSalaryList.prototype.maxSalary = function () {
        var employeeSalaryMaxList = [];
        var employeeSalary = this.head;
        var max = employeeSalary.money;
        while (employeeSalary != null) {
            if (max < employeeSalary.money) {
                max = employeeSalary.money;
            }
            // employeeSalary.money = employeeSalary.next.money
            employeeSalary = employeeSalary.next;
        }
        employeeSalary = this.head;
        while (employeeSalary != null) {
            if (employeeSalary.money == max) {
                employeeSalaryMaxList.push(employeeSalary.getData());
            }
            employeeSalary = employeeSalary.next;
        }
        return employeeSalaryMaxList;
    };
    return employeeSalaryList;
}());
exports.employeeSalaryList = employeeSalaryList;
