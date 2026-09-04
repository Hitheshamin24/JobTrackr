import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "",
  location: "",
  jobType: "",
  search: "",
};
const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setJobType: (state, action) => {
      state.jobType = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    clearFilter: (state) => {
      state.status = "";
      state.location = "";
      state.jobType = "";
      state.search="";
    },
  },
});

export const { setStatus, setJobType, setLocation, setSearch, clearFilter } =
  filterSlice.actions;
export default filterSlice.reducer;
