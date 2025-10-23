import React, { useState } from 'react';

const WordForm = ({ onAddWord }) => {
  const [word, setWord] = useState('');
  const [meaning, setMeaning] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!word.trim() || !meaning.trim()) {
      alert('Please fill in both the word and the meaning.');
      return;
    }
    onAddWord(word, meaning);
    setWord('');
    setMeaning('');
  };

  return (
    <form className="word-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter the new word"
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
      <textarea
        placeholder="Enter the meaning and your notes"
        rows="3"
        value={meaning}
        onChange={(e) => setMeaning(e.target.value)}
      ></textarea>
      <button type="submit">Add Word</button>
    </form>
  );
};

export default WordForm;