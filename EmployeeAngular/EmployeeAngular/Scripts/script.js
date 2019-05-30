/// <reference path="angular.min.js" />
var app = angular.module("Demo", ["ngRoute"])
                 .config(function ($routeprovider) {
        $routeprovider
            .when("/home", {
                templateUrl: "Templates/homepage.html",
                controller: "homeController"
            })
            .when("/courses", {
                templateUrl: "Templates/course.html",
                controller: "coursesController"
            })
            .when("/students", {
                templateUrl: "Templates/student.html",
                controller: "studentsController"
            })

    })
    .controller("homeController", function ($scope) {
        $scope.message = "Home Page";
    })
    .controller("coursesController", function ($scope) {
        $scope.courses = ["C#", "VB.NET", "ASP.NET", "SQL Server", "AngularJS", "JavaScript"];
    })
    .controller("studentsController", function ($scope) {
        $scope.courses = ["Student1","Student2","Student3","Student4"];
    })