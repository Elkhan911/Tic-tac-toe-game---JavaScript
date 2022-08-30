let columnsAll = document.querySelectorAll(".table__column");

let playerTurn = true;

function crossOrToe() {
  console.log(playerTurn);
  for (let column of columnsAll) {
    column.addEventListener("click", function () {
      if (playerTurn == true) {
        this.textContent = "X";
        playerTurn = false;
      } else {
        this.textContent = "O";
        playerTurn = true;
      }
    });
  }
}

crossOrToe();
