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

// Helper to get yesterday's date for demonstration purposes
const getYesterdaysDate = () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const year = yesterday.getFullYear();
    const month = String(yesterday.getMonth() + 1).padStart(2, '0');
    const day = String(yesterday.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};


const todaysDate = getTodaysDate();
const yesterdaysDate = getYesterdaysDate();

export const initialWords = [
    // Today's Words (Most Recent)
    { id: 1, word: "Prologue", meaning: "Starting of the story / Setting up the context", date: todaysDate, partOfSpeech: 'Noun' },
    { id: 2, word: "Epilogue", meaning: "End of the story", date: todaysDate, partOfSpeech: 'Noun' },
    { id: 3, word: "Vast", meaning: "Very huge / Large in number", date: todaysDate, exampleSentence: "The Sahara is a vast desert.", partOfSpeech: 'Adjective', synonyms: ['Huge', 'Immense', 'Expansive'], antonyms: ['Tiny', 'Small', 'Minute'] },
    { id: 4, word: "Wisdom", meaning: "Knowing what’s right & when to do it", date: todaysDate, partOfSpeech: 'Noun' },
    { id: 5, word: "In contrast", meaning: "Shows the difference between two parties", date: todaysDate, partOfSpeech: 'Phrase' },
    { id: 6, word: "Fascinating", meaning: "Very interesting & captivating", date: todaysDate, exampleSentence: "She told me a fascinating story about her travels.", partOfSpeech: 'Adjective' },
    { id: 7, word: "Concerning", meaning: "About / Causing worry", date: todaysDate, partOfSpeech: 'Preposition' },
    { id: 8, word: "Intended", meaning: "Meant to or Planned to", date: todaysDate, partOfSpeech: 'Verb' },
    { id: 9, word: "Word of mouth", meaning: "People talking to each other / sharing opinions", date: todaysDate, partOfSpeech: 'Phrase' },
    { id: 10, word: "Marvellous", meaning: "Wonderful, amazing & extremely good", date: todaysDate, partOfSpeech: 'Adjective' },
    { id: 11, word: "Subordinate", meaning: "Lower in rank or position", date: todaysDate, exampleSentence: "He was always friendly to his subordinate officers.", partOfSpeech: 'Adjective' },
    { id: 12, word: "Cosmos", meaning: "The universe", date: todaysDate, partOfSpeech: 'Noun' },
    { id: 13, word: "Owe", meaning: "To have to give something to someone -- Money, help or gratitude", date: todaysDate, partOfSpeech: 'Verb' },
    { id: 14, word: "Anticipation", meaning: "Expecting something to happen with excitement & preparation", date: todaysDate, partOfSpeech: 'Noun' },
    { id: 15, word: "Chaos", meaning: "Confusion or complete disorder", date: todaysDate, partOfSpeech: 'Noun', synonyms: ['Turmoil', 'Disarray'], antonyms: ['Order', 'Peace'] },
    { id: 16, word: "Worn out", meaning: "Very tired / Something is damaged & no longer effective", date: todaysDate, partOfSpeech: 'Adjective' },
    { id: 17, word: "Fatigued", meaning: "Extremely tired & exhausted", date: todaysDate, partOfSpeech: 'Adjective' },
    { id: 18, word: "Bombard", meaning: "To attack something or someone continuously", date: todaysDate, partOfSpeech: 'Verb' },
    { id: 19, word: "Overwhelming", meaning: "Very intensive & too much to handle", date: todaysDate, partOfSpeech: 'Adjective' },
    { id: 20, word: "Oppressed", meaning: "People who got treated unfairly, controlled & kept down by others", date: todaysDate, partOfSpeech: 'Adjective' },

    // Yesterday's Words
    { id: 21, word: "Oppressors", meaning: "People who treat others unfairly & keep them under control", date: yesterdaysDate, partOfSpeech: 'Noun' },
    { id: 22, word: "Estranged", meaning: "No longer close or friendly with someone", date: yesterdaysDate, exampleSentence: "He became estranged from his family after the argument.", partOfSpeech: 'Adjective' },
    { id: 23, word: "Heretofore", meaning: "Up to this point in time", date: yesterdaysDate, partOfSpeech: 'Adverb' },
    { id: 24, word: "Elude", meaning: "Escape from / Avoid something / Hard to understand or grasp", date: yesterdaysDate, exampleSentence: "The answer to the mystery continues to elude the detectives.", partOfSpeech: 'Verb', synonyms: ['Evade', 'Dodge', 'Avoid'], antonyms: ['Confront', 'Face'] },
    { id: 25, word: "Harmony", meaning: "Peace, agreement & working well together", date: yesterdaysDate, partOfSpeech: 'Noun', synonyms: ['Accord', 'Peace'], antonyms: ['Discord', 'Conflict'] },
    { id: 26, word: "Discord", meaning: "Disagreement, conflict, lack of harmony", date: yesterdaysDate, partOfSpeech: 'Noun' },
    { id: 27, word: "Inevitable", meaning: "Cannot be avoided", date: yesterdaysDate, partOfSpeech: 'Adjective' },
    { id: 28, word: "Phenomenon", meaning: "Event, fact or a situation", date: yesterdaysDate, partOfSpeech: 'Noun' },
    { id: 29, word: "Perhaps", meaning: "Likely", date: yesterdaysDate, partOfSpeech: 'Adverb' },
    { id: 30, word: "Bound to", meaning: "Very likely to happen", date: yesterdaysDate, partOfSpeech: 'Phrase' },
    { id: 31, word: "Perspective", meaning: "Point of view / Ability to judge", date: yesterdaysDate, partOfSpeech: 'Noun' },
    { id: 32, word: "Trapped", meaning: "Stuck somewhere / Unable to escape", date: yesterdaysDate, partOfSpeech: 'Adjective' },
    { id: 33, word: "Stagnant", meaning: "Not moving, flowing or developing - Staying the same or often getting worse", date: yesterdaysDate, partOfSpeech: 'Adjective' },
    { id: 34, word: "Sorrow", meaning: "Deep sadness or grief", date: yesterdaysDate, partOfSpeech: 'Noun' },
    { id: 35, word: "Freight", meaning: "Transport of goods or cost of the shipping", date: yesterdaysDate, partOfSpeech: 'Noun' },
    { id: 36, word: "Clogged", meaning: "Blocked or filled so that the movement is difficult or impossible", date: yesterdaysDate, partOfSpeech: 'Adjective' },
    { id: 37, word: "Sailed", meaning: "Dirty or stained", date: yesterdaysDate, partOfSpeech: 'Adjective' },
    { id: 38, word: "Filthy", meaning: "Extremely dirty or disgusting", date: yesterdaysDate, partOfSpeech: 'Adjective' },
    { id: 39, word: "Alleviated", meaning: "Made something less severe or easy to bear", date: yesterdaysDate, partOfSpeech: 'Verb' },
    { id: 40, word: "Buried", meaning: "Covered or hidden under something", date: yesterdaysDate, partOfSpeech: 'Verb' },
    { id: 41, word: "Oddly enough", meaning: "Surprisingly or Strangely", date: yesterdaysDate, partOfSpeech: 'Phrase' },
    { id: 42, word: "Perseverance", meaning: "Not giving up, despite difficulties", date: yesterdaysDate, exampleSentence: "Her perseverance was rewarded when she finally achieved her goal.", partOfSpeech: 'Noun' },
    { id: 43, word: "Miraculous", meaning: "Very amazing & extraordinary (Miracle)", date: yesterdaysDate, partOfSpeech: 'Adjective' },
    { id: 44, word: "Eloquent", meaning: "Expressing ideas clearly, beautifully, & effectively", date: yesterdaysDate, partOfSpeech: 'Adjective' },
    { id: 45, word: "Delicacy", meaning: "Gentleness or sensitivity", date: yesterdaysDate, partOfSpeech: 'Noun' },
    { id: 46, word: "Resides", meaning: "Live in / effectiveness", date: yesterdaysDate, partOfSpeech: 'Verb' },
    { id: 47, word: "Deformation", meaning: "Change in shape or structure, usually because of pressure, force, or damage", date: yesterdaysDate, partOfSpeech: 'Noun' },
    { id: 48, word: "Salvation", meaning: "Being saved from harm, danger, or suffering", date: yesterdaysDate, partOfSpeech: 'Noun' },
    { id: 49, word: "Encompass", meaning: "To include, surround, or cover something completely", date: yesterdaysDate, partOfSpeech: 'Verb' },
];