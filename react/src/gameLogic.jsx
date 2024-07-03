export function playerSwitch(currPlayer) {
  if (currPlayer == "O") {
    return "X";
  } else {
    return "O";
  }
} //alternate between X and O s
export function handleCkick(e, wincondition, newPlayer) {
  let index = e.target.id;
  wincondition[index] = newPlayer;

  console.log(wincondition[index]);
} //Marks  X and O s on board and update wincondition[]
export function checkWin() {
  console.log("fun3");
} //check if someone won or game is a tie
