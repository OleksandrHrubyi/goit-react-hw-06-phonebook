import { createAction } from "@reduxjs/toolkit";
const { v4: uuidv4 } = require("uuid");

export const addContacts = createAction("contact/add", (value) => {
  return {
    payload: {
      id: uuidv4(),
      name: value.name,
      number: value.number,
    },
  };
});

export const deleteContact = createAction("contact/delete");

export const filterContact = createAction("contact/filter");
