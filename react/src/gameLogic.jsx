export function playerSwitch(currPlayer) {
  if (currPlayer == "O") {
    return "X";
  } else {
    return "O";
  }
} //alternate between X and O s
export function handleCkick(e, wincondition, newPlayer) {
  let index = e.target.id;
  let arrCopy = [...wincondition];

  arrCopy[index] = newPlayer;

  return arrCopy;
} // update wincondition[] and return the updated array
export function checkWin(wincondition, newPlayer) {
  const conditionArray = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i <= 7; i++) {
    let win = true;
    for (let j = 0; j <= 2; j++) {
      let index = conditionArray[i][j];
      //console.log(wincondition[index]);
      if (wincondition[index] != newPlayer) {
        win = false;
      }
    }
    if (win == true) {
      console.log("Game Won");
      setTimeout(() => {
        alertWinner(newPlayer);
      }, 150);
    }
  }
} //check if someone won or game is a tie
function alertWinner(newPlayer) {
  //to alert if someone one the game
  alert(`${newPlayer} Won The Game `);
}
export function isfull(wincondition) {
  //to check if the game is a tie
  for (let i = 0; i <= 8; i++) {
    if (wincondition[i] == "") {
      return true;
    }
  }
  console.log("tie");
  alert("This Game Is A TIE!!");
  return false;
}
