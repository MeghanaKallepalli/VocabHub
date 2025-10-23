import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import DateFilter from './components/DateFilter'; // Import new component
import WordList from './components/WordList';
import { initialWords } from './data/initialWords';
import './App.css';

function App() {
  const [words, setWords] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDate, setSelectedDate] = useState('all'); // State for date filter
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // We don't need localStorage for this static version
    // The data will be re-loaded from the file on every refresh.
    const sortedWords = initialWords.sort((a, b) => a.word.localeCompare(b.word));
    setWords(sortedWords);
  }, []);

  // Memoized calculation to get unique dates for the filter dropdown
  const uniqueDates = useMemo(() => {
    const dates = new Set(words.map(word => word.date));
    // Sort dates in descending order (newest first)
    return ['all', ...Array.from(dates).sort((a, b) => b.localeCompare(a))];
  }, [words]);
  
  // Memoized calculation for filtering words by both search and date
  const filteredWords = useMemo(() => {
    return words
      .filter(word =>
        word.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
        word.meaning.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter(word =>
        // If 'all' is selected, this check passes for every word
        selectedDate === 'all' ? true : word.date === selectedDate
      );
  }, [words, searchTerm, selectedDate]); // Add selectedDate to dependency array


  // NOTE: The "Add Word" functionality is removed as per the request
  // to have everything handled statically in the frontend data file.
  // The FAB and Modal are removed for a cleaner, view-only experience.
  // If you want to add words via UI and save to localStorage again,
  // we can easily add that back.

  return (
    <div className="app-container">
      <Header />
      
      <div className="sticky-header">
        <div className="filter-controls">
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          <DateFilter 
            uniqueDates={uniqueDates}
            selectedDate={selectedDate}
            onDateChange={setSelectedDate}
          />
        </div>
      </div>

      <main className="content-area">
        <WordList words={filteredWords} onDelete={() => {
          alert("Deletion is disabled in this static version.");
        }} />
      </main>
    </div>
  );
}

export default App;