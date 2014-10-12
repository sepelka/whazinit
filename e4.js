var fs = require("fs");
var buf=fs.readFile('myFirstApp.js', function(err,data){
	if (err){console.log("file not found");} 
	else 
		{var str = data.toString();
		 var strLines = str .split('\n');
		 console.log(strLines.length);}});