import { getEntries, saveJournalEntry, useEntries } from "./JournalDataProvider.js"
import { EntriesList } from "./JournalEntryList.js"
import { getMoods, useMoods } from "./moods/MoodProvider.js"

const contentTarget = document.querySelector(".entryCard")
const eventHub = document.querySelector(".container")

const renderForm = (selectMood) => {
    
    contentTarget.innerHTML = `
<h3>Daily Journal</h3>
 
    <fieldset>
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
        <textarea name="textArea" id="journalText" cols="45" rows="5"></textarea>
    </fieldset>        
    <fieldset>        
    <select class="dropdown" id="enterMood">
        <option value="0">Select a mood...</option>
        ${
        selectMood.map(mood => `<option value="${mood.id}">${ mood.mood }</option>`).join("")
        }
    </select>
    </fieldset>
    <button class="enter" id="saveEntry">enter</button>
    
    </fieldset>
    `
}
export const JournalForm = () => {
    // debugger
    getMoods()
    .then( () => {
        const moods = useMoods()
        // console.log('moods: ', moods);
        renderForm(moods)
    })
}
// save note event listener
// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "saveEntry") {
    
    const date = document.querySelector("#journalDate").value
    const concept = document.querySelector("#journalConcepts").value
    const text = document.querySelector("#journalText").value
    const moodId = document.querySelector("#enterMood").value
        


        // Make a new object representation of a note
        const newEntry = {
            // Key/value pairs here
            date: date,
            concept: concept,
            entry: text,
            mood: parseInt(moodId),
        }

        // Change API state and application state
        saveJournalEntry(newEntry)
        EntriesList()
    }

})

// export const JournalForm = () => {
//         render()
// }