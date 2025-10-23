import React, { useState } from 'react';

const AudioIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24" 
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

// NEW: Component for rendering interactive bubbles
const Bubble = ({ word, type, onClick }) => {
  const handleBubbleClick = (e) => {
    e.stopPropagation(); // VERY important to prevent the card from flipping
    onClick(word);
  };
  return (
    <button className={`bubble ${type}`} onClick={handleBubbleClick}>
      {word}
    </button>
  );
};


const WordCard = ({ wordData, onToggleStar, onPlayAudio, onBubbleClick, cardColor }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  const handleCardClick = () => {
    setIsRevealed(!isRevealed);
  };

  const handleStarClick = (e) => {
    e.stopPropagation();
    onToggleStar(wordData.id);
  };

  const handleAudioClick = (e) => {
    e.stopPropagation();
    onPlayAudio(wordData.word);
  };

  const WordTitleWithAudio = () => (
    <div className="word-title">
      <h3>{wordData.word}</h3>
      {wordData.partOfSpeech && (
        <span className={`pos-tag ${wordData.partOfSpeech.toLowerCase()}`}>
          {wordData.partOfSpeech}
        </span>
      )}
      <button onClick={handleAudioClick} className="audio-btn" title={`Pronounce "${wordData.word}"`}>
        <AudioIcon />
      </button>
    </div>
  );

  return (
    <div 
      className="word-card-container" 
      onClick={handleCardClick} 
      title="Click to reveal meaning"
      style={{ '--card-bg-color': cardColor }}
    >
      <div className={`word-card ${isRevealed ? 'is-flipped' : ''}`}>
        {/* Front of the card */}
        <div className="card-face card-face--front">
          <WordTitleWithAudio />
        </div>
        {/* Back of the card */}
        <div className="card-face card-face--back">
           <WordTitleWithAudio />
           <p className="meaning">{wordData.meaning}</p>
           {wordData.exampleSentence && (
             <p className="example-sentence">
               <em>"{wordData.exampleSentence}"</em>
             </p>
           )}
           
           {/* NEW: Render Synonyms */}
           {wordData.synonyms && wordData.synonyms.length > 0 && (
            <div className="enrichment-section">
              <h4 className="bubble-heading">Synonyms</h4>
              <div className="bubble-container">
                {wordData.synonyms.map(syn => <Bubble key={syn} word={syn} type="synonym" onClick={onBubbleClick} />)}
              </div>
            </div>
           )}

           {/* NEW: Render Antonyms */}
           {wordData.antonyms && wordData.antonyms.length > 0 && (
            <div className="enrichment-section">
              <h4 className="bubble-heading">Antonyms</h4>
              <div className="bubble-container">
                {wordData.antonyms.map(ant => <Bubble key={ant} word={ant} type="antonym" onClick={onBubbleClick} />)}
              </div>
            </div>
           )}
        </div>
      </div>
    </div>
  );
};

export default WordCard;