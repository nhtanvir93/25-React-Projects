import { useEffect, useState } from "react";
import styles from "./styles.module.css";

const winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const TicTacToe = () => {
  const [squareBoxes, setSquareBoxes] = useState<string[]>(
    Array.from({ length: 9 }, () => "")
  );
  const [isX, setIsX] = useState(false);
  const [isGameEnd, setIsGameEnd] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    checkWinning();
  }, [squareBoxes]);

  const playAgain = () => {
    setSquareBoxes(Array.from({ length: 9 }, () => ""));
    setIsX(false);
    setMessage("");
    setIsGameEnd(false);
  };

  const checkWinning = () => {
    for (let i = 0; i < winningPatterns.length; i++) {
      const [first, second, third] = winningPatterns[i];

      if (
        squareBoxes[first] !== "" &&
        squareBoxes[first] === squareBoxes[second] &&
        squareBoxes[second] === squareBoxes[third]
      ) {
        setIsGameEnd(true);
        setMessage(`Player with ${squareBoxes[first]} wins the match`);
        return;
      }
    }

    if (squareBoxes.filter((squareBox) => squareBox !== "").length === 9) {
      setMessage(`Unfortunately, no one wins this match`);
      return setIsGameEnd(true);
    }
  };

  const handleClickBox = (idx: number) => {
    if (!squareBoxes[idx] && !isGameEnd) {
      const squareBoxesClone = [...squareBoxes];
      squareBoxesClone[idx] = isX ? "X" : "O";

      setSquareBoxes(squareBoxesClone);
      setIsX(!isX);
    }
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.header}>Tic Tac Toe</h3>
      <div className={styles.ticTacToeContainer}>
        {squareBoxes.map((squareBox, idx) => (
          <div
            key={"square" + idx}
            className={styles.square}
            onClick={() => handleClickBox(idx)}
          >
            {squareBox}
          </div>
        ))}
      </div>
      <div className={styles.player}>{isX ? "Player X" : "Player O"}</div>
      <div className={styles.message}>{message}</div>
      {isGameEnd && (
        <button onClick={playAgain} type="button" className={styles.btn}>
          Play Again
        </button>
      )}
    </div>
  );
};

export default TicTacToe;
