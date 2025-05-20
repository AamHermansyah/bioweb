export type MovementType = 'flexion' | 'extension' | 'abduction' | 'adduction' | 'rotation';
export type JointType = 'shoulder' | 'elbow' | 'wrist' | 'hip' | 'knee' | 'ankle' | 'spine';
export type MuscleGroup = 'biceps' | 'triceps' | 'deltoid' | 'pectoralis' | 'quadriceps' | 'hamstrings' | 'gluteus' | 'gastrocnemius' | 'trapezius' | 'abdominals';
export type DifficultyLevel = 'easy' | 'medium' | 'hard';

export interface MovementScenario {
  id: number;
  title: string;
  description: string;
  joint: JointType;
  movementType: MovementType;
  primaryMuscles: MuscleGroup[];
  antagonistMuscles: MuscleGroup[];
  difficulty: DifficultyLevel;
  imageURL: string;
  hint?: string;
}

export interface GameState {
  currentScenarioIndex: number;
  score: number;
  timeLeft: number;
  lives: number;
  level: DifficultyLevel;
  isPlaying: boolean;
  isGameOver: boolean;
  answeredCorrectly: boolean[];
  showFeedback: boolean;
  feedbackType: 'correct' | 'incorrect' | null;
}

export interface Answer {
  selectedMovement: MovementType | null;
  selectedMuscles: MuscleGroup[];
}