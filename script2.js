var myApp = angular.module("mymodule",[]).controller("mycontroller",function($scope)
{
    var country ={
        countryName: "India",
        capital: "New Delhi",
        flag: "image/indflag.png"
    };
    $scope.country=country;
});
