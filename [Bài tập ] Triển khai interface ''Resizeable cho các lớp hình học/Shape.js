"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
var Shape = /** @class */ (function () {
    function Shape(name) {
        this.name = name;
    }
    Shape.prototype.show = function () {
        return "I am a shape. My name is ".concat(this.name);
    };
    return Shape;
}());
exports.Shape = Shape;
