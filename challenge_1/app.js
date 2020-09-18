let nextTurn = 'O';
let board = [['','',''], ['','',''], ['','','']]

function toggle(id, next = nextTurn) {
  id = id.id;
  let loc = id.split('');
  let keys = {a: 0, b:1, c:2};
  if (nextTurn === 'O') {
    nextTurn = 'X'
  } else {
    nextTurn = 'O'
  }
  board[keys[loc[0]]][loc[1]] = nextTurn;
  document.getElementById(''+id).innerHTML = nextTurn;
  checkWinner(board);
};

function checkWinner(board){
  let winner = checkHorizontal(board) || checkVertical(board) || checkMajorDiag(board) || checkMinorDiag(board);

  if (!!winner) {
    alert(winner + 'is the Baddest');
    reset(winner);
  }
};

function checkHorizontal(board){
  let winner = '';
  for (var i = 0; i < board.length; i++) {
    let currRow = board[i];
    if (currRow.every((currCell) => currCell === 'X')) {
      winner = 'X';
    }
    if (currRow.every((currCell) => currCell === 'O')) {
      winner = 'O';
    }
  }
  return winner;
};

function checkVertical(board){
  let winner = '';
  for (var i = 0; i < board[0].length; i++) {
    if (board.every((currRow) => currRow[i] === 'X')) {
      winner = 'X';
    }
    if (board.every((currRow) => currRow[i] === 'O')) {
      winner = 'O';
    }
  }
  return winner;
};

function checkMajorDiag(board){
  let winner = '';
  let major = [board[0][0], board[1][1], board[2][2]];
  if (major.every((cell) => cell === 'X')) {
    winner = 'X';
  }
  if (major.every((cell) => cell === 'O')) {
    winner = 'O';
  }
  return winner;
};

function checkMinorDiag(board){
  let winner = '';
  let major = [board[0][2], board[1][1], board[2][0]];
  if (major.every((cell) => cell === 'X')) {
    winner = 'X';
  }
  if (major.every((cell) => cell === 'O')) {
    winner = 'O';
  }
  return winner;
};


function reset(nextStart = 'O') {
  console.log(nextStart);
  nextTurn = nextStart === 'X'? nextStart = 'O' : nextStart = 'X';
  console.log(nextTurn);
  board = [['','',''], ['','',''], ['','','']];
  let cells = document.getElementsByClassName("cell");
  // alert('RESET');
  [].slice.call(cells).forEach(function(cell) {
    cell.innerHTML = 'Click Bait';
  })
}