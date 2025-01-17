import { useState } from 'react'


const Board = ({board,handleState})=> {
  
  
  function handleButton(i){
    if(board[i])return;
    handleState(i);
  }

  return(
    <div className="game-board"> 
    {board.map((value,i)=><button key={i} onClick={()=>handleButton(i)} className="board-button" >{value}</button>)}
    </div> 
  )

}

export default Board;