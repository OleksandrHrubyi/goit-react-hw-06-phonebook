import { filterContact, deleteContact, addContacts } from "./contactAction";
import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

const itemReducer = createReducer([], {
  [addContacts]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer("", {
  [filterContact]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({
  items: itemReducer,
  filter: filterReducer,
});

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

export default rootReducer;
