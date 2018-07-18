class Game {
  constructor(n) {
    this.board = Board(n)
    this.turnX = true;
  }
  
  placePiece(row, column) {
    if(this.turnX){
      this.board[row][column] = 'X';
      this.turnX = !this.turnX;
      this.checkWinner();
    } else {
      this.boad[row][column] = 'O';
      this.turnX = !this.turnX;
      this.checkWinner();
    }
  }

  checkWinner() {
    // go through each row column and diagonal to see if there is a winner.
  }

}

let Board = (n) => {
  let horiz = new Array;
  let board = new Array;
  let x = 0;

  while(x < n){
    horiz.push('-');
    x++;
  }
  x = 0;

  while(x < n){
    board.push(horiz)
    x++;
  }
  return board;
}

console.log(Board(5))