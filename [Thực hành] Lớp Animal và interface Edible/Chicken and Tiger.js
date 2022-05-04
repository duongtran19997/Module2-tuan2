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
exports.Orange = exports.Apple = exports.Tiger = exports.Chicken = void 0;
var AbstractClass_1 = require("./AbstractClass");
var AbstractClass_2 = require("./AbstractClass");
var Chicken = /** @class */ (function (_super) {
    __extends(Chicken, _super);
    function Chicken(name) {
        return _super.call(this, name) || this;
    }
    Chicken.prototype.makeSound = function () {
        return "cuk cuk";
    };
    Chicken.prototype.howtoEat = function () {
        return 'be eaten';
    };
    return Chicken;
}(AbstractClass_1.Animal));
exports.Chicken = Chicken;
var Tiger = /** @class */ (function (_super) {
    __extends(Tiger, _super);
    function Tiger(name) {
        return _super.call(this, name) || this;
    }
    Tiger.prototype.makeSound = function () {
        return "ROAR";
    };
    return Tiger;
}(AbstractClass_1.Animal));
exports.Tiger = Tiger;
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    Apple.prototype.howtoEat = function () {
        return "be Eat";
    };
    return Apple;
}(AbstractClass_2.Fruit));
exports.Apple = Apple;
var Orange = /** @class */ (function (_super) {
    __extends(Orange, _super);
    function Orange(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    Orange.prototype.howtoEat = function () {
        return "be Eat";
    };
    return Orange;
}(AbstractClass_2.Fruit));
exports.Orange = Orange;
var animals = [];
animals[0] = new Tiger('Asia Tiger');
animals[1] = new Chicken('Dong Tao Chicken');
animals.forEach(function (item, index) {
    console.log(item.makeSound());
    if (item instanceof Chicken) {
        console.log(item.howtoEat());
    }
});
