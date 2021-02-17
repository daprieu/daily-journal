/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { getEntries, useEntries } from "./JournalDataProvider.js"
// import { JournalEntryComponent } from "./JournalEntry.js"
import { useMoods, getMoods } from "./moods/MoodProvider.js"

const eventHub = document.querySelector(".container")
// DOM reference to where all entries will be rendered
const entryLog = document.querySelector(".journalEntries")
// eventHub.addEventListener("entriesChanged", customEvent => {
//     // debugger
//     EntriesList()
// })
const RenderEntryList = (entriesCollection, moodCollection) => {

    entryLog.innerHTML = entriesCollection.map(entry => {
        const relatedMood = moodCollection.find(mood => mood.id === entry.mood)
        
        return `        
        <section id="entry" class="journalEntry">
            <div class="entry__id">${entry.id}</div>
            <div class="entry__date">${entry.date}</div>
            <div class="entry__concept">${entry.concept}</div>
            <div class="entry__entry">${entry.entry}</div>
            <div class="entry__mood">${relatedMood.mood}</div>
        </section>
    `
    }).join("")
  
}

export const EntriesList = () => {
    getEntries()
        .then(getMoods)
        .then(() => {
            const moods = useMoods()
            const entries = useEntries()
            RenderEntryList(entries, moods)
            // console.log('RenderEntryList: ', RenderEntryList);
            
        })
}

