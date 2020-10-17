var numOfcols = 7
var numOfrows = 6


function createGame() {
    for(var i = 0; i < numOfrows*numOfcols; ++i) {
        var gameContainer = document.getElementById("game-container")
        var newBlock = document.createElement("div");
        newBlock.style.width = "50px";
        newBlock.style.height = "50px";
        newBlock.style.borderRadius = "30px";
        newBlock.style.border = "3px solid white";
        gameContainer.appendChild(newBlock);
    }
}

createGame();