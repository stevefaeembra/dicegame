import React, { useState } from "react";
import DiceBoard from "./DiceBoard";
import { Category, Die, GameState } from "./Types";
import { getPips, scoreChance, scoreMatching, scoreSpecificCategory } from "./Utils";

type Props = {};

export function GameWrapper({}: Props) {
  const [game, setGame] = useState<GameState>();
  const [gameOver, setGameOver] = useState(false);

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
        { id: 13, name: "3OAK", score: 0, disabled: false },
        { id: 14, name: "4OAK", score: 0, disabled: false },
      ],
    };
    setGame(newGame);
    console.log("new game", newGame);
  };

  const evaluateCurrentDice = (dice: Die[]): Category[] => {
    // work out which score categories match the current dice
    const rolls = dice.map((die) => die.roll).sort();
    const rollsString = rolls.join("");
    console.log("rolls:", rollsString);
    const possibleScores = [];

    // ones to sixes
    if (rolls.includes(1)) {
      possibleScores.push(1);
    }
    if (rolls.includes(2)) {
      possibleScores.push(2);
    }
    if (rolls.includes(3)) {
      possibleScores.push(3);
    }
    if (rolls.includes(4)) {
      possibleScores.push(4);
    }
    if (rolls.includes(5)) {
      possibleScores.push(5);
    }
    if (rolls.includes(6)) {
      possibleScores.push(6);
    }

    // three of a kind
    const threeofakind = ["111", "222", "333", "444", "555", "666"];

    const findThreeOfAKind = threeofakind.find((a) => rollsString.indexOf(a) != -1);
    if (findThreeOfAKind) {
      possibleScores.push(13);
    }

    // four of a kind
    const fourofakind = ["1111", "2222", "3333", "4444", "5555", "6666"];

    const findTFourOfAKind = fourofakind.find((a) => rollsString.indexOf(a) != -1);
    if (findTFourOfAKind) {
      possibleScores.push(14);
    }

    // full house (2 of one, 3 of another)
    // Yacht does not count
    const twoOfAKind = ["11", "22", "33", "44", "55", "66"];
    if (findThreeOfAKind) {
      const findTwoOfAKind = twoOfAKind.filter((a) => rollsString.indexOf(a) != -1);
      // following makes sure numbers are different e.g. 11122
      // rather than matching 11155 because it has 11 and 111
      if (findTwoOfAKind && findTwoOfAKind.length > 1) {
        possibleScores.push(7);
      }
    }

    // four in a row

    const fourinarow = ["1234", "12234", "12334", "2345", "22345", "23345", "23445", "3456", "33456", "34456", "34556"];

    const findFourInARow = fourinarow.find((a) => rollsString.indexOf(a) != -1);
    if (findFourInARow) {
      possibleScores.push(8);
    }

    // small straight
    if (rollsString === "12345") {
      possibleScores.push(9);
    }

    // big straight
    if (rollsString === "23456") {
      possibleScores.push(10);
    }

    // five of a kind
    const fiveofakind = ["11111", "22222", "33333", "44444", "55555", "66666"];

    const findFiveOfAKind = fiveofakind.find((a) => rollsString.indexOf(a) != -1);
    if (findFiveOfAKind) {
      possibleScores.push(11);
    }

    // chance
    possibleScores.push(12);

    const matchingCategories = possibleScores.map((id) => {
      const score = scoreSpecificCategory(dice, id);
      return {
        id,
        name: game?.scores[id - 1].name,
        score,
        disabled: false,
      };
    });

    return matchingCategories;
  };

  const _mergeScores = (possibleCategories: Category[]) => {
    // update scoreboard with possible scoring categories
    // only update ones set to disabled=false as the user has
    // used these categories
    const newScores = game?.scores.map((category) => {
      const replacement = possibleCategories.find((cat) => cat.id === category.id);
      if (category.disabled) {
        // user has locked in the score
        return category;
      }
      if (!category.disabled && replacement) {
        // show possible scoring opportunity
        return replacement;
      }
      return {
        // clear out scores which are no longer applicable
        ...category,
        score: 0,
      };
    });
    return newScores;
  };

  const doRoll = () => {
    // roll each die which are not being held.
    if (!game) return;
    let newDice = game.dice.map((die) =>
      die.hold
        ? die
        : {
            roll: getPips(),
            hold: die.hold,
          }
    );
    // following used to test rare combos
    // newDice = _setDice([1, 4, 5, 1, 3]); // debug
    const newScoreCategories = evaluateCurrentDice(newDice);
    const mergedScoreboard = _mergeScores(newScoreCategories);
    setGame({
      ...game,
      rollsLeft: game.rollsLeft > 0 ? game.rollsLeft - 1 : 0,
      dice: newDice,
      scores: mergedScoreboard,
    });
  };

  const _setDice = (initialDice: number[]) => {
    // utility to return a specific set of dice, used for testing
    const newDice = initialDice.map((die) => {
      return { roll: die, hold: false };
    });
    return newDice;
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

  const acceptScore = (categoryId: number) => {
    // accept a score category by clicking on its button.
    // this updates the scoreboard and advances to the next round
    // if all score categories are disabled, it's the end of the game
    // so trigger the modal.
    if (!categoryId || !game) {
      return;
    }
    const chosenCategory = game.scores.find((cat) => cat.id === categoryId);
    // replace existing scores, disable the chosen score category
    const newCategory = { ...chosenCategory, disabled: true };
    const newScores = game.scores.map((cat) => (cat.id === categoryId ? newCategory : cat));
    // next, remove scores from all non-disabled categories for next round
    const cleanedScores = newScores.map((cat) => (cat.disabled ? cat : { ...cat, score: 0 }));
    setGame({
      ...game,
      rollsLeft: 3, // start new Round
      dice: [
        { roll: 0, hold: false },
        { roll: 0, hold: false },
        { roll: 0, hold: false },
        { roll: 0, hold: false },
        { roll: 0, hold: false },
      ],
      scores: cleanedScores,
    });
    // if every score category filled, trigger new game
    if (cleanedScores.every((cat) => cat.disabled)) {
      console.log("set game over");
      setGameOver(true);
    }
  };

  if (!game) {
    console.clear();
    resetGame();
  }

  return (
    <DiceBoard
      isGameOver={gameOver}
      acceptScore={acceptScore}
      triggerHold={toggleHold}
      triggerRoll={doRoll}
      gameState={game}
    />
  );
}
