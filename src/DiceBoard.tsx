import React from "react";
import DiceCard from "./DiceCard";
import GameOver from "./GameOver";
import RollButton from "./RollButton";
import ScoreCard from "./ScoreCard";
import { GameState } from "./Types";

type Props = {
  gameState: GameState | undefined;
  triggerRoll: Function;
  triggerHold: Function;
  acceptScore: Function;
  isGameOver: boolean;
};

export default function DiceBoard({ gameState, triggerRoll, triggerHold, acceptScore, isGameOver }: Props) {
  if (!gameState) return null;
  return (
    <div className="container flex flex-col  mx-auto">
      {/* logo */}
      <div className="mx-auto my-4 h-20 flex items-start gap-0">
        <h1 className="mt-4 text-accent">High Roller</h1>
      </div>
      {/* dice board */}
      {!isGameOver ? (
        <div className="mx-auto my-4 w-3/4 grid items-start gap-0 grid-cols-6">
          <RollButton rollsLeft={gameState.rollsLeft} triggerRoll={triggerRoll} />
          <DiceCard triggerHold={() => triggerHold(0)} die={gameState.dice[0]} />
          <DiceCard triggerHold={() => triggerHold(1)} die={gameState.dice[1]} />
          <DiceCard triggerHold={() => triggerHold(2)} die={gameState.dice[2]} />
          <DiceCard triggerHold={() => triggerHold(3)} die={gameState.dice[3]} />
          <DiceCard triggerHold={() => triggerHold(4)} die={gameState.dice[4]} />
        </div>
      ) : null}
      {/* scorecard */}
      {<ScoreCard acceptScore={acceptScore} game={gameState} />}
      {/* Game over modal */}
      {isGameOver ? <GameOver game={gameState} /> : null}
    </div>
  );
}
