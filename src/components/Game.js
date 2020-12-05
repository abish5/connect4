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

const buttonStyles = [normalButtonStyle, redButtonStyle, yellowButtonStyle];

//const gameBoard = initBoard()

function initBoard() {
    var board = []

    for (var i = 0; i < 7; ++i) {
        board.push([])
        for (var j = 0; j < 6; ++j) {
            board[i].push(0)  //0 represents "normal" colour and 1 represents first players move and 2 represents second players moves
            // board.push({
            //     positionX: j,
            //     positionY: i,
            //     currColor: "normal",
            //     piece: <div style={normalButtonStyle}></div>
            // })
        }
    }
    return board
}

function Players(props) {
    if(props.currPlayer === 1) {
        if(props.isWinner === true) {
            return <div style={{marginTop:"30px"}}><h1 style={{color:"#FFCA00"}}>Player 2 has won!</h1></div>       //switched
        }
        return <div style={{marginTop:"30px"}}><h1 style={{color:"red"}}>Player 1's Turn</h1></div>
    }
    else if(props.currPlayer === 2) {
        if(props.isWinner === true) {
            return <div style={{marginTop:"30px"}}><h1 style={{color:"red"}}>Player 1 has won!</h1></div>           //switched
        }
        return <div style={{marginTop:"30px"}}><h1 style={{color:"#FFCA00"}}>Player 2's Turn</h1></div>
    }
}

export default function Game() {
    const [player, setPlayer] = useState(1);
    const [isOver, setIsOver] = useState(false);
    const [gameBoard, setGameBoard] = useState(initBoard());

    
    function checkValidMove(row, col) {
        console.log(row, col);
        if(gameBoard[row][col] !== 0 || (row !== gameBoard.length-1 && gameBoard[row+1][col] === 0)) {
            alert("Invalid Move");
        }
        else{
            const newBoard = gameBoard.map(row=>[...row])
            newBoard[row][col] = player;
            //Check if gameBoard has any connect 4's
            if(checkConnect4(newBoard, player)){
                setIsOver(true);
            }
            else{
                if(player === 1){
                    setPlayer(2);
                }
                else if(player ===2){
                    setPlayer(1);
                }
            }
            setGameBoard(newBoard);
        }
    }
    function checkConnect4(game, p){
        //Check rows
        for(let row = 0; row < game.length; row++){
            for(let i = 3; i < 7; i++){
                if(p === game[row][i] && p === game[row][i-1] && p === game[row][i-2] && p === game[row][i-3]){
                    return true;
                }
            }
        }
        //Check columns
        for(let col = 0; col < 7; col++){
            for(let i = 3; i < 6; i++){
                if(p === game[i][col] && p === game[i-1][col] && p === game[i-2][col] && p === game[i-3][col]){
                    return true;
                }
            }
        }
        //Check right diagonals
        for(let row = 3; row<6; row++){
            for(let col = 0; col<4; col++){
                if(p === game[row][col] && p == game[row-1][col+1] && p === game[row-2][col+2] && p === game[row-3][col+3]){
                    return true;
                }
            }
        }
        //Check left diagonals
        for(let row = 5; row>2; row--){
            for(let col = 6; col>2;col--){
                if(p === game[row][col] && p == game[row-1][col-1] && p === game[row-2][col-2] && p === game[row-3][col-2]){
                    return true;
                }
            }
        }
        return false;

    }

    function printBoard(board) {
        return (
            <div id="main-board" style={boardStyle}>
              {board.map((row, rowNum) => (
                <div>
                    {row.map ((col, colNum)=>(
                         <div onClick={() => checkValidMove(colNum, rowNum)} style={{margin: "5px"}}>
                             <div style={buttonStyles[col]}/>
                    <p>{`${rowNum}, ${colNum}`}</p>
                         </div>
                    ))}
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
