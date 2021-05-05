import produce from "immer";
import { getNeighborGrids8Way, gridAt } from "./common";
import { Board, GameState, GameStateRef, Grid, SetGameState } from "./types";

async function openCover(
  state: GameState,
  setState: SetGameState,
  x: number,
  y: number
): Promise<void> {
  const grid = gridAt(state.board, x, y);
  if (!grid) {
    throw new Error(`Invalid position: x=${x}, y=${y}`);
  }
  if (grid.type !== "COVERED") {
    return;
  }
  if (grid.isBomb) {
    burst(setState);
    await new Promise(resolve => setTimeout(resolve, 1000));
    showGameOverPopup(setState);
    return;
  }
  await openGrid(setState, grid);
}


function burst(setState: SetGameState): void {
  setState((prevState) => produce(prevState, (draftState) => {
    // open all bombs
    for (let grid of draftState.board.grids) {
      if (grid.isBomb) {
        grid.type = "BOMB";
      }
    }
    draftState.status = "GAMEOVER";
  }));
}

function openGrid(setState: SetGameState, grid: Grid): Promise<void> {
  return new Promise((resolve) =>
    setState((prevState) => 
      produce(prevState, (draftState) => {
        const grids = grid.neighborBombCount > 0 ? [grid] : getSafeGrids(draftState.board, grid);
        const indexes = grids.map((grid) => grid.index);
        for (let idx of indexes) {
          draftState.board.grids[idx].type = "BLANK";
          draftState.restBlankCount--;
        }
        if (draftState.status === "READY") {
          draftState.status = "PLAYING";
          draftState.startTime = new Date().getTime();
        }
        if (draftState.restBlankCount <= 0) {
          draftState.status = "COMPLETE";
          setTimeout(() => {
            setState((prevState) => ({ ...prevState, isConguratulationPopupOpen: true }));
            resolve();
          }, 1000);
        } else {
          resolve();
        }
      })
    ));
}

function showGameOverPopup(setState: SetGameState) {
  setState((prevState) => produce(prevState, (draftState) => {
    draftState.isGameOverPopupOpen = true;
    return draftState;
  }));
}

function getSafeGrids(board: Board, grid: Grid) {
  const visitTable = createVisitTable();
  const targets = [grid];
  const results = [] as Grid[];
  while (true) {
    const target = targets.shift();
    if (!target) {
      break;
    }
    if (visitTable.isVisited(target)) {
      continue;
    }
    visitTable.visit(target);
    results.push(target);
    const neighbors = getNearbyCoveredSafeGrids(board, target).filter(visitTable.isNotVisited);
    for (let neighbor of neighbors) {
      if (neighbor.neighborBombCount > 0) {
        results.push(neighbor);
        visitTable.visit(neighbor);
      } else {
        targets.push(neighbor);
      }
    }
  }
  return results;
}

function getNearbyCoveredSafeGrids(board: Board, grid: Grid): Grid[] {
  if (grid.type !== "COVERED") {
    return [];
  }
  if (grid.isBomb) {
    return [];
  }
  const neighbors = getNeighborGrids8Way(board, grid);
  return neighbors.filter(isCoveredSafeGrid);
}

function isCoveredSafeGrid(grid: Grid): boolean {
  if (grid.type !== "COVERED") {
    return false;
  }
  if (grid.isBomb) {
    return false;
  }
  return true;
};

function createVisitTable() {
  const visited = new Set<string>();

  function isVisited(x: number, y: number): boolean;
  function isVisited(g: Grid): boolean;
  function isVisited(arg1: any, arg2?: any): boolean {
    if (typeof arg1 === 'number') {
      const [ x, y ] = [ arg1, arg2 ];
      return visited.has(`${x}-${y}`)
    } else {
      const g = arg1;
      return visited.has(`${g.x}-${g.y}`)
    }
  }
  function isNotVisited(x: number, y: number): boolean;
  function isNotVisited(g: Grid): boolean;
  function isNotVisited(arg1: any, arg2?: any): any {
    return !isVisited(arg1, arg2);
  }
  function visit(x: number, y: number): void;
  function visit(g: Grid): void;
  function visit(arg1: any, arg2?: any) {
    if (typeof arg1 === 'number') {
      const [ x, y ] = [ arg1, arg2 ];
      visited.add(`${x}-${y}`);
    } else {
      const g = arg1;
      visited.add(`${g.x}-${g.y}`);
    }
  }
  return {
    isVisited,
    isNotVisited,
    visit,
  };
}

export { openCover };