const http=require("http");
const os=require("os");

console.log("weberver starting...");

var handler=function(request, response){
    console.log("Received request from "+request.connection.remoteAddress);
    response.writeHead(200);
    response.end(`<h1>SKInfosec AI Course :  ${os.hostname()}`);
};

var wwww = http.createServer(handler);

wwww.listen(3000);

