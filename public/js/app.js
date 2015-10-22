var app = angular.module("ngOqulus", ["lr.upload", "ngRoute"]);

var setLength = 8;
var avgAdd = 0

//This listens for a file upload and reads the entire contents
function readSingleFile(evt) {
    var f = evt.target.files[0]; 

    if (f) {
        var r = new FileReader();
        r.onload = function(e) { 
            var contents = e.target.result;
                rawText = contents;
                textArray = rawText.split(",");
        }
                r.readAsText(f);
    }
        else { 
            alert("Failed to load file");
        }   
};

document.getElementById('file-input').addEventListener('change', readSingleFile, false);
//end file content reader

// /[\s,]+/


app.controller("DataController", function($scope){
    $scope.dataSets = [];
    var avgArray = [];
    var arraySum = 0;
    var arrayMin = 0;
    var arrayMax = 0;
    var arrayMedian = 0;
    $scope.average = 0;
    $scope.outputLoop = function(){
                    
        for (i=8; i<textArray.length; i = i + setLength){
            outputSet = textArray.slice(i ,i + setLength)
            
            avgAdd = avgArray.push(outputSet[0])
            
            
//            var output = {
//                data1: outputSet[0],
//                data2: outputSet[1],
//                data3: outputSet[2],
//                data4: outputSet[3],
//                data5: outputSet[4],
//                data6: outputSet[5],
//                data7: outputSet[6],
//                data8: outputSet[7]
//            }
//            
//            $scope.dataSets.push(output);
        };
        for(i=0; i<avgArray.length; i++) {
            avgArray[i] = +avgArray[i];
            arraySum = arraySum + avgArray[i];
            console.log(arraySum);
        };
        //Calculate Average
        $scope.average = (arraySum / avgArray.length);
        console.log("Average: ", $scope.average);
        
        //Calculate Median
            if (Number.isInteger(avgArray[(avgArray.length)/2]) === false){
                arrayMedian = avgArray[(((avgArray.length)/2)+0.5)];
            }
        
            else{
                arrayMedian = (avgArray[((avgArray.length)/2)] + avgArray[((avgArray.length)/(2+1))]) / 2;
            }
        console.log("Median: ", arrayMedian);
        
        
        
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
