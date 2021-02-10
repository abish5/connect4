import React, { useState } from 'react'
import Navigation from './Navigation'

const boardStyle = {
    marginTop:"50px",
    display:"flex", 
    backgroundColor:"blue", 
    alignItems:"center",
    flexWrap:"wrap",
    height:"525px",
    width:"611px"
}

const normalButtonStyle = {
    width: "75px",
    height: "75px",
    border: "1px solid black",
    borderRadius: "40px",
    backgroundColor: "ghostwhite",
    padding: "5px"
    
}

const redButtonStyle = {
    width: "75px",
    height: "75px",
    border: "1px solid black",
    borderRadius: "40px",
    backgroundColor: "red",
    padding: "5px"
}

const yellowButtonStyle = {
    width: "75px",
    height: "75px",
    border: "1px solid black",
    borderRadius: "40px",
    backgroundColor: "yellow",
    padding: "5px"
}

const gameBoard = initBoard()

function initBoard() {
    var board = []

    for (var i = 0; i < 6; ++i) {
        for (var j = 0; j < 7; ++j) {
            board.push({
                positionX: j,
                positionY: i,
                currColor: "normal",
                piece: <div style={normalButtonStyle}></div>
            })
        }
    }
    return board
}

function Players(props) {
    if(props.currPlayer === 'red') {
        if(props.isWinner === true) {
            return <div style={{marginTop:"30px"}}><h1 style={{color:"#FFCA00"}}>Player 2 has won!</h1></div>       //switched
        }
        return <div style={{marginTop:"30px"}}><h1 style={{color:"red"}}>Player 1's Turn</h1></div>
    }
    else if(props.currPlayer === 'yellow') {
        if(props.isWinner === true) {
            return <div style={{marginTop:"30px"}}><h1 style={{color:"red"}}>Player 1 has won!</h1></div>           //switched
        }
        return <div style={{marginTop:"30px"}}><h1 style={{color:"#FFCA00"}}>Player 2's Turn</h1></div>
    }
}

export default function Game() {
    const [player, setPlayer] = useState('red');
    const [isOver, setIsOver] = useState(false);


    function changeStyle(ele, i) {
        if (player === 'red' && gameBoard[i].currColor === "normal") {
            gameBoard[i] = {
                positionX: ele.positionX,
                positionY: ele.positionY,
                currColor: "red",
                piece: <div style={redButtonStyle}></div>
            }
            if(isOver === true) {
                setPlayer("red")
            } else {
                setPlayer("yellow")       // Change player after yellow has gone
            }
        } 
        else if (player === 'yellow' && gameBoard[i].currColor === "normal") {
            gameBoard[i] = {
                positionX: ele.positionX,
                positionY: ele.positionY,
                currColor: "yellow",
                piece: <div style={yellowButtonStyle}></div>
            }
            if(isOver === true) {
                setPlayer("yellow")
            } else {
                setPlayer("red")       // Change player after yellow has gone
            }
        }
    }
    
    function checkValidMove(ele, i) {
        if (ele.positionY === 5 || gameBoard[i + 7].currColor !== "normal") { //Check if the piece will not float on board
            changeStyle(ele, i); //CHANGE THIS TO HOVER BUT WHILE LOOP NEEDED
            checkIfWon(i)
        } else {
            alert("Invalid Move");
        }
    }
    
    function checkIfWon(i) {
        var currP = gameBoard[i].currColor
        if(gameBoard[i + 1] !== undefined && gameBoard[i + 2] !== undefined &&  gameBoard[i + 3] !== undefined) { //Check undefined
            if (gameBoard[i + 1].currColor === currP && gameBoard[i + 2].currColor === currP && gameBoard[i + 3].currColor === currP) { //Check right
                console.log(currP + " has won!");
                setIsOver(true);
            }
        } if(gameBoard[i + 8] !== undefined && gameBoard[i + 16] !== undefined &&  gameBoard[i + 24] !== undefined) { //Check undefined
            if (gameBoard[i + 8].currColor === currP && gameBoard[i + 16].currColor === currP && gameBoard[i + 24].currColor === currP) { //Check down-right
                console.log(currP + " has won!");
                setIsOver(true);
            }
        } if(gameBoard[i + 7] !== undefined && gameBoard[i + 14] !== undefined && gameBoard[i + 21] !== undefined) { //Check undefined
            if (gameBoard[i + 7].currColor === currP && gameBoard[i + 14].currColor === currP && gameBoard[i + 21].currColor === currP) { //Check down
                console.log(currP + " has won!");
                console.log(player);
                setIsOver(true);
            }
        } if(gameBoard[i + 6] !== undefined && gameBoard[i + 12] !== undefined && gameBoard[i + 18] !== undefined) { //Check undefined
            if (gameBoard[i + 6].currColor === currP && gameBoard[i + 12].currColor === currP && gameBoard[i + 18].currColor === currP) { //Check down-left
                console.log(currP + " has won!");
                setIsOver(true);
            }
        } if(gameBoard[i - 1] !== undefined && gameBoard[i - 2] !== undefined && gameBoard[i - 3] !== undefined) { //Check undefined
            if (gameBoard[i - 1].currColor === currP && gameBoard[i - 2].currColor === currP && gameBoard[i - 3].currColor === currP) { //Check left
                console.log(currP + " has won!");
                setIsOver(true);
            }
        } if(gameBoard[i - 8] !== undefined && gameBoard[i - 16] !== undefined && gameBoard[i - 24] !== undefined) { //Check undefined
            if (gameBoard[i - 8].currColor === currP && gameBoard[i - 16].currColor === currP && gameBoard[i - 24].currColor === currP) { //Check up-left
                console.log(currP + " has won!");
                setIsOver(true);
            }
        } if(gameBoard[i - 7] !== undefined && gameBoard[i - 14] !== undefined && gameBoard[i - 21] !== undefined) { //Check undefined
            if (gameBoard[i - 7].currColor === currP && gameBoard[i - 14].currColor === currP && gameBoard[i - 21].currColor === currP) { //Check up
                console.log(currP + " has won!");
                setIsOver(true);
            }
        } if(gameBoard[i - 6] !== undefined && gameBoard[i - 12] !== undefined && gameBoard[i - 18] !== undefined) { //Check undefined
            if (gameBoard[i - 6].currColor === currP && gameBoard[i - 12].currColor === currP && gameBoard[i - 18].currColor === currP) { //Check up-right
                console.log(currP + " has won!");
                setIsOver(true);
            }
        } 
        
    }

    function printBoard(board) {
        return (
            <div id="main-board" style={boardStyle}>
              {board.map((ele, i) => (
                <div onClick={() => checkValidMove(ele, i)} style={{margin: "5px"}}>
                  {ele.piece}
                </div>
              ))}
            </div>
        );
    }

    return (
        <>
            <Navigation />
            <Players currPlayer={player} isWinner={isOver}/>
            { printBoard(gameBoard) }
        </>
    )
}
