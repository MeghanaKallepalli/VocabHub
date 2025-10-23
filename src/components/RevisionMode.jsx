import React, { useState, useEffect } from 'react';

// NEW: A self-contained SVG component for a clean line icon.
const AudioIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
    <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
  </svg>
);

const RevisionCard = ({ wordData, isRevealed, onReveal, onPlayAudio }) => {
  
  const handleAudioClick = (e) => {
    e.stopPropagation();
    onPlayAudio(wordData.word);
  };

  const WordTitleWithAudio = () => (
    <div className="word-title">
      <h3>{wordData.word}</h3>
      <button onClick={handleAudioClick} className="audio-btn" title={`Pronounce "${wordData.word}"`}>
        <AudioIcon />
      </button>
    </div>
  );

  return (
    <div className="word-card-container revision-card-container" onClick={onReveal}>
      <div className={`word-card ${isRevealed ? 'is-flipped' : ''}`}>
        <div className="card-face card-face--front">
          <WordTitleWithAudio />
        </div>
        <div className="card-face card-face--back">
          <WordTitleWithAudio />
          <p className="meaning">{wordData.meaning}</p>
          {wordData.exampleSentence && (
            <p className="example-sentence">
              <em>"{wordData.exampleSentence}"</em>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const RevisionMode = ({ words, onExit, onPlayAudio }) => {
  const [queue, setQueue] = useState([]);
  const [isRevealed, setIsRevealed] = useState(false);
  const [totalWordsInSession, setTotalWordsInSession] = useState(0);

  useEffect(() => {
    const shuffled = [...words].sort(() => Math.random() - 0.5);
    setQueue(shuffled);
    setTotalWordsInSession(shuffled.length);
    setIsRevealed(false);
  }, [words]);

  const handleGotIt = () => {
    setQueue(prev => prev.slice(1));
    setIsRevealed(false);
  };

  const handleReviewAgain = () => {
    setQueue(prev => [...prev.slice(1), prev[0]]);
    setIsRevealed(false);
  };

  if (totalWordsInSession > 0 && queue.length === 0) {
    return (
      <div className="revision-mode-container completion-screen">
        <h2>Revision Complete!</h2>
        <p>Great work! You've reviewed all the words in this set.</p>
        <button className="revision-btn" onClick={onExit}>Return to List</button>
      </div>
    );
  }

  if (totalWordsInSession === 0) {
    return (
      <div className="revision-mode-container completion-screen">
        <h2>No Words to Revise</h2>
        <p>There are no words in the current filter to start a revision session.</p>
        <button className="revision-btn" onClick={onExit}>Return to List</button>
      </div>
    );
  }

  const currentWord = queue[0];
  const wordsCompleted = totalWordsInSession - queue.length;

  return (
    <div className="revision-mode-container">
      <div className="revision-header">
        <h2>Revision Mode ({wordsCompleted + 1} / {totalWordsInSession})</h2>
        <button className="close-btn" onClick={onExit} title="Exit Revision">&times;</button>
      </div>
      <div className="revision-content">
        <RevisionCard 
          wordData={currentWord}
          isRevealed={isRevealed}
          onReveal={() => setIsRevealed(true)}
          onPlayAudio={onPlayAudio}
        />
        {isRevealed && (
          <div className="revision-actions">
            <button className="action-btn review-again" onClick={handleReviewAgain}>
              Review Again 👎
            </button>
            <button className="action-btn got-it" onClick={handleGotIt}>
              Got It 👍
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RevisionMode;