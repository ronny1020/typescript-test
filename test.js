"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = "Hello World!";
var username = "Ronny";
console.log(username, ":", message);
// test
var check = true;
var num = 3;
var name = "Tom";
var sentence = "My name is " + name + ",\ntesting typescript.";
console.log(sentence);
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var list3 = ["1", 2, false];
var color;
(function (color) {
    color[color["red"] = 5] = "red";
    color[color["green"] = 6] = "green";
    color[color["blue"] = 7] = "blue";
})(color || (color = {}));
;
var g = color.green;
console.log(g);
var any_test = 10;
any_test = true;
any_test = "test";
var check1 = true;
var multiType;
multiType = 3;
multiType = "hi";
function add(num1, num2) {
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
}
console.log(add(3, 5));
console.log(add(3));
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var batman = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};
fullName(batman);
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Hello " + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee('Peter');
console.log(emp1.employeeName);
emp1.greet();
var manager = /** @class */ (function (_super) {
    __extends(manager, _super);
    function manager(mangerName) {
        return _super.call(this, mangerName) || this;
    }
    return manager;
}(Employee));
