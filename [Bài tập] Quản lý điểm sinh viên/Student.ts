import {StudentManager} from "./StudentManager";
export class Student<T>{
    name:string
    score:number
    next:Student<T>|null=null
    constructor(name:string,score:number) {
        this.name=name
        this.score=score
    }
    getData(){
        return {
            name:this.name,
            score: this.score
        }
    }


}