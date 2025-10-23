// --- How to add new words ---
// 1. Get the current date in YYYY-MM-DD format (e.g., "2023-10-27").
// 2. Copy a word object, give it a new unique id, and update the word, meaning, and date.
// Example for tomorrow:
// { id: 50, word: "NewWord", meaning: "A new meaning.", date: "2023-10-28" },

// Helper to get today's date in YYYY-MM-DD format
const getTodaysDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

const todaysDate = getTodaysDate();

export const initialWords = [
    // All words below are tagged with today's date
    { id: 1, word: "Prologue", meaning: "Starting of the story / Setting up the context", date: todaysDate },
    { id: 2, word: "Epilogue", meaning: "End of the story", date: todaysDate },
    { id: 3, word: "Vast", meaning: "Very huge / Large in number", date: todaysDate },
    { id: 4, word: "Wisdom", meaning: "Knowing what’s right & when to do it", date: todaysDate },
    { id: 5, word: "In contrast", meaning: "Shows the difference between two parties", date: todaysDate },
    { id: 6, word: "Fascinating", meaning: "Very interesting & captivating", date: todaysDate },
    { id: 7, word: "Concerning", meaning: "About / Causing worry", date: todaysDate },
    { id: 8, word: "Intended", meaning: "Meant to or Planned to", date: todaysDate },
    { id: 9, word: "Word of mouth", meaning: "People talking to each other / sharing opinions", date: todaysDate },
    { id: 10, word: "Marvellous", meaning: "Wonderful, amazing & extremely good", date: todaysDate },
    { id: 11, word: "Subordinate", meaning: "Lower in rank or position", date: todaysDate },
    { id: 12, word: "Cosmos", meaning: "The universe", date: todaysDate },
    { id: 13, word: "Owe", meaning: "To have to give something to someone -- Money, help or gratitude", date: todaysDate },
    { id: 14, word: "Anticipation", meaning: "Expecting something to happen with excitement & preparation", date: todaysDate },
    { id: 15, word: "Chaos", meaning: "Confusion or complete disorder", date: todaysDate },
    { id: 16, word: "Worn out", meaning: "Very tired / Something is damaged & no longer effective", date: todaysDate },
    { id: 17, word: "Fatigued", meaning: "Extremely tired & exhausted", date: todaysDate },
    { id: 18, word: "Bombard", meaning: "To attach something or someone continuously", date: todaysDate },
    { id: 19, word: "Overwhelming", meaning: "Very intensive & to much to handle", date: todaysDate },
    { id: 20, word: "Oppressed", meaning: "People who got treated unfairly, controlled & kept down by other", date: todaysDate },
    { id: 21, word: "Oppressors", meaning: "People who treat others unfairly & keep them under control", date: todaysDate },
    { id: 22, word: "Estranged", meaning: "No longer close or friendly with someone", date: todaysDate },
    { id: 23, word: "Heretofore", meaning: "Up to this point in time", date: todaysDate },
    { id: 24, word: "Elude", meaning: "Escape from / Avoid something / Hard to understand or grasp", date: todaysDate },
    { id: 25, word: "Harmony", meaning: "Peace, agreement & working well together", date: todaysDate },
    { id: 26, word: "Discord", meaning: "Disagreement, conflict, lack of harmony", date: todaysDate },
    { id: 27, word: "Inevitable", meaning: "Cannot be avoided", date: todaysDate },
    { id: 28, word: "Phenomenon", meaning: "Event, fact or a situation", date: todaysDate },
    { id: 29, word: "Perhaps", meaning: "Likely", date: todaysDate },
    { id: 30, word: "Bound to", meaning: "Very likely to happen", date: todaysDate },
    { id: 31, word: "Perspective", meaning: "Point of view / Ability to judge", date: todaysDate },
    { id: 32, word: "Trapped", meaning: "Stuck somewhere / Unable to escape", date: todaysDate },
    { id: 33, word: "Stagnant", meaning: "Not moving, flowing or developing - Staying the same or often getting worse", date: todaysDate },
    { id: 34, word: "Sorrow", meaning: "Deep sadness or grief", date: todaysDate },
    { id: 35, word: "Freight", meaning: "Transport of goods or cost of the shipping", date: todaysDate },
    { id: 36, word: "Clogged", meaning: "Blocked or filled so that the movement is difficult or impossible", date: todaysDate },
    { id: 37, word: "Sailed", meaning: "Dirty or stained", date: todaysDate },
    { id: 38, word: "Filthy", meaning: "Extremely dirty or disgusting", date: todaysDate },
    { id: 39, word: "Alleviated", meaning: "Made something less severe or easy to bear", date: todaysDate },
    { id: 40, word: "Buried", meaning: "Covered or hidden under something", date: todaysDate },
    { id: 41, word: "Oddly enough", meaning: "Surprisingly or Strangely", date: todaysDate },
    { id: 42, word: "Perseverance", meaning: "Not giving up, despite difficulties", date: todaysDate },
    { id: 43, word: "Miraculous", meaning: "Very amazing & extraordinary (Miracle)", date: todaysDate },
    { id: 44, word: "Eloquent", meaning: "Expressing ideas clearly, beautifully, & effectively", date: todaysDate },
    { id: 45, word: "Delicacy", meaning: "Gentleness or sensitivity", date: todaysDate },
    { id: 46, word: "Resides", meaning: "Live in / effectiveness", date: todaysDate },
    { id: 47, word: "Deformation", meaning: "Change in shape or structure, usually because of pressure, force, or damage", date: todaysDate },
    { id: 48, word: "Salvation", meaning: "Being saved from harm, danger, or suffering", date: todaysDate },
    { id: 49, word: "Encompass", meaning: "To include, surround, or cover something completely", date: todaysDate },
];