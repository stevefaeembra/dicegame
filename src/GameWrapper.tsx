import React, { useState } from "react";
import DiceBoard from "./DiceBoard";
import { GameState } from "./Types";

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

  if (!game) {
    resetGame();
  }

  return <DiceBoard gameState={game} />;
}
