import React from "react";
import ScoreCategory from "./ScoreCategory";
import { GameState } from "./Types";

type Props = {
  game: GameState;
  acceptScore: Function;
};

export default function ScoreCard({ game, acceptScore }: Props) {
  if (!game) return;
  const scores = game.scores.map((cat) => (cat.disabled ? cat.score : 0));
  const total = scores.reduce((a, b) => a + b, 0);
  return (
    <div className="mx-auto my-0 w-100 grid items-start gap-0 grid-cols-6">
      {game.scores.map((cat, ix) => (
        <div key={`score_${ix}`}>
          <ScoreCategory acceptScore={cat.disabled ? () => {} : () => acceptScore(ix + 1)} category={cat} />
        </div>
      ))}
      {<button className="btn-block btn-accent">{total} pts.</button>}
    </div>
  );
}
