import { getNeighborGrids8Way, gridAt, isValidPos } from "./common";
import { Board, CreateBoardParams, Grid } from "./types";

function createBoard({ width, height, getBombPositions }: CreateBoardParams): Board {  
  const board = createPlainBoard(width, height);
  putBombs(board, getBombPositions);  
  calcNeighborBombCounts(board);

  return board;
}

function createPlainBoard(width: number, height: number): Board {
  const grids = [] as Grid[];
  for (let y = 0; y < height; y++) {
    for (let x =0; x < width; x++) {
      grids.push({
        index: grids.length,
        type: "COVERED",
        isBomb: false,
        mark: "NONE",
        x,
        y,
        neighborBombCount: 0,
      });
    } 
  }

  return {
    height,
    width,
    grids,
  };
}

function getRandomBombPositions(bombCount: number): (board: Board) => number[] {
  return (board) => {
    const posSet = new Set<number>();
    while (posSet.size < bombCount) {
      posSet.add(Math.floor(Math.random() * board.grids.length));
    }
    return Array.from(posSet.values())  
  };
}


function getSpecifiedBombPositions(positions: { x: number, y: number}[]): (board: Board) => number[] {
  return (board) => {
    const indexes = [];
    for (let pos of positions) {
      if (!isValidPos(board, pos.x, pos.y)) {
        throw new Error(`Invalid Position: x=${pos.x} y=${pos.y}`);
      }
      indexes.push(pos.y * board.width + pos.x);
    }
    return indexes;  
  };
}

function calcNeighborBombCounts(board: Board) {
  for (let x = 0; x < board.width; x++) {
    for (let y = 0; y < board.height; y++) {
      calcNeighborBombCount(board, x, y);
    }
  }
}

function putBombs(board: Board, getBombPositions: (board: Board) => number[]) {
  for (let pos of getBombPositions(board)) {
    board.grids[pos].isBomb = true;
  }
}

function calcNeighborBombCount(board: Board, x: number, y: number) {
  const grid = gridAt(board, x, y);
  if (!grid) {
    throw new Error(`Illegal Paramter: x=${x}, y=${y}`);
  }
  const grids = getNeighborGrids8Way(board, x, y);
  grid.neighborBombCount = grids.reduce((acc, curr) => acc + (curr.isBomb ? 1 : 0), 0);
}

export { createBoard, getRandomBombPositions, getSpecifiedBombPositions };