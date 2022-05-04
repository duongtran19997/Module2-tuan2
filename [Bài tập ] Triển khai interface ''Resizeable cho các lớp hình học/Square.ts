import {Rectangle} from "./Rectangle";
import {Colorable, Resizeable} from "./Shape";

export class Square extends Rectangle implements Resizeable,Colorable{
    constructor(name: string,
                width: number) {
        super(width, width, name);
    }
    howtoColor() {
        return ' Color all four sides..'
    }
}