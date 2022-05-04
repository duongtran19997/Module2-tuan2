import {Rectangle} from "./Rectangle";
import {Resizeable} from "./Shape";

export class Square extends Rectangle implements Resizeable{
    constructor(name: string,
                width: number) {
        super(width, width, name);
    }
}