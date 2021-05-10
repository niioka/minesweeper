
import React, { useEffect, useRef, useState } from "react";
import produce from "immer";
import { BoardView } from "../../components/BoardView"
import { GridView } from "../../components/GridView";
import { GameOverPopup } from "../../components/GameOverPopup";
import { GamePage } from "../../components/GamePage";
import { createBoard, getRandomBombPositions } from "./createBoard";
import { GameState, SetGameState } from "./types";
import { openCover } from "./openCover";
import { changeMark } from "./changeMark";
import { ConguratulationPopup } from "../../components/ConguratulationPopup";


function init(width: number, height: number, bombCount: number): GameState {
  return {
    isGameOverPopupOpen: false,
    isConguratulationPopupOpen: false,
    startTime: 0,
    initialBombCount: bombCount,
    restBombCount: bombCount,
    restBlankCount: width * height - bombCount,
    elapsedSeconds: 0,
    status: "READY",
    board: createBoard({
      width,
      height,
      getBombPositions: getRandomBombPositions(bombCount),
    }),
    endTime: -1,
    bestTime: -1,
  };
}

function retry(setState: SetGameState) {
  setState((prevState) => init(prevState.board.width, prevState.board.height, prevState.initialBombCount));
}

interface Props {
  width: number;
  height: number;
  bombCount: number;
  backToMenu: () => void;
}

const GameContainer: React.VFC<Props> = ({ width, height, bombCount, backToMenu }) => {
  const [state, setState] = useState<GameState>(() => init(width, height, bombCount));

  useEffect(() => {    
    const tid = setInterval(() => setState((prevState) => { 
      if (prevState.status === "PLAYING") {
        return {
          ...prevState,
          elapsedSeconds: Math.floor((new Date().getTime() - prevState.startTime) / 1000),
        }
      }
      return prevState;
    }), 500);
    return () => clearInterval(tid);
  }, []);

  return (
    <GamePage 
      restBombCount={state.restBombCount}
      elapsedSeconds={state.elapsedSeconds}
      renderBoardView={() =>
        <BoardView board={state.board} 
          renderGridView={(grid) =>
            <GridView 
              key={grid.index}
              grid={grid} 
              isDisabled={state.status === "COMPLETE" || state.status === "GAMEOVER"}
              openCover={(grid) => openCover(state, setState, grid.x, grid.y)} 
              changeMark={(grid) => changeMark(setState, grid.x, grid.y)}
            />
          } 
        />
      }
      renderGameOverPopup={() => 
        <GameOverPopup isOpen={state.isGameOverPopupOpen} retry={() => retry(setState)} backToMenu={backToMenu} />
      }
      renderConguratulationPopup={() =>
        <ConguratulationPopup 
          isOpen={state.isConguratulationPopupOpen} 
          time={state.endTime} 
          bestTime={state.bestTime} 
          retry={() => retry(setState)}
          backToMenu={backToMenu}
        />
      }
    />
  );
};

export { GameContainer };