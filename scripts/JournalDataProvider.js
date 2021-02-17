/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */
const eventHub = document.querySelector(".container")
const dispatchStateChangeEvent = () => {
    eventHub.dispatchEvent(new CustomEvent("journalStateChanged"))
}

// This is the original data.
let entries = []

export const getEntries = () => {
    // debugger
    return fetch("http://localhost:8088/entries") // Fetch from the API
        .then(response => response.json())  // Parse as JSON
        .then(parsedEntries => {
            // What should happen when we finally have the array?
            entries = parsedEntries
            
        })
}

export const saveJournalEntry = entry => {
    // Use `fetch` with the POST method to add your entry to your API
    return fetch("http://localhost:8088/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    })
    .then(getEntries)  // <-- Get all journal entries
    .then(dispatchStateChangeEvent)  // <-- Broadcast the state change event
}
export const useEntries = () => entries.slice()

export const deleteEntry = entryId => {
    return fetch(`http://localhost:8088/entries/${entryId}`, {
        method: "DELETE"
    })
        .then(getEntries)
        // .then(dispatchStateChangeEvent)
}