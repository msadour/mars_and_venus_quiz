import React from 'react';
import type { Question } from '../types/quiz';
import './QuestionCard.css';

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (score: number) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ 
  question, 
  questionNumber, 
  totalQuestions, 
  onAnswer 
}) => {
  const scaleLabels = [
    "Strongly Disagree",
    "Disagree", 
    "Neutral",
    "Agree",
    "Strongly Agree"
  ];

  const scaleEmojis = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣"];

  return (
    <div className="question-card">
      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
        />
      </div>
      
      <div className="question-header">
        <span className="question-number">
          Question {questionNumber} of {totalQuestions}
        </span>
        <span className="energy-indicator">
          {question.type === 'masculine' ? '⚡' : '🌙'}
        </span>
      </div>
      
      <h2 className="question-text">{question.text}</h2>
      
      <div className="answer-options">
        {scaleLabels.map((label, index) => (
          <button
            key={index}
            className="answer-button"
            onClick={() => onAnswer(index + 1)}
          >
            <span className="emoji">{scaleEmojis[index]}</span>
            <span className="label">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
