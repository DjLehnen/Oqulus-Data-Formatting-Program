var app = angular.module("ngOqulus", ["lr.upload", "ngRoute"]);

var setLength = 8;

//This listens for a file upload and reads the entire contents
function readSingleFile(evt) {
    var f = evt.target.files[0]; 

    if (f) {
        var r = new FileReader();
        r.onload = function(e) { 
            var contents = e.target.result;
                rawText = contents;
                textArray = rawText.split(/[\s,]+/);
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
    var avgAdd = 0;
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
            
        //convert String array into Number array and calculate sum total
        };
        
        avgAdd = avgArray.splice(-1,1)
        
        for(i=0; i<avgArray.length; i++) {
            avgArray[i] = +avgArray[i];
            arraySum = arraySum + avgArray[i];
            console.log(arraySum);
        };
        //Calculate Average
        $scope.average = (arraySum / avgArray.length);
        console.log("Average: ", $scope.average);
        
        //Calculate Median
        
       function median(value) {

            value.sort( function(a,b) {return a - b;} );

            var half = Math.floor(value.length/2);

            if(value.length % 2){
                return value[half];
            }

            else{
                return (value[half-1] + value[half]) / 2.0;
            }

       }
                   console.log(median(avgArray));

       
        //Find Min and Max value
        var maxValue = Math.max(...avgArray);
        var minValue = Math.min(...avgArray);
        console.log("Max: ",maxValue);
        console.log("Min: ",minValue);
        
        
        
    }; 
});

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
