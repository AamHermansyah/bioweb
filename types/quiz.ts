export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  image?: string;
}

export interface AnsweredQuestion {
  questionId: number;
  isCorrect: boolean;
  selectedAnswer: number;
}