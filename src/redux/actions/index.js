import { ADD_ENTRY } from "../constants/action-types";

export const addEntry = article => ({
    type: ADD_ENTRY,
    payload: article
})
