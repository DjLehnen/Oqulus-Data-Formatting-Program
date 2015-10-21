var app = angular.module("ngOqulus", ["lr.upload", "ngRoute"]);

var setLength = 4;

var testData = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];








app.controller("DataController", function($scope){
    $scope.dataSets = [];
    
    $scope.outputLoop = function(){
            
        for (i=0; i<testData.length; i = i + setLength){
            outputSet = testData.slice(i,i + setLength)
            console.log(outputSet);
            var output = {
                data1: outputSet[0],
                data2: outputSet[1],
                data3: outputSet[2],
                data4: outputSet[3],
                data5: outputSet[4],
            }
            
            $scope.dataSets.push(output);
        };
    }; 
})

app.config(["$routeProvider", function($routeProvider){
    $routeProvider
    .when("/7columns",{
        templateUrl: "html/7columns.html",
        controller: "7Controller"
    })
    .when("/8columns",{
        templateUrl: "html/8columns.html",
        controller: "8Controller"
    })
    .otherwise({
        rediectTo: "/7columns"
    });
}]);

app.controller("7Controller", function($scope, $http){
  $scope.formData = {};

  $scope.outputFile = function(){
    $scope.formData.completed = false;
    $http.post("/upload" , $scope.formData)
          .then(function(response){
            $scope.formData = {};
          });
  };
});


app.controller("8Controller", function($scope){

});
