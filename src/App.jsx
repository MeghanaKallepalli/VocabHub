import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import DateFilter from './components/DateFilter';
import WordList from './components/WordList';
import RevisionMode from './components/RevisionMode';
import { initialWords } from './data/initialWords';
import './App.css';

const BATCH_SIZE = 25;

function App() {
  const [words, setWords] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDate, setSelectedDate] = useState('all');
  const [isRevisionMode, setIsRevisionMode] = useState(false);
  const [voices, setVoices] = useState([]);
  const [displayCount, setDisplayCount] = useState(BATCH_SIZE);

  useEffect(() => {
    const handleVoicesChanged = () => setVoices(window.speechSynthesis.getVoices());
    setVoices(window.speechSynthesis.getVoices());
    window.speechSynthesis.addEventListener('voiceschanged', handleVoicesChanged);
    return () => window.speechSynthesis.removeEventListener('voiceschanged', handleVoicesChanged);
  }, []);

  useEffect(() => {
    const wordsWithState = initialWords.map(w => ({ ...w, isStarred: false }));
    const sortedWords = wordsWithState.sort((a, b) => a.word.localeCompare(b.word));
    setWords(sortedWords);
  }, []);

  useEffect(() => {
    setDisplayCount(BATCH_SIZE);
  }, [searchTerm, selectedDate]);

  const handleToggleStar = (wordId) => {
    setWords(prevWords =>
      prevWords.map(word =>
        word.id === wordId ? { ...word, isStarred: !word.isStarred } : word
      )
    );
  };

  const handlePlayAudio = (textToSpeak) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      const preferredVoice = voices.find(voice => voice.name === 'Google UK English Female');
      const fallbackVoice = voices.find(voice => voice.lang === 'en-GB');
      utterance.voice = preferredVoice || fallbackVoice || null;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Sorry, your browser doesn't support text-to-speech.");
    }
  };

  // NEW: Handler for clicking a synonym or antonym bubble.
  // It updates the search term, which triggers a re-filter of the words.
  const handleBubbleClick = (word) => {
    setSearchTerm(word);
    window.scrollTo(0, 0); // Scroll to top to see search results
  };

  const uniqueDates = useMemo(() => {
    const dates = new Set(initialWords.map(word => word.date));
    return ['all', 'starred', ...Array.from(dates).sort((a, b) => b.localeCompare(a))];
  }, []);
  
  const filteredWords = useMemo(() => {
    const wordsByDate = () => {
      if (selectedDate === 'all') return words;
      if (selectedDate === 'starred') return words.filter(word => word.isStarred);
      return words.filter(word => word.date === selectedDate);
    };

    const allMatchingWords = wordsByDate();

    if (!searchTerm.trim()) {
      return allMatchingWords;
    }

    return allMatchingWords.filter(word =>
      word.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
      word.meaning.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [words, searchTerm, selectedDate]);

  const wordsToDisplay = useMemo(() => {
    return filteredWords.slice(0, displayCount);
  }, [filteredWords, displayCount]);

  const handleScroll = useCallback(() => {
    if (wordsToDisplay.length >= filteredWords.length) {
      return;
    }
    const isAtBottom = window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 100;

    if (isAtBottom) {
      setDisplayCount(prevCount => prevCount + BATCH_SIZE);
    }
  }, [wordsToDisplay.length, filteredWords.length]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const wordCount = {
    showing: wordsToDisplay.length,
    total: filteredWords.length
  };

  if (isRevisionMode) {
    return (
      <RevisionMode 
        words={filteredWords} 
        onExit={() => setIsRevisionMode(false)}
        onPlayAudio={handlePlayAudio}
      />
    );
  }

  return (
    <div className="app-container">
      <Header />
      
      <div className="sticky-header">
        <div className="controls-top-row">
            <h2 className="controls-title">My Words</h2>
            <button 
              className="revision-btn"
              onClick={() => setIsRevisionMode(true)}
              disabled={filteredWords.length === 0}
            >
              Start Revision
            </button>
        </div>
        <div className="filter-controls">
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          <DateFilter 
            uniqueDates={uniqueDates}
            selectedDate={selectedDate}
            onDateChange={setSelectedDate}
          />
        </div>
        <p className="word-counter">
          Showing {wordCount.showing} of {wordCount.total} words
        </p>
      </div>

      <main className="content-area">
        <WordList 
          words={wordsToDisplay} 
          onToggleStar={handleToggleStar}
          onPlayAudio={handlePlayAudio}
          onBubbleClick={handleBubbleClick} // UPDATED: Pass the new handler down
        />
      </main>
    </div>
  );
}

export default App;