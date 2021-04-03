  angular.module('list', []).controller('ListController', ['$scope', function($scope) {
      $scope.unique_names= [];
      $scope.names_count = [];
      $scope.data=[];
      $scope.getfun =function()
        {
            //Resetting Values
            $scope.unique_names= [];
            $scope.names_count = [];
            var arrIndex = 0;   
            for(var x =0;x<$scope.names.length-1;x++)
            {
               var tempCount = 1;
               var tempName = $scope.names[x];
               for(var y=x+1;y<$scope.names.length;y++)
               {
                   if($scope.names[x]==$scope.names[y]) {
                       tempCount++;
                   }
               }
               if ($scope.unique_names.indexOf(tempName)==-1) {   
                   $scope.unique_names[arrIndex] = tempName;  
                   $scope.names_count[arrIndex]=tempCount;
                   arrIndex++;
               }
            }
            $scope.printdata();
        }

        $scope.printdata =function()
        {
          var ind=0;
          for(var x=0;x<$scope.unique_names.length;x++)
          {
            data_set={};
            data_set.name=$scope.unique_names[x];
            data_set.count = $scope.names_count[x];
            $scope.data[ind] = data_set;
            ind++;
          }
        }
    }]);
