export type DifficultyLevel = 'easy' | 'medium' | 'hard';

export interface GameState {
  score: number;
  timeLeft: number;
  level: DifficultyLevel;
  isPlaying: boolean;
  isGameOver: boolean;
}

export interface MuscleItem {
  id: string;
  name: string;
  function: string;
  type: string;
  image: string;
}

export interface MatchPair {
  id: string;
  muscleId: string;
  functionId: string;
  isMatched: boolean;
}