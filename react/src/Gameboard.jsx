import { handleCkick, playerSwitch, checkWin } from "./gameLogic";
import { useState } from "react";

function Gameboard() {
  let wincondition = ["", "", "", "", "", "", "", "", ""];
  let [currPlayer, setCurrPlayer] = useState("O");
  function createCell(id) {
    let [cellData, setCellData] = useState("");
    const mark = (e) => {
      let newPlayer = playerSwitch(currPlayer);

      setCurrPlayer(newPlayer);

      setCellData(newPlayer);
      handleCkick(e, wincondition, newPlayer);
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
