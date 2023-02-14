import React from "react";
import { GameState } from "./Types";

type Props = {
  game: GameState;
};

export default function GameOver({ game }: Props) {
  console.log("Showing game over modal");
  const scores = game.scores.map((cat) => (cat.disabled ? cat.score : 0));
  const total = scores.reduce((a, b) => a + b, 0);
  return (
    <div className="grid">
      <div className="row">
        <h1 className="text-secondary">Game Over!</h1>
        <h1 className="text-secondary">You scored {total}</h1>
      </div>
      <div className="row">
        <button onClick={() => window.location.reload()} className="btn-wide btn-accent">
          Play again!
        </button>
      </div>
    </div>
  );
}
