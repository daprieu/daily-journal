/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { getEntries, useEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector(".journalEntries")

const RenderEntryList = (entryArray) => {

    const entryHTMLRepresentation = entryArray.map( entryObj => JournalEntryComponent(entryObj)).join("")
  
    entryLog.innerHTML += `
        <article class="entryList">
            ${entryHTMLRepresentation}
        </article>
        `
}

export const EntriesList = () => {
    getEntries()
        
        .then(() => {
            const entries = useEntries()
            RenderEntryList(entries)
            
        })
}