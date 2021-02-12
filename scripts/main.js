console.log("Welcome to the main module")
import { getEntries } from "./JournalDataProvider.js"
// import { JournalEntryComponent } from "./JournalEntry.js"
import { EntriesList } from "./JournalEntryList.js"


getEntries()
EntriesList()
// JournalEntryComponent()