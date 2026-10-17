document.addEventListener("DOMContentLoaded", function () {
  const board = document.getElementById("board");
  const squares = board.querySelectorAll("div");

  squares.forEach(function (square) {
    square.classList.add("square");
  });

  let gameState = Array(9).fill(null); // Initialize the game state with null values
  let currentPlayer = "X"; 
  squares.forEach(function (square, index) { // Add click event listener to each square
    square.addEventListener("click", function () { // Check if the square is already occupied
      gameState[index] = currentPlayer;
      square.textContent = currentPlayer;
      square.classList.add(currentPlayer);

      currentPlayer = currentPlayer === "X" ? "O" : "X"; // Switch to the other player
    });
  });
});