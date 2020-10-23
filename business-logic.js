/*
Function for user to add friends. Assumes the user object wil have all necessary information.

Inputs:
friendName - Variable that stores the specified string name of the friend the user wants to add.

Outputs:
The name of the friend that is added to myFriends array. Also updates the myFriends array. If the friendName does not specify any of the users, it will do nothing.
*/

function addFriends(friendName){
    //Search for the specified friendName in the list of all users.
    for(var i = 0; i < listOfUsers.length; i++){
        if(i === listOfUsers.length-1){
            if(listOfUsers[i] !== friendName){
                console.log("The friend could not be found in our system.");
                return;
            }
        }
    }
}
/*
Function to message a friend (Must be included in myFriends list in order to message).

Input:
friendName - Variable that stores the specified string name of the friend that the user wants to add.

Output:
Retrieves the message in the textbox and dsiplays it inside of the message box (only if this person is included in myFriends array).
*/
function messageFriends(friendName){
    //Iterate through the user's list of friends, and check if there is a match.
    for(var i = 0; i < myFriends.length; i++){
        if(i === myFriends.length-1){
            if(myFriends[i] !== friendName){
                console.log("You can only message your friends");
                return;
            }
        }
    }
}

/*
Function to challenge your friends to a 1v1 connect 4 match (online).

Input: 
friendName - Variable that stores the specified string name of the friend that the user wants to challenge to a game of connect 4.

Output:
If the friendName matches a name in the user's array of friends (myFriends), then it will call on the createGame function.
*/

function challengeFriend(friendName){
    //Iterate through the user's array of friends and check if the friendName specified matches.
    for(var i = 0; i < myFriends.length; i++){
        if(i === myFriends.length-1){
            if(myFriends[i] !== friendName){
                console.log("You can only message your friends");
                return;
            }
        }
        if(myFriends[i] === friendName){
            break;
        }
    }
    //If the friendName was found, call on createGame function to set up and start the game.
    createGameWithFriend(friendName);
}

//sign-up page

/*
Function to sign up for an account in our program.

Input: 
username - The specified username that the user wants to use to create his account.
password - The specified password that the user wants to use to create his account.

Output:
Does not return anything, the user is created and added to our json list of all accounts created.
*/
function signUp(username, password){
    for(var i = 0; i < listOfUsers.length-1; i++){
        //Check to see if the username and password already exist in the list of users.
        if(listOfUsers[i].username === username && listOfUsers[i].password === password){
            console.log("This username and password already exists.");
            return;
        }
        if(listOfUsers[i].username === username){
            console.log("This username already exists.");
            return;
        }
        if(listOfUsers[i].password === password){
            console.log("This password already exists.");
            return;
        }
    }
}

/*
Function to allow the user to log in.

Input:
username - The specified username that is associated when creating the account.
password - The specified password that is associated when creating the account.

Output:
If the user enters a proper username and password that is in our json list of all created accounts, redirect the user to the home page.
*/

function userLogIn(username, password){
    for(var i = 0; i < listOfUsers.length-1; i++){
        if(listOfUsers[i].username === username && listOfUsers[i].password === password){
            //Do something to direct them to the home page.
        }
    }
    alert("The username or password given is incorrect.");
    //If the username and password can't be found, alert the user and do nothing.
    return;
}

/*
Function to display the users password when the 'forget password' button is clicked.

Input: 
username - The username that is associated with the account when creating the account.

Output:
If the specified username is found in the json list of all accounts created, then return the password associated with that username.
*/

function displayPassword(username){
    for(var i = 0; i < listOfUsers.length-1; i++){
        //Check if the username is stored in listOfUsers.
        if(listOfUsers[i].username === username){
            return listOfUsers[i].password;  //If it is, return the password.
        }
    }
    //If the username cannot be found, alert the user and return nothing.
    alert("There is no account that is linked to the specified username.")
    return;
}

//Leaderboard page

/*
Function to get the user with the most connect four wins.

Input: Does not take any parameters as input.

Output:
The function will return the user with the most connect four wins.
*/

function getAllLeaders(){
    let mostWins = 0;
    let mostWinsUser = "";
    for(var i = 0; i < listOfUsers.length-1; i++){
        //Search for the user with the most wins, and also keep track of their usernames.
        if(listOfUsers[i].wins > mostWins){
            mostWins = listOfUsers[i].wins;
            mostWinsUser = listOfUsers[i].username;
        }
    }
    return mostWinsUser;
}


//Home page

/*
Function to create an online game against a random player that has an account associated with our program.

Input: The function does not take any parameters as input.

Output:
If there are enough users in our program to start a 1v1 online game, this function will redirect you to a game page.
*/
function createOnlineGame(){
    if(onlineUsers.length < 2){
        alert("There are not enough users available online.")
        return;
    }
}

/*
Function to create an offline connect four game against a CPU

Input:
difficulty(possibly) - If we are capable of implementing the difficulty level of our CPU in offline game modes, this parameter will signal the difficulty level of our CPU.

Output:
The ideal output would be to redirect the user to one of three game pages; an offline game page with CPU level 'easy', an offline game page with CPU level 'medium', an offline game page with CPU level 'hard'
*/

function createOfflineGame(difficulty){
    if(difficulty === "easy"){
        //redirects the user to an offline game page where the CPU setting is set to 'easy'
    }
    else if(difficulty === "medium"){
        //redirects the user to an offline game page where the CPU setting is set to 'medium'
    }
    else if(difficulty === "hard"){
        //redirects the user to an offline game page where the CPU setting is set to 'hard'
    }
}

/*
Function to create an online game with a specified friend.

Input: 
friendName - The user associated with the given username (friendName) that you would like to challenge in an online connect four game.

Output:
Should redirect you and your friend to an online game-page where they will be able to complete.
*/
function createGameWithFriend(friendName){
    //This function will redirect you to a pre-made online game page where the two users will take turns pressing a button to drop the pieces in the designated spot.
}

function updateUser(username){
    for(var i = 0; i < listOfUsers.length; i++){

    }
}
