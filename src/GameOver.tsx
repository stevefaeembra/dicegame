import React from "react";
import { GameState } from "./Types";
import { useLocalStorage } from "usehooks-ts";

type Props = {
  game: GameState;
};

export default function GameOver({ game }: Props) {
  const [highScore, setHighScore] = useLocalStorage("dicegame.highscore", 0);

  const updateHighScore = (total: number) => {
    if (total > highScore) {
      setHighScore(total);
    }
  };

  const scores = game.scores.map((cat) => (cat.disabled ? cat.score : 0));
  const total = scores.reduce((a, b) => a + b, 0);

  return (
    <div className="grid">
      <div className="row">
        <h1 className="text-secondary text-3xl">&nbsp;</h1>
        <h1 className="text-accent text-3xl">{total > highScore ? "New high score!" : "Game over!"}</h1>
        <h1 className="text-accent text-xl">You scored {total}</h1>
        <h1 className="text-accent text-xl">High Score {total > highScore ? total : highScore}</h1>
        <h1 className="text-secondary text-3xl">&nbsp;</h1>
      </div>
      <div className="row">
        <button
          onClick={() => {
            updateHighScore(total);
            window.location.reload();
          }}
          className="btn-wide btn-accent"
        >
          Play again!
        </button>
      </div>
    </div>
  );
}
