import { Board, Grid } from "./types";

function gridAt(board: Board, x: number, y: number): Grid | undefined {
  if (!isValidPos(board, x, y)) {
    return undefined;
  }
  return board.grids[x + y * board.width];
}

function isValidPos({ height, width }: Board, x: number, y: number) {
  return !(x < 0 || x >= width || y < 0 || y >= height);
}

function getNeighborGrids4Way(board: Board, x: number, y: number): Grid[];
function getNeighborGrids4Way(board: Board, g: Grid): Grid[];
function getNeighborGrids4Way(board: Board, arg1: any, arg2?: any): Grid[] {
  if (typeof arg1 === 'number') {
    const [ x, y ] = [ arg1, arg2 ];
    const results = [] as Grid[];
    const left = gridAt(board, x - 1, y);
    if (left) {
      results.push(left);
    }
    const top = gridAt(board, x, y - 1);
    if (top) {
      results.push(top);
    }
    const right = gridAt(board, x + 1, y);
    if (right) {
      results.push(right);
    }
    const bottom = gridAt(board, x, y + 1);
    if (bottom) {
      results.push(bottom);
    }
    return results;  
  } else {
    const g = arg1;
    return getNeighborGrids4Way(board, g.x, g.y);
  }
}

function getNeighborGrids8Way(board: Board, x: number, y: number): Grid[];
function getNeighborGrids8Way(board: Board, grid: Grid): Grid[];
function getNeighborGrids8Way(board: Board, arg1: any, arg2?: any): Grid[] {
  if (typeof arg1 === 'number') {
    const [ x, y ] = [ arg1, arg2 ];
    const results = getNeighborGrids4Way(board, x, y);
    const leftTop = gridAt(board, x - 1, y - 1);
    if (leftTop) {
      results.push(leftTop);
    }
    const rightTop = gridAt(board, x + 1, y - 1);
    if (rightTop) {
      results.push(rightTop);
    }
    const leftBottom = gridAt(board, x - 1, y + 1);
    if (leftBottom) {
      results.push(leftBottom);
    }
    const rightBottom = gridAt(board, x + 1, y + 1);
    if (rightBottom) {
      results.push(rightBottom);
    }
    return results;  
  } else {
    const g = arg1;
    return getNeighborGrids8Way(board, g.x, g.y);
  }
}

export { gridAt, isValidPos, getNeighborGrids4Way, getNeighborGrids8Way };