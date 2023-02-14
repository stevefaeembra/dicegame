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
    <div>
      <h1 className="text-secondary">Game Over!</h1>
      <h1 className="text-secondary">You scored {total}</h1>
    </div>
  );
}
