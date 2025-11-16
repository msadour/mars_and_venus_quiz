import { useState, useEffect } from 'react';
import type { QuizState, Answer, Question } from './types/quiz';
import { questions, shuffleQuestions } from './data/questions';
import { calculateResult } from './utils/quizUtils';
import QuestionCard from './components/QuestionCard';
import ResultsCard from './components/ResultsCard';
import './App.css';

function App() {
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    answers: [],
    isCompleted: false,
    result: null
  });

  useEffect(() => {
    // Shuffle questions on component mount
    setShuffledQuestions(shuffleQuestions(questions));
  }, []);

  const handleAnswer = (score: number) => {
    const currentQ = shuffledQuestions[quizState.currentQuestion];
    const newAnswer: Answer = {
      questionId: currentQ.id,
      score
    };

    const updatedAnswers = [...quizState.answers, newAnswer];
    const isLastQuestion = quizState.currentQuestion === shuffledQuestions.length - 1;

    if (isLastQuestion) {
      // Quiz completed, calculate results
      const result = calculateResult(updatedAnswers, questions);
      setQuizState({
        ...quizState,
        answers: updatedAnswers,
        isCompleted: true,
        result
      });
    } else {
      // Move to next question
      setQuizState({
        ...quizState,
        currentQuestion: quizState.currentQuestion + 1,
        answers: updatedAnswers
      });
    }
  };

  const handleRestart = () => {
    setShuffledQuestions(shuffleQuestions(questions));
    setQuizState({
      currentQuestion: 0,
      answers: [],
      isCompleted: false,
      result: null
    });
  };

  if (shuffledQuestions.length === 0) {
    return (
      <div className="app loading">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Preparing your quiz...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">
          <span className="mars">⚡ Mars</span>
          <span className="and">&</span>
          <span className="venus">Venus 🌙</span>
        </h1>
        <p className="app-subtitle">Discover Your Masculine & Feminine Energy Balance</p>
      </header>

      <main className="app-main">
        {!quizState.isCompleted ? (
          <QuestionCard
            question={shuffledQuestions[quizState.currentQuestion]}
            questionNumber={quizState.currentQuestion + 1}
            totalQuestions={shuffledQuestions.length}
            onAnswer={handleAnswer}
          />
        ) : (
          quizState.result && (
            <ResultsCard
              result={quizState.result}
              onRestart={handleRestart}
            />
          )
        )}
      </main>

      <footer className="app-footer">
        <p>Explore the balance between action and intuition, logic and emotion</p>
      </footer>
    </div>
  );
}

export default App;
