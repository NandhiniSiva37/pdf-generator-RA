import { configureStore } from "@reduxjs/toolkit";
import { contactReducer, titleReducer } from "./reducer";

const store = configureStore({
  reducer: {
    contacts: contactReducer,
    title: titleReducer,
  },
});

export default store;
