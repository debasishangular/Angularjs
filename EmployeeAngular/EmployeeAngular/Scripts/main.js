var employee = angular
    .module("myemployeemodule", [])
    .controller("myController", function ($scope) {
    var employees = [{
        name: "Akshay",
        gender: 1,
        dateOfBirth: new Date("July 21,1960"),
        Address: "Mumbai",
        Salary: "1234.34"
    }, {
        name: "Milind",
        gender: 2,
        dateOfBirth: new Date("July 20,1960"),
        Address: "Nashik",
        Salary: "12.34"
    }, {
        name: "Raghvan",
        gender: 1,
        dateOfBirth: new Date("July 19,1960"),
        Address: "Pune",
        Salary: "1235.34"
    }, {
        name: "Hari",
        gender: 1,
        dateOfBirth: new Date("July 18,1960"),
        Address: "Mumbai",
        Salary: "5589.34"
    }];
        $scope.employees = employees;
        $scope.employeeview = "employeeview.html";
});  