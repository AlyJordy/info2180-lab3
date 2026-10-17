document.addEventListener("DOMContentLoaded", function () {
  const board = document.getElementById("board");
  const squares = board.querySelectorAll("div");
  const status = document.getElementById("status");
  const newGameBtn = document.querySelector(".btn");
  const defaultMessage = status.textContent;


  squares.forEach(function (square) {
    square.classList.add("square");

    square.addEventListener("mouseover", function () {
    square.classList.add("hover");
    });
    square.addEventListener("mouseout", function () {
    square.classList.remove("hover");
    });
  });
 
  let gameState = Array(9).fill(null); // Initialize the game state with null values
  let currentPlayer = "X"; 
  let gameOver = false;
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  function checkWinner() {
    for (let combo of winningCombos) {
      const [a, b, c] = combo;
      if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
        return gameState[a];
      }
    }
    return null;
  }

  squares.forEach(function (square, index) {
    square.addEventListener("click", function () {
        if (gameOver) return; // Prevent further moves if the game is over
        gameState[index] = currentPlayer;
        square.textContent = currentPlayer;
        square.classList.add(currentPlayer);
        const winner = checkWinner();
        if (winner) {
        status.textContent = "Congratulations! " + winner + " is the Winner!";
            status.classList.add("you-won");
            gameOver = true; // Set gameOver to true when a player wins
        }
        //else if (!gameState.includes(null)) {
           //status.textContent = "It's a draw!";
            //status.classList.add("draw");   
            //gameOver = true; // Set gameOver to true when the game is a draw
        //}
        else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    });
    });
    newGameBtn.addEventListener("click", function () {
        gameState = Array(9).fill(null);
        currentPlayer = "X";
        gameOver = false;
        status.textContent = defaultMessage;
        status.classList.remove("you-won", "draw");
        squares.forEach(function (square) {
            square.textContent = "";
            square.classList.remove("X", "O");
        });
    });
});