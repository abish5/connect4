import React from 'react'
import Navigation from './Navigation'


// const board = []

// const boardStyle = {
//     marginTop:"50px",
//     border:"1px solid red", 
//     display:"flex", 
//     alignItems:"center",
//     flexWrap:"wrap",
//     width:"527px"
// }

// const normalButtonStyle = {
//     width: "75px",
//     height: "75px",
//     border: "1px solid black",
//     borderRadius: "40px",
//     padding: "5px"
    
// }

// const redButtonStyle = {
//     width: "75px",
//     height: "75px",
//     border: "1px solid black",
//     borderRadius: "25px",
//     backgroundColor: "red",
//     padding: "5px"
// }

// const blueButtonStyle = {
//     width: "75px",
//     height: "75px",
//     border: "1px solid black",
//     borderRadius: "25px",
//     backgroundColor: "blue",
//     padding: "5px"
// }

// function Piece(props) {

//     function changeColor(index) {
//         props.pieces[props.value].piece = <div style={redButtonStyle}></div>
//     }

//     return (
//         <div onClick={() => changeColor(props.value)}>{props.pieces[props.value].piece}</div>
//     )
// }

// function Board() {

//     return (
//         <div style={{border:"1px solid red", width:"1000px", display:"flex", justifyContent:"Center"}}>
//             <div id="gameBoard" style={boardStyle}>
//                 <Piece pieces={board} value={0}/>
//                 <Piece pieces={board} value={1}/>
//                 <Piece pieces={board} value={2}/>
//                 <Piece pieces={board} value={3}/>
//                 <Piece pieces={board} value={4}/>
//                 <Piece pieces={board} value={5}/>
//                 <Piece pieces={board} value={6}/>
//                 <Piece pieces={board} value={7}/>
//                 <Piece pieces={board} value={8}/>
//                 <Piece pieces={board} value={9}/>
//                 <Piece pieces={board} value={10}/>
//                 <Piece pieces={board} value={11}/>
//                 <Piece pieces={board} value={12}/>
//                 <Piece pieces={board} value={13}/>
//                 <Piece pieces={board} value={14}/>
//                 <Piece pieces={board} value={15}/>
//                 <Piece pieces={board} value={16}/>
//                 <Piece pieces={board} value={17}/>
//                 <Piece pieces={board} value={18}/>
//                 <Piece pieces={board} value={19}/>
//                 <Piece pieces={board} value={20}/>
//                 <Piece pieces={board} value={21}/>
//                 <Piece pieces={board} value={22}/>
//                 <Piece pieces={board} value={23}/>
//                 <Piece pieces={board} value={24}/>
//                 <Piece pieces={board} value={25}/>
//                 <Piece pieces={board} value={26}/>
//                 <Piece pieces={board} value={27}/>
//                 <Piece pieces={board} value={28}/>
//                 <Piece pieces={board} value={29}/>
//                 <Piece pieces={board} value={30}/>
//                 <Piece pieces={board} value={31}/>
//                 <Piece pieces={board} value={32}/>
//                 <Piece pieces={board} value={33}/>
//                 <Piece pieces={board} value={34}/>
//                 <Piece pieces={board} value={35}/>
//                 <Piece pieces={board} value={36}/>
//                 <Piece pieces={board} value={37}/>
//                 <Piece pieces={board} value={38}/>
//                 <Piece pieces={board} value={39}/>
//                 <Piece pieces={board} value={40}/>
//                 <Piece pieces={board} value={41}/>
//             </div>
//         </div>
//     )
// }

export default class Game extends React.Component {
    constructor() {
        super();
        this.board = "yo"
    }

    // initBoard() {
    //     for (var i = 0; i < 6; ++i) {
    //         for (var j = 0; j < 7; ++j) {
    //             board.push({
    //                 currColor: "normal",
    //                 piece: <div style={normalButtonStyle}></div>
    //             })
    //         }
    //     }
    // }

    render() {
        return (
            <>
                <Navigation />
                {this.board}
            </>
        )
    }
}
