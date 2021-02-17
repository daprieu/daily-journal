let moods = []

export const useMoods = () => moods.slice()

export const getMoods = () => {
    /*
        Load database state into application state with a fetch().
        Make sure the last `then()` sets the local `convictions`
        variable to what is in the response from the API.
    */
   return fetch("http://localhost:8088/moods")
   .then(response => response.json())
   .then(
       parsedMoods => {
        //    console.table(parsedCrimes)
           moods = parsedMoods
       }
   )
}