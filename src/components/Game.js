      import Board from "./Board";
      import { useState } from "react";
      const Game = () => {
        const [board, setBoard] = useState(Array(9).fill(null));
        const [isX, setIsX] = useState(true);
        let state;
        function handleState(i) {
          setIsX((prevX) => !prevX);
          setBoard((prevBoard) => {
            const updatedBoard = [...prevBoard];
            updatedBoard[i] = isX ? "X" : "O";
            return updatedBoard;
          });
        }

        const winner = calculateWinner(board, isX);
        if (winner !== "null") {
          console.log(winner);
          state = `winner is ${winner}`;
        }
        let gameWin = winner !== "null" ? "head" : "game-win";
        function handleGameWin() {
          setBoard((prev) => {
            let updated = [...prev];
            updated = Array(9).fill(null);
            return updated;
          });
        }
        return (
          <div className="game">
            <div className={gameWin}>
              <h1>{state}</h1>
              <button onClick={() => handleGameWin()}>Re-Start</button>
            </div>
            <ul className="players">
              <li className={isX ? "active" : null}>Player- X</li>
              <li className={!isX ? "active" : null}>Player- O</li>
            </ul>
            <Board isX={isX} board={board} handleState={handleState} />
          </div>
        );
      };

      export default Game;

      function calculateWinner(arr, isX) {
        const winArr = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (const value of winArr) {
          const [a, b, c] = value;
          if (
            (arr[a] === isX ? "X" : "O") &&
            arr[a] === arr[b] &&
            arr[a] === arr[c]
          ) {
            return `${arr[a]}`;
          }
        }
        return null;
      }
