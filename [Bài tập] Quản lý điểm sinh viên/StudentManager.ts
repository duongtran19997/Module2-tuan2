import {Student} from "./Student";

export class StudentManager<T> {
    head: Student<T> | null
    tail: Student<T> | null
    size: number

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    insertFirstname(name: string, score: number) {
        let student1: Student<T> = new Student(name, score)
        student1.next = this.head
        this.head = student1
    }

    insertLastname(name: string, score: number) {
        let student1: Student<T> = new Student<T>(name, score)
        this.tail.next = student1
        this.tail = student1;
    }

    showList() {
        let studentList: Student<T>[] = []
        let currentStudent = this.head
        while (currentStudent != null) {
            studentList.push(currentStudent)
            currentStudent = currentStudent.next
        }
        return studentList;
    }

    totalStudentsFail() {
        let studentList: Student<T>[] = []
        let currentStudent = this.head
        while (currentStudent != null) {
            if (currentStudent.score <= 5) {
                studentList.push(currentStudent)
            }
            currentStudent = currentStudent.next
        }
        return studentList
    }

    listStudentMaxScore() {
        let studentsMaxScore: Student<T>[] = []
        let currentStudent = this.head
        let max = currentStudent.score
        while (currentStudent != null) {
            if (currentStudent.next.score > max) {
                max = currentStudent.next.score
            }
            currentStudent = currentStudent.next
        }
        currentStudent = this.head
        while (currentStudent !== null) {
            if (currentStudent.score = max) {
                studentsMaxScore.push(currentStudent)
            }
            currentStudent=currentStudent.next
        }
        return studentsMaxScore
    }
    findByName(name:string){
        let currentnode=this.head;
        while (currentnode!==null){
            if (currentnode.name===name){
                return currentnode
            }
            currentnode=currentnode.next
        }

    }
}
