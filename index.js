// Assumptions
// using a 2d array to create the board
// Representation of the board
// const board = [
//   [1, 2, 3, 4, 5, 6],
//   [1, 2, 3, 4, 5, 6],
//   [1, 2, 3, 4, 5, 6],
//   [1, 2, 3, 4, 5, 6],
// ];
// game continues in the loop till a player reaches the end
// starting position = [-1, -1] --- [Row, column]
// a game is finished when index 0 of p1 or p2 reachers 4 or more = [4, X]

const players = { p1: [-1, -1], p2: [-1, -1] };
let p1Turn = true;

//algo steps
// 1- roll dice
// 2- check players turn
// 3- check movement conditions
// 4- check win/lose condition
// 5- switch turn
// 6- loop

function handleTurn(p1Turn, d1, d2) {
  let player = p1Turn ? players.p1 : players.p2;
  if (d1 === d2) {
    const [row] = player;
    player = [row + 2, d1 - 1];
  } else {
    const [row] = player;
    const maxRoll = Math.max(d1, d2);
    player = [row + 1, maxRoll - 1];
  }

  if (p1Turn) players.p1 = player;
  else players.p2 = player;
}

function main() {
  // 1- roll dice
  while (true) {
    const d1 = Math.ceil(Math.random() * 6);
    const d2 = Math.ceil(Math.random() * 6);

    handleTurn(p1Turn, d1, d2);

    console.log(
      `Turn: ${p1Turn ? "p1" : "p2"}--- d1: ${d1},  d2: ${d2}, p1: ${
        players.p2[0] + 1
      },${players.p2[1] + 1}, p2: ${players.p2[0] + 1},${players.p2[1] + 1}`
    );
    console.log();

    // 4- check win/lose condition
    if (p1Turn && players.p1[0] >= 4) {
      console.log("Player 1 has won the game");
      break;
    }

    if (!p1Turn && players.p2[0] >= 4) {
      console.log("Player 2  has won the game");
      break;
    }

    // 5- switch turn
    p1Turn = !p1Turn;
  }
}

main();
