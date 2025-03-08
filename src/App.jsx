import { useState } from "react";
import GameBoard from "./components/GameBoard.jsx";
import Player from "./components/Player.jsx";
import Log from "./components/Log.jsx";

function App() {
  const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);

  function handleSelectSquare( rowIndex, colIndex){
    setActivePlayer((currentActivePlayer)=> currentActivePlayer === 'X' ? 'O' : 'X');

    setGameTurns((prevTurns)=>{
      let currentPlayer = (prevTurns.length > 0 && prevTurns[0].player === 'X') ? 'O' : 'X';
      const updatedTurns = [
        { 
          square:{ row: rowIndex, col: colIndex},
          player: currentPlayer
        },
        ...prevTurns,
      ];
      
      return updatedTurns;
  })

  }
  return (
    <main>
      <header>
        <img src="game-logo.png" alt="Tic Tac Toe" />
        <h1>Tic-Tac-toe</h1>
      </header>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
          <Player name="Player 2" symbol="O" isActive={activePlayer === 'O'}/>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns}/>
      </div>
      <Log/>
    </main>
  );
}

export default App;
