import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllpeoples = createAsyncThunk("fetchAllpeoples", async () => {
  const response = await fetch(`https://swapi.dev/api/people/`);
  return response?.json();
});

const peopleSlice = createSlice({
  name: "people",
  initialState: {
    data: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllpeoples.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default peopleSlice.reducer;


