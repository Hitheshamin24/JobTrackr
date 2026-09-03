import { configureStore } from "@reduxjs/toolkit";
import applicationReducer from "../features/applications/state/applicationSlice";
export const store = configureStore({
  reducer: {
    applications: applicationReducer,
  },
});
