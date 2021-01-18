/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

// DOM reference to where all entries will be rendered
// DOM reference to where all entries will be rendered
// const entryLog = document.querySelector(".journalEntries")

// export const EntryListComponent = () => {
//     // Use the journal entry data from the data provider component
//     const entries = useJournalEntries()

//     for (const entry of entries) {
//         /*
//             Invoke the component that returns an
//             HTML representation of a single entry
//         */
//         entryLog.innerHTML += JournalEntryComponent(entry)
//     }
// }

const entryLog = document.querySelector(".journalEntries")

export const EntryListComponent = () => {
    
    
    // Use the journal entry data from the data provider component
    const entries = useJournalEntries()
    let entryHTMLRepresentation = ""
    for (const entry of entries) {
        /*
            Invoke the component that returns an
            HTML representation of a single entry
        */
       entryHTMLRepresentation += JournalEntryComponent(entry)
// console.log(entry)
        
    }
    entryLog.innerHTML += `
        <article class="entryList">
            ${entryHTMLRepresentation}
        </article>
        `
}