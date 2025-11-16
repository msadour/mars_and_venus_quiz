export interface Question {
  id: number;
  text: string;
  type: 'masculine' | 'feminine';
}

export interface Answer {
  questionId: number;
  score: number; // 1-5
}

export interface QuizResult {
  masculineScore: number;
  feminineScore: number;
  masculinePercentage: number;
  femininePercentage: number;
  interpretation: string;
}

export interface QuizState {
  currentQuestion: number;
  answers: Answer[];
  isCompleted: boolean;
  result: QuizResult | null;
}
