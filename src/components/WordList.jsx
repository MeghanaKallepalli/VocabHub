import React from 'react';
import WordCard from './WordCard';

const WordList = ({ words, onDelete }) => {
  if (words.length === 0) {
    return <p className="no-words">No words found. Try a different search or add a new word!</p>;
  }

  return (
    <div className="word-list">
      {words.map((word) => (
        <WordCard key={word.id} wordData={word} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default WordList;