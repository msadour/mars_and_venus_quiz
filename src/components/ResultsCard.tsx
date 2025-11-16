import React from 'react';
import type { QuizResult } from '../types/quiz';
import './ResultsCard.css';

interface ResultsCardProps {
  result: QuizResult;
  onRestart: () => void;
}

const ResultsCard: React.FC<ResultsCardProps> = ({ result, onRestart }) => {
  const { masculinePercentage, femininePercentage, interpretation } = result;

  const getResultTitle = () => {
    if (masculinePercentage >= 70) return "Predominantly Masculine Energy ⚡";
    if (masculinePercentage >= 50) return "Masculine-Leaning Balance ⚖️";
    if (masculinePercentage >= 45) return "Perfectly Balanced 🌗";
    if (masculinePercentage >= 30) return "Feminine-Leaning Balance ⚖️";
    return "Predominantly Feminine Energy 🌙";
  };

  const getGradient = () => {
    if (masculinePercentage >= 70) return "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
    if (masculinePercentage >= 50) return "linear-gradient(135deg, #f093fb 0%, #667eea 100%)";
    if (masculinePercentage >= 45) return "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)";
    if (masculinePercentage >= 30) return "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)";
    return "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)";
  };

  return (
    <div className="results-card" style={{ background: getGradient() }}>
      <div className="results-header">
        <h1 className="results-title">{getResultTitle()}</h1>
      </div>

      <div className="energy-breakdown">
        <div className="energy-item">
          <div className="energy-icon">⚡</div>
          <div className="energy-info">
            <h3>Masculine Energy</h3>
            <div className="percentage">{masculinePercentage}%</div>
          </div>
        </div>

        <div className="balance-indicator">
          <div className="balance-bar">
            <div 
              className="masculine-fill" 
              style={{ width: `${masculinePercentage}%` }}
            />
            <div 
              className="feminine-fill" 
              style={{ width: `${femininePercentage}%` }}
            />
          </div>
        </div>

        <div className="energy-item">
          <div className="energy-icon">🌙</div>
          <div className="energy-info">
            <h3>Feminine Energy</h3>
            <div className="percentage">{femininePercentage}%</div>
          </div>
        </div>
      </div>

      <div className="interpretation">
        <h2>Your Energy Profile</h2>
        <p>{interpretation}</p>
      </div>

      <div className="action-buttons">
        <button className="restart-button" onClick={onRestart}>
          Take Quiz Again
        </button>
        <button 
          className="share-button" 
          onClick={() => {
            if (navigator.share) {
              navigator.share({
                title: 'Mars & Venus Quiz Results',
                text: `I'm ${masculinePercentage}% Masculine and ${femininePercentage}% Feminine energy! Take the quiz to find your balance.`,
                url: window.location.href
              });
            }
          }}
        >
          Share Results
        </button>
      </div>
    </div>
  );
};

export default ResultsCard;
