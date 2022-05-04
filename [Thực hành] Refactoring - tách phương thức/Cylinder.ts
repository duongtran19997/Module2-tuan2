export class Cylinder {

    public static getBaseArea(radius: number, height: number):number{
        let baseArea: number = Math.PI * radius * radius;
        return baseArea
    }
    public static getPerimeter(radius: number, height: number):number{
        let perimeter: number = 2 * Math.PI * radius;
        return perimeter
    }
    public static getVolume(radius: number, height: number): number {
        let volume: number =  Cylinder.getBaseArea(radius,height) * height + 2 * Cylinder.getPerimeter(radius,height);
        return volume;
    }
}