let mutations = {
    increment(state,payload){
        state.count = state.count + payload
    },
    decrement(state,payload){
        state.count = state.count - payload
    }
}
export default mutations