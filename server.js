const express = require('express');
const session = require('express-session');
const app = express();
const port = 3000;

app.use(session({ secret: 'some secret here'}));

let registeredUsers = [{username: "steve", password: "1234"}, {username: "ricky", password: "bobby"}, {username: "joerogan", password: "jre"}, {username: "friend", password:"friendship"}];
let userFriends = ["ricky", "joerogan"];
app.use(express.json());
app.use(express.urlencoded({extended: true}));

function authentication(req, res, next){
	if(req.session.loggedin){
		next();
	}
	else{
		res.status(401);
		res.send("Unauthorized");
	}
}

function messageFriend(req, res, next){
	if(!req.session.loggedin){
		res.status(401);
		res.send("Please login to send a message.");
		return;
	}
	let username = req.body.username;

	if(username === undefined){
		res.status(401);
		res.send("That username is not registered.")
		return;
	}
	res.send("Your message has been delivered!");
}

function addFriend(req, res, next){
	if(!req.session.loggedin){
		res.status(401);
		res.send("This user is not registered");
		return;
	}
	let username = req.body.username;
	if(username === undefined){
		res.status(401);
		res.send("Enter a username");
	}
	userFriends.push(username);
	res.status(200);
	res.send("You have successfully added a friend.");
}

function signUp(req, res, next){
	if(req.session.loggedin){
		res.status(200);
		res.send("You are already signed up.")
	}
	let username = req.body.username;
	let password = req.body.password;
	console.log(username);

	if(username === undefined || password === undefined){
		res.status(401);
		res.send("Enter a username and password");
		return;
	}
	registeredUsers.push({username: password});
	req.session.loggedin = true;
	res.send("You have successfully signed up!");
}

function logIn(req, res, next){
	if(req.session.loggedin){
		res.status(200);
		res.send("You are already logged in.");
	}
	console.log("hello");
	
	let username = req.body.username;
	let password = req.body.password;
	console.log(username);
	
	const findUsername = registeredUsers.find((user) => user.username === username);
	console.log(findUsername);

	if(findUsername){
		//Check if user's password is the same
		if(findUsername.password === password){
			req.session.loggedin = true;
			req.session.username = username;
			res.status = 200;
			res.send("You are now Logged in");
		}
		else{
			res.status(401);
			res.send("Incorrect password. Authorization failed.");
			return;
		}
	}
	else{
		res.status(401);
		res.send("No usernames match. Authorization failed.");
		return;
	}
}
app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res) {
    res.sendFile(__dirname + "/home-page.html");
})

app.get('/home-page.html', function(req,res) {
    res.sendFile(__dirname + "/home-page.html");
})

app.get('/game-page.html', authentication, function(req, res){ 
    res.sendFile(__dirname + '/game-page.html')
}); 

app.get('/leaderboard.html', authentication, function(req, res){ 
    res.sendFile(__dirname + '/leaderboard.html')
}); 

app.get('/sign-in.html', function(req, res){ 
    res.sendFile(__dirname + '/sign-in.html')
});

app.post("/sign-in", logIn);

app.post("/sign-up", signUp);

app.post("/add-friend", addFriend);

app.post("/message-friend", messageFriend);

app.get('/user-profile.html', function(req, res){ 
    res.sendFile(__dirname + '/user-profile.html')
}); 

app.get('/js/script.js', function(req, res){
    res.sendFile(__dirname + '/js/script.js')
}); 

app.get('/js/game.js', authentication, function(req, res){ 
    res.sendFile(__dirname + '/js/game.js')
}); 

app.get('/css/style.css', function(req, res){ 
    res.sendFile(__dirname + '/css/style.css')
}); 

app.get('/css/home-page-style.css', function(req, res){ 
    res.sendFile(__dirname + '/css/home-page-style.css')
}); 

app.get('/img/connect4logo.png', function(req, res){ 
    res.sendFile(__dirname + '/img/connect4logo.png')
}); 

app.get('/img/placeholder-user.png', function(req, res){ 
    res.sendFile(__dirname + '/img/placeholder-user.png')
}); 

app.get('/img/yellow-arrow.png', function(req, res){ 
    res.sendFile(__dirname + '/img/yellow-arrow.png')
}); 

app.get('/img/Connect4Board.png', function(req, res){ 
    res.sendFile(__dirname + '/img/Connect4Board.png')
}); 



app.listen(port);
console.log(`server is listening at http://localhost:${port}`);
