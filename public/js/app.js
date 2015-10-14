var app = angular.module("ngOqulus", []);

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
            }
            
            $scope.dataSets.push(output);
        };
    }; 
})
