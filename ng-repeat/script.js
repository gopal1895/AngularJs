var myApps= angular.module("MyModules",[]).controller("MyControllers",function($scope)
            {
                var employees=[
                {firstname: "Gopal",lastname:"Kumar",gender:"Male",salary:50000},
                {firstname: "Ravi",lastname:"Singh",gender:"Male",salary:85465},
            ];
                $scope.employees=employees;
            });