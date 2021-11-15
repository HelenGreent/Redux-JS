export function createStore(reducer, initialState) {
    let state = reducer(initialState, {type:'__alan'})
    const subscribers = []

    return {
        dispatch(action) {
                state = reducer(state, action)
                this.subscribers.forEach(sub => sub())
        },
        subscribe(callback) {
            subscribers.push(callback)
        },
        getState(){
           return state
        }
    }
}