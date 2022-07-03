const turnDiv = document.querySelector("[data-div='turn']");
let playerOneTurn = true;

let playerOneScore = new Array(9).fill('');
let playerTwoScore = new Array(9).fill('');
let gameBoard = new Array(9).fill('');
let gameOver = false;
let gameTie = false;

const WINNING_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function placeOnBoard(cell, mark) {
  gameBoard[cell] = mark;
}

function playerScore(index) {
  playerOneTurn ? (playerOneScore[index] = 'X') : (playerTwoScore[index] = 'O');
}

function checkWin(board) {
  for (let i = 0; i < WINNING_COMBOS.length; i++) {
    const element = WINNING_COMBOS[i];
    if (element.every((num) => board[num] === 'X' || board[num] === 'O')) {
      console.log('winner');
      gameOver = true;
      return true;
    }
  }
  playerOneTurn = !playerOneTurn;
  console.log('no winner');
  return false;
}
const box = document.querySelectorAll('[data-box]');
box.forEach((item) => {
  item.addEventListener('click', (e) => {
    if (gameOver || gameTie) {
      return;
    }
    if (e.target.textContent !== '') {
      return;
    }
    if (playerOneTurn) {
      e.target.textContent = 'X';
      placeOnBoard(e.target.dataset.box, 'X');
      playerScore(e.target.dataset.box);
      checkWin(playerOneScore)
        ? (turnDiv.textContent = 'X wins!')
        : (turnDiv.textContent = 'O goes next');
    } else {
      e.target.textContent = 'O';
      placeOnBoard(e.target.dataset.box, 'O');
      playerScore(e.target.dataset.box);
      checkWin(playerTwoScore)
        ? (turnDiv.textContent = 'O wins!')
        : (turnDiv.textContent = 'X goes next');
    }
    console.log(playerOneScore);
  });
});
