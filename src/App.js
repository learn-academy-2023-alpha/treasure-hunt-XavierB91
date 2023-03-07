import React, { useState } from "react"
import "./App.css"
import Square from "./components/Square"

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])


  const [treasureLocation, setTreasurelocation]= useState(Math.floor(Math.random()* board.length))
  const [bombLocation, setBombLocation]= useState(Math.floor(Math.random()* board.length))

  const handleGamePlay = (index) => {
    // alert (index)
    let updatedBoard= [...board]
    if(index === treasureLocation) {
      updatedBoard[index]= "🎯"
      setBoard(updatedBoard)
      } else if (index === bombLocation) {
    updatedBoard[index]= "💣"
    setBoard(updatedBoard)
  } else {
    updatedBoard [index] = "🎋"
    setBoard(updatedBoard)

  // const handleGamePlay = (index)=> {
  //   // alert (index)
  //   let updatedBoard = [...board]
  //   // emoji keyboard : cmd + ctrl + space
  //   updatedBoard[index]= "🌴"
  //   setBoard(updatedBoard)
  // }
  // const handleGamePlay = (index) => {
  //   alert (index)
  }
  }
    return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className="gameboard">
        {board.map((value ,index) => {
        return (
          <Square 
          value={value} 
          key={index}
          index={index}
          handleGamePlay={handleGamePlay}/>

        )
      })}
       <button id="reset-button" className="btn btn-lg btn-primary btn-block">reset</button>
      </div>
    </>
  )
}
  

export default App 
