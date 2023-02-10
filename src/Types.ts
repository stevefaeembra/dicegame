export type Die = {
  roll: number;
  hold: boolean;
}

export type GameState = {
  roundsPlayed: number;
  rollsLeft: number;
  dice: Die[];
}