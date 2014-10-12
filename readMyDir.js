
module.exports = function (dir, ext){
var fs = require("fs");
path = require("path");

console.log("test");
var buf=fs.readdir(dir, function(err,data){
	if (err){return(err);console.log("error");} 
	else 
		{
		  var filteredData;
		  data.forEach(function (file, index) {
		  	if (path.extname(file)==ext)
		  		filteredData.push(file);
		  		})
		  console.log("tenemos filteredData")
		  return (null, filteredData);
		}})}