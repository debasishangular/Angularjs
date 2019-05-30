/// <reference path="main.js" />
employee.filter("gender", function () {
    return function (gender) {

        switch (gender) {
            case 1:
                return "male";
            case 2:
                return "female";
        }
    }
})