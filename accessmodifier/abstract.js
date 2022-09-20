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
var employee = /** @class */ (function () {
    function employee(first, second) {
        this.first = first;
        this.second = second;
        this.first = first;
        this.second = second;
    }
    employee.prototype.fullname = function () {
        return "".concat(this.first, " ").concat(this.second);
    };
    employee.prototype.fullDetail = function () {
        return "this is ".concat(this.fullname(), ",in working at the company,my salary is ").concat(this.getsalary());
    };
    return employee;
}());
var Fultimeemployee = /** @class */ (function (_super) {
    __extends(Fultimeemployee, _super);
    function Fultimeemployee(first, last, salary) {
        var _this = _super.call(this, first, last) || this;
        _this.salary = salary;
        return _this;
    }
    Fultimeemployee.prototype.getsalary = function () {
        return this.salary;
    };
    return Fultimeemployee;
}(employee));
var john = new Fultimeemployee("john", "doe", 12000);
console.log(john.fullDetail());
