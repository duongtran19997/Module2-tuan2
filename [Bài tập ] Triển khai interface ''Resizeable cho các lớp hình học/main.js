"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var Square_1 = require("./Square");
var Cylinder_1 = require("./Cylinder");
var Geometry = [];
var Circle1 = new Circle_1.Circle('Oval', 15);
var Rectangle1 = new Rectangle_1.Rectangle(5, 10, 'Gray');
var Square1 = new Square_1.Square('Black', 10);
var Cylinder1 = new Cylinder_1.Cylinder('Orange', 10, 5);
Geometry.push(Circle1, Rectangle1, Square1, Cylinder1);
console.log(Circle1.resize(300));
console.log(Circle1.show());
Geometry.forEach(function (obj) {
    console.log(obj.calculateArea());
});
