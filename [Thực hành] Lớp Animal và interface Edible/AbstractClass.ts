export abstract class Animal {
    constructor(private name) {
    }
    abstract makeSound(): string
}

export interface Edible{
    howtoEat():string
}
export abstract class Fruit implements Edible {
    abstract howtoEat(): string
}

