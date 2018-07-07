const http = require('http');
const url = require('url');
const StringDecoder = require('string_decoder').StringDecoder;

const port = 8000;

const server = http.createServer((req, res) => {
	let parsedUrl = url.parse(req.url, true);
	let path = parsedUrl.pathname;
	let trimmedPath = path.replace(/^\/+|\+$/g, '');
	let method = req.method.toLowerCase();
	let queryStringObject = parsedUrl.query;
	let headers = req.headers;
	let decoder = new StringDecoder('utf-8');
	let buffer = '';
	req.on('data', (data) => {
		buffer += decoder.write(data);
	});
	req.on('end', () => {
		buffer += decoder.end();
		res.end("Hello World\n");
		console.log("Request received from: " + trimmedPath);
		console.log("HTTP Method: " + method);
		console.log("Query String: ", queryStringObject);
		console.log("Header: ", headers);
		console.log("Payload", buffer);
	});
});

server.listen(port);
console.log("Server is running on port: " + port);
