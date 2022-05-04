import {Resizeable, Shape} from "./Shape";

export class Rectangle extends Shape implements Resizeable{
    width: number;
    height: number;

    constructor(width: number,
                height: number,
                name: string) {
        super(name);
        this.width = width;
        this.height = height;
    }
    resize(percent: number) {
        let a=this.width * percent/100
        let b=this.height * percent/100
        return [a,b]
    }

    calculateArea(): number {
        return this.width * this.height;
    }

    calculatePerimeter(): number {
        return (this.width + this.height) * 2;
    }
}