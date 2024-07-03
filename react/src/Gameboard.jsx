import { handleCkick, playerSwitch, checkWin } from "./gameLogic";
import { useState } from "react";

function Gameboard() {
  //initial value of the wincondition array
  let [wincondition, setWinCondition] = useState([
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
  ]);
  let [currPlayer, setCurrPlayer] = useState("X"); // a variable that keeps track of current player
  function createCell(id) {
    let [cellData, setCellData] = useState("");
    const mark = (e) => {
      let newPlayer = playerSwitch(currPlayer); //newPlayer is the value given to the currentplayer to change state it makes player switch possible

      setCurrPlayer(newPlayer);

      setCellData(currPlayer); //the ingame box changes
      let arrCopy = handleCkick(e, wincondition, currPlayer);

      setWinCondition(arrCopy); //the win condition array is updated keeps track of Xs and Os on the board

      checkWin(arrCopy, currPlayer); //checks the board for winning patteern
    };
    return (
      <div className="cell" id={id} onClick={(e) => mark(e)}>
        {cellData}
      </div>
    );
  }
  return (
    <>
      <div className="board">
        {createCell(0)}
        {createCell(1)}
        {createCell(2)}
        {createCell(3)}
        {createCell(4)}
        {createCell(5)}
        {createCell(6)}
        {createCell(7)}
        {createCell(8)}
      </div>
      <p className="turn">{currPlayer}'s turn</p>
    </>
  );
}

export default Gameboard;
