// get random number 1..6

import { Die } from "./Types";

export const getPips = ():number => 1+Math.floor(Math.random() * 6);

// scoring methods. Given a set of dice, evaluate score

export const scoreMatching = (dice: Die[], pips: number):number => {
  // e.g. sum of all dice with given value (ones, twos etc)
  const matching = dice.filter(die => die.roll === pips);
  return matching.reduce((a, b) => a + b.roll, 0);
}

export const scoreChance = (dice: Die[]):number => {
  // sum of all dice, used in chance
  return dice.reduce((a, b) => a + b.roll, 0);
}

export const scoreConstant = (dice: Die[], value:number):number => {
  // fixed score, used in higher value scores
  return value;
}


