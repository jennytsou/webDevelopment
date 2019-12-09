
// server.js
var http = require("http");

http.createServer(function(request, response) {    
   response.writeHead(200, {"Content-Type": "text/html"});
   response.write("<h1>Hello World!</h1>");    
   response.end();
}).listen(3000);
// Web server$ node server.js
//hello.js
for (var i=5; i>0; i--)
	console.log("Hello, Node.js!");
