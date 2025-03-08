import GameBoard from "./components/GameBoard.jsx";
import Player from "./components/Player.jsx";

function App() {
  return (
    <main>
      <header>
        <img src="game-logo.png" alt="Tic Tac Toe" />
        <h1>Tic-Tac-toe</h1>
      </header>
      <div id="game-container">
        <ol id="players">
          <Player name="Player 1" symbol="X" />
          <Player name="Player 2" symbol="O" />
        </ol>
        <GameBoard/>
      </div>
    </main>
  );
}

export default App;
