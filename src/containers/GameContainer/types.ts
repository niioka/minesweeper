import React from "react";

export type GridType = "BLANK" | "BOMB" | "COVERED";
export type MarkType = "NONE" | "UNKNOWN" | "FLAG";

export interface Grid {
  index: number;
  type: GridType;
  isBomb: boolean;
  mark: MarkType;
  x: number;
  y: number;
  neighborBombCount: number;
  backgroundColor?: string;
}

export interface Board {
  width: number;
  height: number;
  grids: Grid[];
}

export interface CreateBoardParams {
  width: number;
  height: number;
  getBombPositions: (board: Board) => number[];
}

export interface GameState {
  isGameOverPopupOpen: boolean;
  isConguratulationPopupOpen: boolean;
  startTime: number;
  initialBombCount: number;
  restBombCount: number;
  restBlankCount: number;
  elapsedSeconds: number;
  status: "READY" | "PLAYING" | "COMPLETE" | "GAMEOVER";
  board: Board;
  endTime: number;
  bestTime: number;
}

export type SetGameState = React.Dispatch<React.SetStateAction<GameState>>;