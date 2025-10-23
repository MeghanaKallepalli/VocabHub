import React from 'react';
import WordCard from './WordCard';

const cardColors = [
  '#F5D2D2', '#BADFDB', '#CBDCEB', '#DEE8CE', '#FEE8D9',
  '#DDF6D2', '#E4EFE7', '#FFF2C2', '#F5EFFF', '#FFD7C4'
];

// UPDATED: Destructure onBubbleClick prop
const WordList = ({ words, onToggleStar, onPlayAudio, onBubbleClick }) => {
  if (words.length === 0) {
    return (
      <div className="empty-state">
        <span className="empty-state-icon" role="img" aria-label="thinking face">🤔</span>
        <h2>No Words Found</h2>
        <p>Try a different search or filter combination!</p>
      </div>
    );
  }

  const groupedWords = words.reduce((acc, word) => {
    const date = word.date;
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(word);
    return acc;
  }, {});

  const sortedDates = Object.keys(groupedWords).sort((a, b) => new Date(b) - new Date(a));
  
  const formatDateForHeading = (dateString) => {
    const dateObj = new Date(dateString + 'T00:00:00');
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return dateObj.toLocaleDateString(undefined, options);
  };

  let globalWordIndex = 0;

  return (
    <>
      {sortedDates.map(date => (
        <section key={date} className="date-group">
          <h2 className="date-heading">{formatDateForHeading(date)}</h2>
          <div className="word-list">
            {groupedWords[date].map(word => {
              const cardColor = cardColors[globalWordIndex % cardColors.length];
              globalWordIndex++;

              return (
                <WordCard
                  key={word.id}
                  wordData={word}
                  onPlayAudio={onPlayAudio}
                  onBubbleClick={onBubbleClick} // UPDATED: Pass prop down to WordCard
                  cardColor={cardColor}
                />
              );
            })}
          </div>
        </section>
      ))}
    </>
  );
};

export default WordList;