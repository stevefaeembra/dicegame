
export const DEFAULT_DICE = [
  { roll: 0, hold: false },
  { roll: 0, hold: false },
  { roll: 0, hold: false },
  { roll: 0, hold: false },
  { roll: 0, hold: false },
];

export const DEFAULT_SCORES = [
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
];

export const RULE_DESCRIPTIONS = [
  { id: 1, name: "Ones", fullName:"Ones", description:"Count ones", score:"Sum of all dice with 1 on the face" },
  { id: 2, name: "Twos", fullName:"Twos", description:"Count twos", score:"Sum of all dice with 2 on the face" },
  { id: 3, name: "Threes", fullName:"Threes", description:"Count threes", score:"Sum of all dice with 3 on the face" },
  { id: 4, name: "Fours", fullName:"Fours", description:"Count fours", score:"Sum of all dice with 4 on the face" },
  { id: 5, name: "Fives", fullName:"Fives", description:"Count fives", score:"Sum of all dice with 5 on the face" },
  { id: 6, name: "Sixes", fullName:"Sixes", description:"Count sixes", score:"Sum of all dice with 6 on the face" },
  { id: 7, name: "2 & 3", fullName:"Full House", description:"Two of one, Three of another", score:"20 points" },
  { id: 8, name: "4 line", fullName:"Four in a row", description:"Four in a row, e.g. 1234, 2345, 3456", score:"30 points" },
  { id: 9, name: "12345", fullName:"Small Straight", description:"12345", score:"40 points" },
  { id: 10, name: "23456", fullName:"Large Straight", description:"23456", score:"40 points" },
  { id: 11, name: "Yacht", fullName:"Yacht", description:"5 dice with the same number", score:"80 points" },
  { id: 12, name: "Chance", fullName:"Chance", description:"Wildcard", score:"Sum of the pips on the dice (6-30)" },
  { id: 13, name: "3OAK", fullName:"3 of a Kind", description:"Three dice with same number of pips, e.g 333 or 555", score:"20 points" },
  { id: 14, name: "4OAK", fullName:"4 of a Kind", description:"23456", score:"40 points" },
]

export const NEW_GAME_STATE = {
  roundsPlayed: 0,
    rollsLeft: 3,
    dice: DEFAULT_DICE,
    scores: DEFAULT_SCORES
}