import React from 'react';

const DateFilter = ({ uniqueDates, selectedDate, onDateChange }) => {
  return (
    <div className="date-filter">
      <select value={selectedDate} onChange={(e) => onDateChange(e.target.value)}>
        {uniqueDates.map(date => (
          <option key={date} value={date}>
            {date === 'all' ? 'All Dates' : date}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DateFilter;