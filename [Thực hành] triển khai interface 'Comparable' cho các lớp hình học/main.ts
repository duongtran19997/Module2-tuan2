import {Comparable} from "./Circle";
import {Circle} from "./Circle";
import {ComparableCircle} from "./ComparableCircle";
let Circles = []
Circles[0]= new ComparableCircle(10)
Circles[1]= new ComparableCircle(13)
Circles[2]= new ComparableCircle(15)
let result = Circles[1].compareTo(Circles[2]);

if(result == 1){
    console.log("The current circle is larger.");
}else{
    console.log("The current circle is smaller.");
}