"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeSalary = void 0;
var EmployeeSalary = /** @class */ (function () {
    function EmployeeSalary(month, money) {
        this.next = null;
        this.money = money;
        this.month = month;
    }
    EmployeeSalary.prototype.getData = function () {
        return {
            money: this.money,
            month: this.month
        };
    };
    return EmployeeSalary;
}());
exports.EmployeeSalary = EmployeeSalary;
