function reducer(state, action){
    switch(action.type){
        case"INCREASE_COUNTER":
            state.counter = state.counter %7+1;
            return {...state}
        case"DECRESE_COUNTER":
            state.counter = (state.counter-1)? (state.counter-1):7;
            return {...state}
            default:
                return state;

    }
}
export default reducer;