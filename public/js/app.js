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
                console.log(textArray);
        }
                r.readAsText(f);
    }
        else { 
            alert("Failed to load file");
        }   
};

document.getElementById('file-input').addEventListener('change', readSingleFile, false);
//end file content reader




app.controller("DataController", function($scope){
    $scope.dataSets = [];
    
    $scope.outputLoop = function(){
            
        for (i=0; i<textArray.length; i = i + setLength){
            outputSet = textArray.slice(i ,i + setLength)
            console.log(outputSet);
            var output = {
                data1: outputSet[0],
                data2: outputSet[1],
                data3: outputSet[2],
                data4: outputSet[3],
                data5: outputSet[4],
                data6: outputSet[5],
                data7: outputSet[6],
                data8: outputSet[7]
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
