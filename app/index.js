const http = require('http');
const url = require('url');
const port = 8000;

const server = http.createServer((req, res) => {
	let parsedUrl = url.parse(req.url, true);
	let path = parsedUrl.pathname;
	let trimmedPath = path.replace(/^\/+|\+$/g, '');
	let method = req.method.toLowerCase();
	let queryStringObject = parsedUrl.query;
	let headers = req.headers;
	res.end("Hello World\n");
	console.log("Request received from: " + trimmedPath);
	console.log("HTTP Method: " + method);
	console.log("Query String: ", queryStringObject);
	console.log("Header: ", headers);
});

server.listen(port);
console.log("Server is running on port: " + port);
