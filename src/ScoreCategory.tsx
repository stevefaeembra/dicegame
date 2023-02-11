import React from "react";

type Props = {
  name: string;
  score: number;
  showScore: boolean;
  disabled: boolean;
};

export default function ScoreCategory({ name, score, showScore, disabled }: Props) {
  return (
    <div>
      <button className="btn gap-2">
        {name}
        <div className="badge">{score}</div>
      </button>
    </div>
  );
}
