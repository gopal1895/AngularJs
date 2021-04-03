var app= angular.module("myapp",[]).controller("mycontroller",function($scope)
{
    var technologies =[
        {name: "Java",likes:0,dislikes:0},
        {name:"AngularJs",likes:0,dislikes:0},
        {name:"Sql",likes:0,dislikes:0},
        {name:"Php",likes:0,dislikes:0}
    ];
    $scope.technologies=technologies;
    $scope.inceremenLikes=function(technology){
        technology.likes++;
    };
    $scope.inceremenDislikes=function(technology){
        technology.dislikes++;
    };
});