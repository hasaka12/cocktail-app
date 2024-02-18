import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { CategoryCocktailDto } from "../../models/CategoryCocktailDto";
import { HomeKey } from "../../constants/home-page";
import { BASE_URL } from "../../constants/app";

interface CounterState {
  isLoading: boolean;
  data: CategoryCocktailDto[];
}

const initialState: CounterState = {
  isLoading: false,
  data: [],
};

const categorySearchCocktailSlice = createSlice({
  name: "categorySearchCocktail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategorySearchCocktail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCategorySearchCocktail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data.push(action.payload);
      });
  },
});

export const getCategorySearchCocktail = createAsyncThunk(
  "getCategorySearchCocktail",
  async (key: HomeKey) => {
    const url = `${BASE_URL}/filter.php?i=${key}`;
    try {
      const res = await axios.get(url);
      return { ...res.data, key };
    } catch (err) {
      console.error(err);
      return null;
    }
  }
);

export default categorySearchCocktailSlice.reducer;
