import React, { useState } from 'react';

const WordCard = ({ wordData, onDelete }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  const handleDelete = (e) => {
    e.stopPropagation(); // Prevents the card click event from firing
    if (window.confirm(`Are you sure you want to delete "${wordData.word}"?`)) {
      onDelete(wordData.id);
    }
  };

  return (
    <div
      className={`word-card ${isRevealed ? 'revealed' : 'revealed'}`}
      onClick={() => setIsRevealed(!isRevealed)}
    >
      {/* <button className="delete-btn" onClick={handleDelete}>
        &times;
      </button> */}
      <h3>{wordData.word}</h3>
      <p className="meaning">{wordData.meaning}</p>
    </div>
  );
};

export default WordCard;