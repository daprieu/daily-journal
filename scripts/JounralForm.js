import { getEntries, saveJournalEntry, useEntries } from "./JournalDataProvider.js"
import { EntriesList } from "./JournalEntryList.js"

const contentTarget = document.querySelector(".entryCard")
const eventHub = document.querySelector(".container")

export const renderForm = () => {
    contentTarget.innerHTML = `
<h3>Daily Journal</h3>
 
    <fieldset>
        <label for="journalDate">Entry Date:</label>
        <input type="date" name="journalDate" id="journalDate">
    </fieldset>
    <fieldset>
        <label for="entryCard__concepts concepts">Subject/ concepts covered:</label>
        <input type="text" name="concepts" id="journalConcepts">
    </fieldset>
    <fieldset>
        <label for="entryCard__text text">Thoughts:</label>
        <textarea name="textArea" id="journalText" cols="50" rows="10"></textarea>
    </fieldset>        
            
            <button class="mood" id="enterMood">mood</button>
            <button class="enter" id="saveEntry">enter</button>
            
    </fieldset>
`
}

// save note event listener
// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "saveEntry") {
    
    const date = document.querySelector("#journalDate").value
    const concept = document.querySelector("#journalConcepts").value
    const text = document.querySelector("#journalText").value
    const mood = document.querySelector("#enterMood").value
        


        // Make a new object representation of a note
        const newEntry = {
            // Key/value pairs here
            date: date,
            concept: concept,
            entry: text,
            mood: mood,
        }

        // Change API state and application state
        saveJournalEntry(newEntry)
        EntriesList()
    }

})

// export const JournalForm = () => {
//         render()
// }