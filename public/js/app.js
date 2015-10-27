var app = angular.module("ngOqulus", ["ngRoute"]);

var setLength = 8;
var columnChoice = 0;

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
    $scope.medianVal = 0;
    $scope.minValue = 0;
    $scope.maxValue = 0;
    $scope.average = 0;
    $scope.outputLoop = function(){

        for (i = setLength + columnChoice; i<textArray.length; i = i + setLength){
            outputSet = textArray.slice(i ,i + setLength)

            avgAdd = avgArray.push(outputSet[0])

        //convert String array into Number array and calculate sum total
        };

        avgAdd = avgArray.splice(-1,1)

        for(i=0; i<avgArray.length; i++) {
            avgArray[i] = +avgArray[i];
            arraySum = arraySum + avgArray[i];
        };
        //Calculate Average
        $scope.average = (arraySum / avgArray.length);
        console.log("Average: ", $scope.average);

        //Calculate Median

       function median(value) {

            value.sort( function(a,b) {return a - b;} );
            console.log(value);
            var half = Math.floor(value.length/2);

            if(value.length % 2){
                return value[half];
            }

            else{
                return (value[half-1] + value[half]) / 2.0;
            }

       }
        $scope.medianVal = median(avgArray);
        console.log("Median: ", $scope.medianVal);


        //Find Min and Max value
        $scope.maxValue = Math.max(...avgArray);
        $scope.minValue = Math.min(...avgArray);
        console.log("Max: ",$scope.maxValue);
        console.log("Min: ",$scope.minValue);

    };
    //pdf stuff
    function demoFromHTML() {
             var doc = new jsPDF('p', 'in', 'letter');
             var source = $('#testcase').first();
             var specialElementHandlers = {
                 '#bypassme': function(element, renderer) {
                     return true;
                 }
             };

             doc.fromHTML(
                $('#testcase').get(0), // [Refer Exact code tutorial][2]HTML string or DOM elem ref.
                 0.5,    // x coord
                 0.5,    // y coord
                 {
                     'width': 7.5, // max width of content on PDF
                     'elementHandlers': specialElementHandlers
                 });

             doc.output('dataurl');
        }
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

});


app.controller("8Controller", function($scope){

});
