import { createSlice } from "@reduxjs/toolkit";
import { ISchool } from "../../types/school.types";
const initialState: ISchool[] = [];

const schoolSlice = createSlice({
  name: "school",
  initialState,
  reducers: {
    addSchool: (state, { payload }) => [payload, ...state],
  },
});

const schools = schoolSlice.reducer;
const { addSchool } = schoolSlice.actions;

export { schools, addSchool };
