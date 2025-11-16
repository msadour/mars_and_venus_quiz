import type { Question } from '../types/quiz';

export const questions: Question[] = [
  // Masculine Energy Questions
  { id: 1, text: "I like to take charge and make decisions quickly.", type: 'masculine' },
  { id: 2, text: "I feel most at ease when my life is structured and organized.", type: 'masculine' },
  { id: 3, text: "I prefer logic and reason over emotions when facing challenges.", type: 'masculine' },
  { id: 4, text: "I set clear goals and work persistently to achieve them.", type: 'masculine' },
  { id: 5, text: "I feel a strong need to protect and provide for the people I care about.", type: 'masculine' },
  { id: 6, text: "Independence is very important to me.", type: 'masculine' },
  { id: 7, text: "I find satisfaction in accomplishments and measurable results.", type: 'masculine' },
  { id: 8, text: "I naturally take action when something needs to get done.", type: 'masculine' },
  { id: 9, text: "I tend to stay grounded and stable even in stressful situations.", type: 'masculine' },
  { id: 10, text: "I rely on intellect and analysis more than intuition.", type: 'masculine' },
  { id: 11, text: "I have a good sense of direction.", type: 'masculine' },
  { id: 12, text: "It is easy for me to say no.", type: 'masculine' },
  { id: 13, text: "I like being the leader.", type: 'masculine' },
  { id: 14, text: "I like feeling powerful when I lift something heavy.", type: 'masculine' },
  { id: 15, text: "When something bad happens, I prefer to find a solution rather than seek consolation.", type: 'masculine' },
  
  // Feminine Energy Questions
  { id: 16, text: "I easily sense and understand the emotions of others.", type: 'feminine' },
  { id: 17, text: "I often rely on intuition or gut feelings to make decisions.", type: 'feminine' },
  { id: 18, text: "I find deep joy in nurturing or caring for others.", type: 'feminine' },
  { id: 19, text: "I value emotional connection more than achievement or success.", type: 'feminine' },
  { id: 20, text: "I am comfortable being open, vulnerable, and expressive.", type: 'feminine' },
  { id: 21, text: "I adapt easily and can go with the flow when plans change.", type: 'feminine' },
  { id: 22, text: "Creativity, playfulness, or beauty are important parts of my life.", type: 'feminine' },
  { id: 23, text: "I feel guided by empathy and compassion in most interactions.", type: 'feminine' },
  { id: 24, text: "I prefer collaboration and harmony over competition.", type: 'feminine' },
  { id: 25, text: "I feel deeply connected to my inner world, emotions, and spirituality.", type: 'feminine' },
  { id: 26, text: "I remember easily the faces of people.", type: 'feminine' },
  { id: 27, text: "I like to dance.", type: 'feminine' },
  { id: 28, text: "I like to talk about other people.", type: 'feminine' },
  { id: 29, text: "When someone plays the villain in a movie or play, I sometimes end up really hating them.", type: 'feminine' },
  { id: 30, text: "About a product, I care more about its reputation rather than its technical characteristics.", type: 'feminine' },
];

// Shuffle the questions to mix them up
export const shuffleQuestions = (questions: Question[]): Question[] => {
  const shuffled = [...questions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};
