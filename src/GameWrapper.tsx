import React, { useState } from "react";
import DiceBoard from "./DiceBoard";
import { GameState } from "./Types";
import { getPips } from "./Utils";

type Props = {};

export function GameWrapper({}: Props) {
  const [game, setGame] = useState<GameState>();

  const resetGame = () => {
    const newGame: GameState = {
      roundsPlayed: 0,
      rollsLeft: 3,
      dice: [
        { roll: 0, hold: false },
        { roll: 0, hold: false },
        { roll: 0, hold: false },
        { roll: 0, hold: false },
        { roll: 0, hold: false },
      ],
    };
    setGame(newGame);
    console.log("new game", newGame);
  };

  const doRoll = () => {
    // roll each die which are not being held.
    if (!game) return;
    const newDice = game.dice.map((die) =>
      die.hold
        ? die
        : {
            roll: getPips(),
            hold: die.hold,
          }
    );
    setGame({
      ...game,
      dice: newDice,
    });
  };

  if (!game) {
    resetGame();
  }

  return <DiceBoard triggerRoll={doRoll} gameState={game} />;
}
