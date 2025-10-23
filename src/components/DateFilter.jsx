import React from 'react';

const DateFilter = ({ uniqueDates, selectedDate, onDateChange }) => {

  const formatDateForDisplay = (date) => {
    if (date === 'all') return 'All Dates';
    
    // Format YYYY-MM-DD into a more readable format
    const dateObj = new Date(date + 'T00:00:00'); // Avoid timezone issues
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return dateObj.toLocaleDateString(undefined, options);
  };


  return (
    <div className="date-filter">
      <select value={selectedDate} onChange={(e) => onDateChange(e.target.value)}>
        {uniqueDates.map(date => (
          <option key={date} value={date}>
            {formatDateForDisplay(date)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DateFilter;