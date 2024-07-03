import ResetButton from "./ResetButton";
import Gameboard from "./Gameboard";
function App() {
  return (
    <>
      <center>
        {" "}
        <h2>Tic Tac Toe</h2>
      </center>
      <Gameboard />
      <ResetButton />
    </>
  );
}
export default App;
