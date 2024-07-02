function Gameboard() {
  function createCell(id) {
    this.index = id;
    return <div className="cell">{this.index}</div>;
  }
  return (
    <div className="board">
      {new createCell(1)}
      {new createCell(2)}
      {new createCell(3)}
      {new createCell(4)}
      {new createCell(5)}
      {new createCell(6)}
      {new createCell(7)}
      {new createCell(8)}
      {new createCell(9)}
    </div>
  );
}
export default Gameboard;
