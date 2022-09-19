const columnsAll = document.querySelectorAll(".table__column");
const playerNumber = document.querySelector("#_playerNumber");
const playerMove = document.querySelector("#_playerMove");
const winnerText = document.querySelector("#_winnerText");
const winnerPlayerNumber = document.querySelector("#_winnerPlayerNumber");

// boolen переменная для определения хода
let firstPlayerTurn = true;

// массивы с ходами игроков
let firstPlayerMoves = [];
let secondPlayerMoves = [];

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

function isItEmpty(value) {
  if (value == "") {
    return true;
  } else return false;
}

function crossOrToe() {
  for (let column of columnsAll) {
    column.addEventListener("click", play);
  }
}

crossOrToe();

function play() {
  if (isItEmpty(this.textContent)) {
    if (firstPlayerTurn == true) {
      this.textContent = "X";
      playerNumber.textContent = 1;
      playerMove.textContent = "нолик";
      firstPlayerTurn = false;
      let moveValue = this.getAttribute("data-value");
      firstPlayerMoves.push(moveValue);

      if (isItVictory(winCombs, firstPlayerMoves)) {
        console.log("WIN 1");
        showGameResult();
      }
    } else {
      this.textContent = "O";
      playerNumber.textContent = 2;
      playerMove.textContent = "крестик";
      firstPlayerTurn = true;
      let moveValue = this.getAttribute("data-value");
      secondPlayerMoves.push(moveValue);

      if (isItVictory(winCombs, secondPlayerMoves)) {
        console.log("WIN 2");
        showGameResult();
      }
    }
  }
}

function isItVictory(winArr, userArr) {
  let resultWin = [];
  for (let i = 0; i < winArr.length; i++) {
    for (let k = 0; k < winArr[i].length; k++) {
      let isInclude = userArr.includes(String(winArr[i][k]));
      if (isInclude) {
        resultWin.push(1);
      }
    }

    if (resultWin.length < 3) {
      resultWin = [];
    } else {
      return true;
    }
  }
  return false;
}

function showGameResult() {
  winnerText.classList.remove("table__text_inactive");
  winnerPlayerNumber.textContent = playerNumber.textContent;
  for (let column of columnsAll) {
    column.removeEventListener("click", play);
  }
}
