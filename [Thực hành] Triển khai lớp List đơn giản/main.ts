import {ArrayList} from "./ArrayList";

interface Post {
    title:string
}
let arrayList=new ArrayList<Post>()
arrayList.add({title:'wtf'})
arrayList.add({title:'omg'})
arrayList.add({title:'crazy'})
console.log(arrayList.container)

