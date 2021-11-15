export function reducer(state,action) {
   if (action.type === 'Increment') {
       return state + 1
   } else if (action.type === 'Decement') {
       return state - 1
   }
    return state
}