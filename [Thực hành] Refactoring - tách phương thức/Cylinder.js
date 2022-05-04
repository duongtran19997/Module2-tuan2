"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cylinder = void 0;
var Cylinder = /** @class */ (function () {
    function Cylinder() {
    }
    Cylinder.getBaseArea = function (radius, height) {
        var baseArea = Math.PI * radius * radius;
        return baseArea;
    };
    Cylinder.getPerimeter = function (radius, height) {
        var perimeter = 2 * Math.PI * radius;
        return perimeter;
    };
    Cylinder.getVolume = function (radius, height) {
        var volume = Cylinder.getBaseArea(radius, height) * height + 2 * Cylinder.getPerimeter(radius, height);
        return volume;
    };
    return Cylinder;
}());
exports.Cylinder = Cylinder;
