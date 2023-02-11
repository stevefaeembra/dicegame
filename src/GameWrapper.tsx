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
      scores: [
        { id: 1, name: "Ones", score: 0, disabled: false },
        { id: 2, name: "Twos", score: 0, disabled: false },
        { id: 3, name: "Threes", score: 0, disabled: false },
        { id: 4, name: "Fours", score: 0, disabled: false },
        { id: 5, name: "Fives", score: 0, disabled: false },
        { id: 6, name: "Sixes", score: 0, disabled: false },
        { id: 7, name: "2 & 3", score: 0, disabled: false },
        { id: 8, name: "4 Line", score: 0, disabled: false },
        { id: 9, name: "12345", score: 0, disabled: false },
        { id: 10, name: "23456", score: 0, disabled: false },
        { id: 11, name: "Yacht", score: 0, disabled: false },
        { id: 12, name: "Chance", score: 0, disabled: false },
      ],
    };
    setGame(newGame);
    console.log("new game", newGame);
  };

  const doRoll = () => {
    // roll each die which are not being held.
    if (!game) return;
    if (game.rollsLeft === 0) return;
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
      rollsLeft: game.rollsLeft > 0 ? game.rollsLeft - 1 : 0,
      dice: newDice,
    });
  };

  const toggleHold = (dieNumber: number) => {
    // toggle hold status of given die number
    if (!game) return;
    const newDice = game.dice.map((die, index) => {
      return index !== dieNumber
        ? die
        : {
            ...die,
            hold: !die.hold,
          };
    });
    setGame({
      ...game,
      dice: newDice,
    });
  };

  if (!game) {
    resetGame();
  }

  return <DiceBoard triggerHold={toggleHold} triggerRoll={doRoll} gameState={game} />;
}
