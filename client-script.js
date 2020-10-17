const http = require('http');
const fs = require('fs');

const server = http.createServer(function(request, response) {
    if(request.method ===  'GET'){
        if(request.url === "./game-page.html"){
            fs.readFile("game-page.html", function(err, data){
                if(err){
                    response.statusCode = 500;
                    response.end("Your file could not be read.");
                }else{
                    console.log("hello");
                    response.statusCode  = 200;
                    response.setHeader("Content-Type", "text/html");
                    response.write(data);
                    response.end(data);
                }
            });
        }else if(request.url === "./assignment-script.js"){
            fs.readFile("assignment-script.js", function(err,data){
                if(err){
                    response.statusCode = 500;
                    response.write("Your file could not be read.");
                    response.end();
                }
                else{
                    response.statusCode = 200;
                    response.setHeader("Content-Type", "application/javascript");
                    response.write(data);
                    response.end();
                }
            });
        }
    }
    else{
        response.statusCode = 404;
        response.end("File not found error.");
    }
})

server.listen(3000);
