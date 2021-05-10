import React, { useState } from 'react';
import './App.css';
import { GameContainer } from './containers/GameContainer';
import { MenuContainer } from './containers/MenuContainer';
import { StartGameArgs } from './types/game';

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
