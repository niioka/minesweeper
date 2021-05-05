import React, { useReducer, useState } from 'react';
import { produce } from "immer";
import './App.css';
import { GameContainer } from './containers/GameContainer';
import { GameState, SetGameState } from './containers/GameContainer/types';
import { MenuContainer } from './containers/MenuContainer';
import { StartGameArgs } from './types/game';

type Action = { type: 'START_GAME', args: StartGameArgs };

type State = {
  currentPage: 'MENU';
}
| {
  currentPage: 'GAME';
  startGameArgs: StartGameArgs;
};

type SetState = React.Dispatch<React.SetStateAction<State>>;

function startGame(setState: SetState, args: StartGameArgs) {
  setState({ currentPage: 'GAME', startGameArgs: args });
}

function backToMenu(setState: SetState) {
  setState({
    currentPage: 'MENU',
  });
}

function App() {
  const [state, setState] = useState<State>({ currentPage: 'MENU' });
  return (
    <div className="App">
      <MenuContainer 
        isOpen={state.currentPage === 'MENU'}
        startGame={(args) => startGame(setState, args)}
      />
      {state.currentPage === 'GAME' &&
        <GameContainer
          width={state.startGameArgs.width}
          height={state.startGameArgs.height}
          bombCount={state.startGameArgs.bombCount}
          backToMenu={() => backToMenu(setState)}
        />
      }
    </div>
  );
}

export default App;
