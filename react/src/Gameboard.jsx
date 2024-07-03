import { handleCkick, playerSwitch, checkWin } from "./gameLogic";
import { useState } from "react";

function Gameboard() {
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
  let [currPlayer, setCurrPlayer] = useState("O");
  function createCell(id) {
    let [cellData, setCellData] = useState("");
    const mark = (e) => {
      let newPlayer = playerSwitch(currPlayer);

      setCurrPlayer(newPlayer);

      setCellData(newPlayer);
      let arrCopy = handleCkick(e, wincondition, newPlayer);
      // arrCopy.map((el) => console.log(el));
      setWinCondition(arrCopy);
      // wincondition.map((el) => console.log(el));
      checkWin(arrCopy, newPlayer);
    };
    return (
      <div className="cell" id={id} onClick={(e) => mark(e)}>
        {cellData}
      </div>
    );
  }
  return (
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
  );
}

export default Gameboard;
