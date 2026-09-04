import { configureStore } from "@reduxjs/toolkit";
import applicationReducer from "../features/applications/state/applicationSlice";
import filterReducer from "../features/applications/state/filterSlice";

export const store = configureStore({
  reducer: {
    applications: applicationReducer,
    filter: filterReducer,
  },
});
