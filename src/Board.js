import React, { useState } from "react";
import Cell from "./Cell";
import "./Board.css";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/
// const nrows = 5;
// const ncols = 5;
// 
// const chanceLightStartsOn = "t"


function Board({ nrows, ncols, chanceLightStartsOn = 0 }) {
  const [board, setBoard] = useState(createBoard);
  //const [board, setBoard] = useState(createBoard());

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  function createBoard() {
    // let initialBoard = [nrows][ncols];
    let initialBoard = Array.from({ length: nrows }).map(
      row => Array.from({ length: ncols }).map(
        // 
        cell => Math.random() < chanceLightStartsOn
        //The code below this was to test the hasWon() function when all are false.
        // cell => 1 === chanceLightStartsOn
      )
    )

    // TODO: create array-of-arrays of true/false values
    console.log(initialBoard)
    return initialBoard;
  };


  function hasWon() {
    // TODO: check the board in state to determine whether the player has won.
    // return board.every(row => row.every(cell => !cell));
    console.log("testing")
  }

  function flipCellsAround(coord) {
    setBoard(oldBoard => {
      const [y, x] = coord.split("-").map(Number);

      const flipCell = (y, x, boardCopy) => {
        // if this coord is actually on board, flip it

        if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
          boardCopy[y][x] = !boardCopy[y][x];
        }
      };

      const boardCopy = oldBoard.map(row => [...row]);


      // TODO: Make a (deep) copy of the oldBoard

      // TODO: in the copy, flip this cell and the cells around it
      flipCell(y, x, boardCopy);
      flipCell(y, x + 1, boardCopy);
      flipCell(y, x - 1, boardCopy);
      flipCell(y - 1, x, boardCopy);
      flipCell(y + 1, x, boardCopy);
      // TODO: r-1eturn the copy

      return boardCopy;
    });
  }

  if (hasWon()) {
    console.log("has won!!")
  }

  // if the game is won, just show a winning msg & render nothing else
  let tblBoard = []
  // TODO: make table board
  console.log(board)
  for (let y = 0; y < nrows; y++) {
    let row = [];
    for (let x = 0; x < ncols; x++) {
      let coord = `${y}-${x}`;
      console.log(`${board[y][x]} y is ${y} x is ${x}`)
      row.push(
        <Cell
          key={coord}
          isLit={board[y][x]}
          flipCellsAroundMe={evt => flipCellsAround(coord)}
        />,
      )
    }
    tblBoard.push(<tr key={y}>{row}</tr>)
  }
  return (
    <table className="Board">
      <tbody>{tblBoard}</tbody>
    </table>
  )
}


// TOD

export default Board;
