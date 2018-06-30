import { ADD_ENTRY, LOG_IN, LOG_OUT } from "../constants/action-types";

export const addEntry = article => ({
    type: ADD_ENTRY,
    payload: article
})

export const logIn = () => ({
    type: LOG_IN
});

export const logOut = () => ({
    type: LOG_OUT
});
