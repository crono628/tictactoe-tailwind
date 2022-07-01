let playerOneTurn = true;

let playerOneScore = [];
let playerTwoScore = [];
let gameBoard = ['', '', '', '', '', '', '', '', ''];
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

const box = document.querySelectorAll('[data-box]');
box.forEach((item) => {
  item.addEventListener('click', () => {
    console.log(item.dataset.box);
  });
});
