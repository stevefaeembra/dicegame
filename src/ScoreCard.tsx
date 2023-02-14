import React from "react";
import ScoreCategory from "./ScoreCategory";
import { GameState } from "./Types";

type Props = {
  game: GameState;
  acceptScore: Function;
};

export default function ScoreCard({ game, acceptScore }: Props) {
  if (!game) return;
  return (
    <div className="mx-auto my-0 w-100 grid items-start gap-0 grid-cols-6">
      {game.scores.map((cat, ix) => (
        <div key={`score_${ix}`}>
          <ScoreCategory acceptScore={cat.disabled ? () => {} : () => acceptScore(ix + 1)} category={cat} />
        </div>
      ))}
    </div>
  );
}
