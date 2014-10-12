var fs = require("fs");
var path = require("path");
var buf=fs.readdir("./", function(err,data){
	if (err){console.log("Directory not found");} 
	else 
		{
		  var total= data.length;
		  data.forEach(function (file, index) {
            console.log("File %s out of "+total+" is: %s", index+1, file);})
		}});