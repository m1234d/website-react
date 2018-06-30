import { ADD_ENTRY, LOG_IN, LOG_OUT } from "../constants/action-types";

const initialState = {
    entries: [],
    logged_in: false
}

const rootReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_ENTRY:
            return {
                ...state, //copys all elements in the state and splits them into properties in the new state object (basically copies)
                entries: [...state.entries, action.payload]
            }
        case LOG_IN:
            return {
                ...state,
                logged_in: true
            }
        case LOG_OUT:
            return {
                ...state,
                logged_in: false
            }
        default:
            return state;
    }
};
export default rootReducer;