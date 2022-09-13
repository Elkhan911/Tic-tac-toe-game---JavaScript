const columnsAll = document.querySelectorAll(".table__column");
const playerNumber = document.querySelector("#_playerNumber");
const playerMove = document.querySelector("#_playerMove");

// boolen переменная для определения хода
let firstPlayerTurn = true;

// массивы с ходами игроков
let firstPlayerMoves = [];
let secondPlayerMoves = [];

function isItEmpty(value) {
  if (value == "") {
    return true;
  } else return false;
}

function crossOrToe() {
  for (let column of columnsAll) {
    column.addEventListener("click", function () {
      if (isItEmpty(this.textContent)) {
        if (firstPlayerTurn == true) {
          this.textContent = "X";
          playerNumber.textContent = 1;
          playerMove.textContent = "крестик";
          firstPlayerTurn = false;
          let a = column.getAttribute("data-value");
          firstPlayerMoves.push(a);
          console.log(firstPlayerMoves);
        } else {
          this.textContent = "O";
          playerNumber.textContent = 2;
          playerMove.textContent = "нолик";
          firstPlayerTurn = true;
          let b = column.getAttribute("data-value");
          secondPlayerMoves.push(b);
          console.log(secondPlayerMoves);
        }
      }
    });
  }
}

crossOrToe();

let winCombs = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function isItVictory(winArr, userArr) {
  let winResult = "";
  for (let i = 0; i < winArr.length; i++) {
    for (let k = 0; k < winArr[i].length; k++) {
      if (userArr.includes(winArr[i][k])) {
        winResult += winArr[i][k];
      }
    }
    console.log(winResult);
    if (winResult.length < 3) {
      winResult = "";
    } else return true;
  }
  return false;
}

console.log(isItVictory(winCombs, arr3));
