import {Animal} from "./AbstractClass";
import {Edible} from "./AbstractClass";
import {Fruit} from "./AbstractClass";

export class Chicken extends Animal implements Edible {
    makeSound(): string {
        return "cuk cuk";
    }

    howtoEat(): string {
        return 'be eaten';
    }

    constructor(name: string) {
        super(name);
    }
}
export class Tiger extends Animal {
    makeSound(): string {
        return "ROAR";
    }
    constructor(name: string) {
        super(name);
    }
}
export class Apple extends Fruit{
    name:string
    constructor(name:string) {
        super();
        this.name=name
    }
    howtoEat(): string {
        return "be Eat";
    }
}
export class Orange extends Fruit{
    name:string
    constructor(name:string) {
        super();
        this.name=name
    }
    howtoEat(): string {
        return "be Eat";
    }
}
let animals = []

animals[0] = new Tiger('Asia Tiger')
animals[1] = new Chicken('Dong Tao Chicken');

animals.forEach((item, index) => {
    console.log(item.makeSound())
    if(item instanceof Chicken){
        console.log(item.howtoEat());
    }

})