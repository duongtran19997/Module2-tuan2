"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComparableCircle = void 0;
var Circle_1 = require("./Circle");
var ComparableCircle = /** @class */ (function (_super) {
    __extends(ComparableCircle, _super);
    function ComparableCircle(radius) {
        return _super.call(this, radius) || this;
    }
    ComparableCircle.prototype.compareTo = function (o) {
        if (this.radius > o.radius)
            return 1;
        else if (this.radius < o.radius)
            return -1;
        else
            return 1;
    };
    return ComparableCircle;
}(Circle_1.Circle));
exports.ComparableCircle = ComparableCircle;
