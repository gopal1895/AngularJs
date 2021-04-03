var myapp = angular.module("mymodule",[]).controller("mycontroller",function($scope)
{
    var employee ={
        empId: 231,
        name: "",
        address: "",
        salary: NaN
    };
    $scope.employee=employee;
});

