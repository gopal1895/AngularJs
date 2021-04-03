//create modules
var myApp = angular.module('myModule',[]);
//create controller
// var myController =function($scope){ $scope.massage= "Angular Js"};
//Register the controller with module

//myApp.myController("myController",myController);

//Second way to register the controller with module.
myApp.controller("myController", function($scope)
{
    $scope.message= "Angular Js"
});
var myApps= angular.module("MyModules",[]).controller("MyControllers",function($scope)
            {
                var employee={
                    firstName: "Gopal",
                    lastName: "Kumar",
                    gender: "Male"
                };
                $scope.employee=employee;
            });
