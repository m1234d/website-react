import { ADD_ENTRY } from "../constants/action-types";

const initialState = {
    entries: []
}

const rootReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_ENTRY:
            console.log(action.payload);
            return {
                ...state, //copys all elements in the state and splits them into properties in the new state object (basically copies)
                entries: [...state.entries, action.payload]
            }
        default:
            return state;
    }
};
export default rootReducer;