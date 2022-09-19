const columnsAll = document.querySelectorAll(".table__column");
const winnerText = document.querySelector("#_winnerText");
const winnerPlayerNumber = document.querySelector("#_winnerPlayerNumber");
const newGameBtn = document.querySelector("#_newGameBtn");

// переменная для определения очереди хода
const playerNumber = document.querySelector("#_playerNumber");
// переменная для определния Х или О
const playerMove = document.querySelector("#_playerMove");

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

function StartGame() {
  for (let column of columnsAll) {
    column.addEventListener("click", play);
  }
}

StartGame();

function isItEmpty(elem) {
  return elem.textContent == "";
}

function play() {
  if (isItEmpty(this)) {
    if (firstPlayerTurn) {
      this.textContent = "X";
      firstPlayerTurn = false;
      let dataValue = this.getAttribute("data-value");
      firstPlayerMoves.push(dataValue);
      playerNumber.textContent = 2;
      playerMove.textContent = "нолик";
      isItDraw();
      if (isItVictory(winCombs, firstPlayerMoves)) {
        showResult();
      }
    } else {
      this.textContent = "O";
      firstPlayerTurn = true;
      let dataValue = this.getAttribute("data-value");
      secondPlayerMoves.push(dataValue);
      playerNumber.textContent = 1;
      playerMove.textContent = "крестик";
      isItDraw();
      if (isItVictory(winCombs, secondPlayerMoves)) {
        showResult();
      }
    }
  }
}

function isItVictory(arrWin, arrUser) {
  let winArr = [];
  for (let i = 0; i < arrWin.length; i++) {
    for (let j = 0; j < arrWin[i].length; j++) {
      let isIncludes = arrUser.includes(String(arrWin[i][j]));
      if (isIncludes) {
        winArr.push(arrWin[i][j]);
      }
    }

    if (winArr.length < 3) {
      winArr = [];
    } else {
      console.log(winArr);
      console.log(arrUser);
      return true;
    }
  }
  return false;
}

function showResult() {
  winnerText.classList.remove("table__text_inactive");
  winnerPlayerNumber.textContent = playerNumber.textContent + ". Поздравляем!";
  for (let column of columnsAll) {
    column.removeEventListener("click", play);
  }
}

function isItDraw() {
  let draw = [...columnsAll].every(function (elem) {
    return elem.textContent !== "";
  });

  if (
    draw &&
    !isItVictory(winCombs, firstPlayerMoves) &&
    !isItVictory(winCombs, secondPlayerMoves)
  ) {
    console.log(draw);
    winnerText.classList.remove("table__text_inactive");
    winnerPlayerNumber.textContent = "Боевая ничья. Сыграйте еще раз!";
  }
}

newGameBtn.addEventListener("click", function () {
  firstPlayerTurn = true;
  firstPlayerMoves = [];
  secondPlayerMoves = [];

  playerNumber.textContent = 1;
  playerMove.textContent = "крестик";

  winnerText.classList.add("table__text_inactive");
  winnerPlayerNumber.textContent = "";
  for (let column of columnsAll) {
    column.addEventListener("click", play);
    column.textContent = "";
  }
});
