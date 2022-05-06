"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentManager = void 0;
var Student_1 = require("./Student");
var StudentManager = /** @class */ (function () {
    function StudentManager() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    StudentManager.prototype.insertFirstname = function (name, score) {
        var student1 = new Student_1.Student(name, score);
        student1.next = this.head;
        this.head = student1;
    };
    StudentManager.prototype.insertLastname = function (name, score) {
        var student1 = new Student_1.Student(name, score);
        this.tail.next = student1;
        this.tail = student1;
    };
    StudentManager.prototype.showList = function () {
        var studentList = [];
        var currentStudent = this.head;
        while (currentStudent != null) {
            studentList.push(currentStudent);
            currentStudent = currentStudent.next;
        }
        return studentList;
    };
    StudentManager.prototype.totalStudentsFail = function () {
        var studentList = [];
        var currentStudent = this.head;
        while (currentStudent != null) {
            if (currentStudent.score <= 5) {
                studentList.push(currentStudent);
            }
            currentStudent = currentStudent.next;
        }
        return studentList;
    };
    StudentManager.prototype.listStudentMaxScore = function () {
        var studentsMaxScore = [];
        var currentStudent = this.head;
        var max = currentStudent.score;
        while (currentStudent != null) {
            if (currentStudent.next.score > max) {
                max = currentStudent.next.score;
            }
            currentStudent = currentStudent.next;
        }
        currentStudent = this.head;
        while (currentStudent !== null) {
            if (currentStudent.score = max) {
                studentsMaxScore.push(currentStudent);
            }
        }
        return studentsMaxScore;
    };
    StudentManager.prototype.findByName = function (name) {
        var currentnode = this.head;
        while (currentnode !== null) {
            if (currentnode.name === name) {
                return currentnode;
            }
            currentnode = currentnode.next;
        }
    };
    return StudentManager;
}());
exports.StudentManager = StudentManager;
