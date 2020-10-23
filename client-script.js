const http = require('http');
const fs = require('fs');
const port = 3000;


const server = http.createServer(function(req, res) {
    if(req.method === 'GET') {
        var q = require('url').parse(req.url, true);
        var filename = "." + q.pathname;
        console.log(q);
        console.log(filename);  
        var contentType = req.headers['content-type'];   
        //SERVER STARTING REQUESTS
        if(filename === './' || filename == "./home-page.html"){
			fs.readFile("./home-page.html", function(err, data){
				if(err){
					res.statusCode = 500;
					res.write("Server error.");
					res.end();
					return;
				}
				res.statusCode = 200;
				res.setHeader("Content-Type", "text/html");
				res.write(data);
				res.end();
            });
        } 
        else if(filename === './game-page.html'){
			fs.readFile(filename, function(err, data){
				if(err){
					res.statusCode = 500;
					res.write("Server error.");
					res.end();
					return;
				}
				res.statusCode = 200;
				res.setHeader("Content-Type", "text/html");
				res.write(data);
				res.end();
            });
		} 
		else if(filename === './leaderboard.html'){
			fs.readFile(filename, function(err, data){
				if(err){
					res.statusCode = 500;
					res.write("Server error.");
					res.end();
					return;
				}
				res.statusCode = 200;
				res.setHeader("Content-Type", "text/html");
				res.write(data);
				res.end();
            });
		} 
		else if(filename === './sign-in.html'){
			fs.readFile(filename, function(err, data){
				if(err){
					res.statusCode = 500;
					res.write("Server error.");
					res.end();
					return;
				}
				res.statusCode = 200;
				res.setHeader("Content-Type", "text/html");
				res.write(data);
				res.end();
            });
		} 
		else if(filename === './user-profile.html'){
			fs.readFile(filename, function(err, data){
				if(err){
					res.statusCode = 500;
					res.write("Server error.");
					res.end();
					return;
				}
				res.statusCode = 200;
				res.setHeader("Content-Type", "text/html");
				res.write(data);
				res.end();
            });
		} 
		else if(filename === "./js/game.js"){
			fs.readFile(filename, function(err, data){
				if(err){
					res.statusCode = 500;
					res.write("Server error.");
					res.end();
					return;
				}
				res.statusCode = 200;
				res.setHeader("Content-Type", "application/javascript");
				res.write(data);
				res.end();
            });
		}
        else if(filename === "./js/script.js"){
			fs.readFile(filename, function(err, data){
				if(err){
					res.statusCode = 500;
					res.write("Server error.");
					res.end();
					return;
				}
				res.statusCode = 200;
				res.setHeader("Content-Type", "application/javascript");
				res.write(data);
				res.end();
            });
		}
		else if(filename === "./css/style.css"){
			fs.readFile(filename, function(err, data){
				if(err){
					res.statusCode = 500;
					res.write("Server error.");
					res.end();
					return;
				}
				res.statusCode = 200;
				res.setHeader("Content-Type", "text/css");
				res.write(data);
				res.end();
            });
        } 
        else if(filename === "./css/home-page-style.css"){
			fs.readFile(filename, function(err, data){
				if(err){
					res.statusCode = 500;
					res.write("Server error.");
					res.end();
					return;
				}
				res.statusCode = 200;
				res.setHeader("Content-Type", "text/css");
				res.write(data);
				res.end();
            });
        }
        else if(filename === "./img/connect4logo.png"){
			fs.readFile(filename, function(err, data){
				if(err){
					res.statusCode = 500;
					res.write("Server error.");
					res.end();
					return;
				}
				res.statusCode = 200;
				res.setHeader("Content-Type", "image/png");
				res.write(data);
				res.end();
            });
        }
        else if(filename === "./img/placeholder-user.png"){
			fs.readFile(filename, function(err, data){
				if(err){
					res.statusCode = 500;
					res.write("Server error.");
					res.end();
					return;
				}
				res.statusCode = 200;
				res.setHeader("Content-Type", "image/png");
				res.write(data);
				res.end();
            });
		}
		else if(filename === "./img/yellow-arrow.png"){
			fs.readFile(filename, function(err, data){
				if(err){
					res.statusCode = 500;
					res.write("Server error.");
					res.end();
					return;
				}
				res.statusCode = 200;
				res.setHeader("Content-Type", "image/png");
				res.write(data);
				res.end();
            });
		}
		else if(filename === "./img/Connect4Board.png"){
			fs.readFile(filename, function(err, data){
				if(err){
					res.statusCode = 500;
					res.write("Server error.");
					res.end();
					return;
				}
				res.statusCode = 200;
				res.setHeader("Content-Type", "image/png");
				res.write(data);
				res.end();
            });
        }
        else if(http.request.url === "https://raw.githubusercontent.com/dominictarr/random-name/master/first-names.txt"){
            response.statusCode = 200;
            //response.write("Hello from the server");
            response.end();
        }
    }
    else{
        res.statusCode = 404;
        res.end("File not found error.");
    }
})

server.listen(port, function(error) {
	if (error) {
		console.log('Something went wrong', error) 
	} else {
        console.log('Server is listenting on port ' + port)
    }
});
console.log('Server running at http://127.0.0.1:3000/');
