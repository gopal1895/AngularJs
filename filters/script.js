var app=angular.module("myModule",[]).controller("myController",function($scope)
{
    var employees =[
        {name: "Roshan", dateOfBirth: new Date("December 18 1995"),gender:"Male",salary:657634.765},
        {name: "Sara", dateOfBirth: new Date("May 01 2000"),gender:"Female",salary:65754},
        {name: "Ravi", dateOfBirth: new Date("August 12 1956"),gender:"Male",salary:64725.76},
        {name: "Vishal", dateOfBirth: new Date("October 8 1999"),gender:"Male",salary:54232}
    ];
    $scope.employees=employees;
    $scope.rowLimit =employees.length;
    $scope.len=employees.length;
    $scope.sortColumn="name";
    $scope.names = [
        'Ravi',
        'rahul',
        'roshan',
        'Hena',
        'Nisha',
        'Gopal',
        'mahesh',
        'ram',
        'kiran'
    ];
    $scope.data = { 
        name: "Gopal",
        city:"Delhi",
        country: "India"
};
});