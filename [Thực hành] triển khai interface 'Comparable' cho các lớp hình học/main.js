"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ComparableCircle_1 = require("./ComparableCircle");
var Circles = [];
Circles[0] = new ComparableCircle_1.ComparableCircle(10);
Circles[1] = new ComparableCircle_1.ComparableCircle(13);
Circles[2] = new ComparableCircle_1.ComparableCircle(15);
var result = Circles[1].compareTo(Circles[2]);
if (result == 1) {
    console.log("The current circle is larger.");
}
else {
    console.log("The current circle is smaller.");
}
