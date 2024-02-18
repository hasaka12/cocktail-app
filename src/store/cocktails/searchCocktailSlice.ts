import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { SearchCocktailDto } from "../../models/SearchCocktailDto";
import { BASE_URL } from "../../constants/app";

interface CounterState {
  data: SearchCocktailDto | null;
}

const initialState: CounterState = {
  data: null,
};

const searchCocktailSlice = createSlice({
  name: "searchCocktail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSearchCocktail.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const getSearchCocktail = createAsyncThunk(
  "getSearchCocktail",
  async (keyWord: string) => {
    const url = `${BASE_URL}/search.php?s=${keyWord}`;
    try {
      const res = await axios.get(url);
      return res.data;
    } catch (err) {
      console.error(err);
      return null;
    }
  }
);

export default searchCocktailSlice.reducer;
