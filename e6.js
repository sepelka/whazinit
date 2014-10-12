var mymodule = require('./readMyDir.js');

var path = "./";
var ext = "*";

var parNum = process.argv.length;
if (process.argv[2]!=null)
	path=process.argv[2];
if (process.argv[3]!=null)
	ext=process.argv[3];
console.log(path);
var buf=mymodule(path, ext, function(err,data){
	if (err){console.log("err");} 
	else 
		{
		  console.log("recibimos datos");
		  var total= data.length;
		  data.forEach(function (file, index) {
            console.log("File %s out of "+total+" is: %s", index+1, file);})
		}
	});