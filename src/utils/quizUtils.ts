import type { Answer, QuizResult, Question } from '../types/quiz';

export const calculateResult = (answers: Answer[], questions: Question[]): QuizResult => {
  let masculineScore = 0;
  let feminineScore = 0;

  answers.forEach(answer => {
    const question = questions.find(q => q.id === answer.questionId);
    if (question) {
      if (question.type === 'masculine') {
        masculineScore += answer.score;
      } else {
        feminineScore += answer.score;
      }
    }
  });

  const totalScore = masculineScore + feminineScore;
  const masculinePercentage = Math.round((masculineScore / totalScore) * 100);
  const femininePercentage = 100 - masculinePercentage;

  const interpretation = getInterpretation(masculinePercentage);

  return {
    masculineScore,
    feminineScore,
    masculinePercentage,
    femininePercentage,
    interpretation
  };
};

const getInterpretation = (masculinePercentage: number): string => {
  if (masculinePercentage >= 70) {
    return "You express strong masculine traits — logic, action, structure, protection. You might benefit from developing more emotional awareness and receptivity.";
  } else if (masculinePercentage >= 50) {
    return "You're action-oriented yet fairly balanced; you value both achievement and relationships.";
  } else if (masculinePercentage >= 45) {
    return "You embody harmony between doing and being, logic and intuition, intellect and emotion.";
  } else if (masculinePercentage >= 30) {
    return "You lead with intuition, empathy, and creativity while maintaining some structure and grounding.";
  } else {
    return "You are deeply intuitive, nurturing, and emotionally open — cultivating more focus and structure could support your flow.";
  }
};
