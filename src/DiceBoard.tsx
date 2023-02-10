import React from "react";
import DiceCard from "./DiceCard";
import RollButton from "./RollButton";
import { GameState } from "./Types";

type Props = {
  gameState: GameState | undefined;
  triggerRoll: Function;
};

export default function DiceBoard({ gameState, triggerRoll }: Props) {
  return (
    <div className="grid mx-auto grid-rows-2">
      {/* logo */}
      <div className="mx-auto my-0 w-3/4 h-100 grid items-start gap-0 grid-cols-6">
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
        <RollButton triggerRoll={() => triggerRoll()} rollsLeft={gameState.rollsLeft} />
        <DiceCard die={gameState.dice[0]} />
        <DiceCard die={gameState.dice[1]} />
        <DiceCard die={gameState.dice[2]} />
        <DiceCard die={gameState.dice[3]} />
        <DiceCard die={gameState.dice[4]} />
      </div>
    </div>
  );
}
