var app = angular.module("ngOqulus");

var testData = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var output = "";
tableBody = document.getElementById("table-body");


for (i=0; i<testData.length; i = i +4){
    output = testData.slice(i,i+4)
    console.log(output);
    
    tableBody.appendChild();
};