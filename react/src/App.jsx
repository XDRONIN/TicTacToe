import ResetButton from "./ResetButton";
import Gameboard from "./Gameboard";
function App() {
  return (
    <>
      <center>
        {" "}
        <h1>Tic Tac Toe</h1>
      </center>
      <Gameboard />
      <center>
        {" "}
        <ResetButton />
      </center>
    </>
  );
}
export default App;
