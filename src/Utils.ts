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

export const scoreSpecificCategory = (dice: Die[], categoryId: number): number => {
  // score a set of dice for a given score category
  switch (categoryId) {
    case 1:
      // ones
      return scoreMatching(dice,1);
      break;
    case 2:
      // twos
      return scoreMatching(dice,2);
      break;
    case 3:
      // threes
      return scoreMatching(dice,3);
      break;
    case 4:
      // fours
      return scoreMatching(dice,4);
      break;
    case 5:
      // fives
      return scoreMatching(dice,5);
      break;
    case 6:
      // sixes
      return scoreMatching(dice,6);
      break;
    case 7:
      // two + three
      return scoreConstant(dice,20);
      break;
    case 8:
      // 4 line
      return scoreConstant(dice,30);
      break;
    case 9:
      // 12345 small straight
      return scoreConstant(dice,40);
      break;
    case 10:
      // 23456 big straight
      return scoreConstant(dice,40);
      break;
    case 11:
      // 5 of a kind
      return scoreConstant(dice,80);
      break;
    case 12:
      // chance
      return scoreChance(dice);
      break;
    case 13:
      // 3 of a kind
      return scoreConstant(dice,20);
      break;
    case 14:
      // 4 of a kind
      return scoreConstant(dice,25);
      break;
    default:
      return 0;
  }
}


