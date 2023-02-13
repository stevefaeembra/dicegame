import React from "react";
import DiceCard from "./DiceCard";
import RollButton from "./RollButton";
import ScoreCard from "./ScoreCard";
import { GameState } from "./Types";

type Props = {
  gameState: GameState;
  triggerRoll: Function;
  triggerHold: Function;
};

export default function DiceBoard({ gameState, triggerRoll, triggerHold }: Props) {
  if (!gameState) return;
  return (
    <div className="container grid mx-auto grid-rows-3">
      {/* logo */}
      <div className="mx-auto my-0 w-100 h-100 grid items-start gap-0 grid-cols-6">
        <div></div>
        <figure className="col-span-3 grow mx-auto">
          <img className="object-cover w-48" src="/img/logo.png" />
        </figure>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {/* dice board */}
      <div className="mx-auto my-0 w-3/4 grid items-start gap-0 grid-cols-6">
        <RollButton rollsLeft={gameState.rollsLeft} triggerRoll={triggerRoll} />
        <DiceCard triggerHold={() => triggerHold(0)} die={gameState.dice[0]} />
        <DiceCard triggerHold={() => triggerHold(1)} die={gameState.dice[1]} />
        <DiceCard triggerHold={() => triggerHold(2)} die={gameState.dice[2]} />
        <DiceCard triggerHold={() => triggerHold(3)} die={gameState.dice[3]} />
        <DiceCard triggerHold={() => triggerHold(4)} die={gameState.dice[4]} />
      </div>
      {/* scorecard */}
      {gameState.rollsLeft < 3 ? <ScoreCard game={gameState} /> : null}
    </div>
  );
}
