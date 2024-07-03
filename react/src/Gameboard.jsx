import { handleCkick, playerSwitch, checkWin } from "./gameLogic";
function Gameboard() {
  function createCell(id) {
    return (
      <div className="cell" id={id} onClick={handleCkick}>
        {id}
      </div>
    );
  }
  return (
    <div className="board">
      {createCell(1)}
      {createCell(2)}
      {createCell(3)}
      {createCell(4)}
      {createCell(5)}
      {createCell(6)}
      {createCell(7)}
      {createCell(8)}
      {createCell(9)}
    </div>
  );
}
export default Gameboard;
