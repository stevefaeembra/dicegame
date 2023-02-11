export type Die = {
  roll: number;
  hold: boolean;
}

export type Category = {
  id: number;
  name: string;
  score: number;
  disabled: boolean; // set once chosen
}

export type GameState = {
  roundsPlayed: number;
  rollsLeft: number;
  dice: Die[];
  scores: Category[];
}