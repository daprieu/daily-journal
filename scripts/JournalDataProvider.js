/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journal = [
    {
        id: 1,
        date: "01/04/2021",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Ok"
    },
    {
        id: 2,
        date: "01/06/2021",
        concept: "Planning and wireframe",
        entry: "discussed how to organize thoughts and planning websites based on client needs used wireframe.",
        mood: "Ok"
    },
    {
        id: 3,
        date: "01/07/2021",
        concept: "GitHub intro",
        entry: "We talked about basic github and features/ how to use.",
        mood: "Ok"
    },
    {
        id: 4,
        date: "01/13/2021",
        concept: "JS and Marins aquarium",
        entry: "Implemented JS into martins aquarium for the first time and discussed code repetition and DRY code.",
        mood: "Confused"
    }
    
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
};