const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res) {
    res.sendFile(__dirname + "/home-page.html");
})

app.get('/home-page.html', function(req,res) {
    res.sendFile(__dirname + "/home-page.html");
})

app.get('/game-page.html', function(req, res){ 
    res.sendFile(__dirname + '/game-page.html')
}); 

app.get('/leaderboard.html', function(req, res){ 
    res.sendFile(__dirname + '/leaderboard.html')
}); 

app.get('/sign-in.html', function(req, res){ 
    res.sendFile(__dirname + '/sign-in.html')
}); 

app.get('/user-profile.html', function(req, res){ 
    res.sendFile(__dirname + '/user-profile.html')
}); 

app.get('/js/script.js', function(req, res){
    res.sendFile(__dirname + '/js/script.js')
}); 

app.get('/js/game.js', function(req, res){ 
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
