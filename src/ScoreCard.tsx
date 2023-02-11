import React from "react";
import ScoreCategory from "./ScoreCategory";

type Props = {};

export default function ScoreCard({}: Props) {
  return (
    <div className="mx-auto my-0 w-100 grid items-start gap-0 grid-cols-4">
      <ScoreCategory name="Ones" score={0} disabled={false} showScore={false} />
      <ScoreCategory name="Twos" score={0} disabled={false} showScore={false} />
      <ScoreCategory name="Threes" score={0} disabled={false} showScore={false} />
      <ScoreCategory name="Fours" score={0} disabled={false} showScore={false} />
      <ScoreCategory name="Fives" score={0} disabled={false} showScore={false} />
      <ScoreCategory name="Sixes" score={0} disabled={false} showScore={false} />
      <ScoreCategory name="2 & 3" score={0} disabled={false} showScore={false} />
      <ScoreCategory name="4 line" score={0} disabled={false} showScore={false} />
      <ScoreCategory name="12345" score={0} disabled={false} showScore={false} />
      <ScoreCategory name="23456" score={0} disabled={false} showScore={false} />
      <ScoreCategory name="Yacht" score={0} disabled={false} showScore={false} />
      <ScoreCategory name="Chance" score={0} disabled={false} showScore={false} />
    </div>
  );
}
