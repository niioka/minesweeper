import { produce } from "immer";
import { gridAt } from "./common";
import { SetGameState } from "./types";

function changeMark(setState: SetGameState, x: number, y: number) {
  setState((prevState) => produce(prevState, state => {
    const grid = gridAt(state.board, x, y);
    if (!grid) {
      throw new Error(`Invalid position: x=${x}, y=${y}`);
    }
    if (grid.type !== "COVERED") {
      return;
    }
    
    switch (grid.mark) {
      case "NONE":
        grid.mark = "FLAG";
        state.restBombCount--
        break;
      case "FLAG":
        grid.mark = "UNKNOWN";
        state.restBombCount++;
        break;
      case "UNKNOWN": 
        grid.mark = "NONE"; 
        break;
    }
  
  }));
}

export { changeMark };