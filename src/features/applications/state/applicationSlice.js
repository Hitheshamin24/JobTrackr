import { createSlice } from "@reduxjs/toolkit";

const getCurrentApplications = () => {
  try {
    const stored = localStorage.getItem("jobTrackrApplications");
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};
const initialState = {
  applications: getCurrentApplications(),
};
const applicationSlice = createSlice({
  name: "applications",
  initialState,
  reducers: {
    addApplication: (state, action) => {
      state.applications.push(action.payload);
      localStorage.setItem(
        "jobTrackrApplications",
        JSON.stringify(state.applications),
      );
    },
    deleteApplication: (state, action) => {
      state.applications = state.applications.filter(
        (application) => application.id !== action.payload,
      );
      localStorage.setItem(
        "jobTrackrApplications",
        JSON.stringify(state.applications),
      );
    },
    updateApplication: (state, action) => {
      const index = state.applications.findIndex(
        (application) => application.id === action.payload.id,
      );

      if (index !== -1) {
        state.applications[index] = action.payload;
        localStorage.setItem(
          "jobTrackrApplications",
          JSON.stringify(state.applications),
        );
      }
    },
  },
});

export const { addApplication, deleteApplication, updateApplication } =
  applicationSlice.actions;

export default applicationSlice.reducer;
