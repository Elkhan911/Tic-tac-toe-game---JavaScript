let columnsAll = document.querySelectorAll(".table__column");

let playerTurn = true;

let firstPlayerMoves = [];
let secondPlayerMoves = [];

function crossOrToe() {
  for (let column of columnsAll) {
    column.addEventListener("click", function () {
      if (playerTurn == true) {
        this.textContent = "X";
        playerTurn = false;
        let a = column.getAttribute("data-value");
        firstPlayerMoves.push(a);
        console.log(firstPlayerMoves);
      } else {
        this.textContent = "O";
        playerTurn = true;
        let b = column.getAttribute("data-value");
        secondPlayerMoves.push(b);
        console.log(secondPlayerMoves);
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

function isVictory() {}
