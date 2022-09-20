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
var Employee = /** @class */ (function () {
    function Employee(first, second) {
        this.first = first;
        this.second = second;
    }
    Employee.prototype.fullname = function () {
        return "".concat(this.first, ",").concat(this.second);
    };
    Employee.prototype.fulldetail = function () {
        console.log("this is ".concat(this.fullname(), "and I have monthly salary ").concat(this.getSalary()));
    };
    return Employee;
}());
var FullTimeemployee = /** @class */ (function (_super) {
    __extends(FullTimeemployee, _super);
    function FullTimeemployee(first, second, salary) {
        var _this = _super.call(this, first, second) || this;
        _this.salary = salary;
        return _this;
    }
    FullTimeemployee.prototype.getSalary = function () {
        return this.salary;
    };
    return FullTimeemployee;
}(Employee));
var fullTimeemployee = new FullTimeemployee("john", "doe", 12000);
fullTimeemployee.fulldetail();
