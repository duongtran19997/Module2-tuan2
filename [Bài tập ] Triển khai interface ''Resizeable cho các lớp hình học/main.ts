import {Circle} from "./Circle";
import {Rectangle} from "./Rectangle";
import {Square} from "./Square";
import {Cylinder} from "./Cylinder";
let Geometry = [];
let Circle1 = new Circle('Oval',15)
let Rectangle1 = new Rectangle(5,10,'Gray')
let Square1= new Square('Black',10)
let Cylinder1 = new Cylinder('Orange',10,5)
Geometry.push(Circle1,Rectangle1,Square1,Cylinder1)
console.log(Circle1.resize(300));
console.log(Circle1.show());
Geometry.forEach((obj) => {
    console.log(obj.calculateArea());
});

