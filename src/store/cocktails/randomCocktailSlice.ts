import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { SearchCocktailDto } from "../../models/SearchCocktailDto";

const baseUrl = "https://www.thecocktaildb.com/api/json/v1/1"; // TODO: need to replace with .env

interface CounterState {
  isLoading: boolean;
  data: SearchCocktailDto[] | null;
}

const initialState: CounterState = {
  isLoading: false,
  data: null,
};

const randomCocktailSlice = createSlice({
  name: "randomCocktail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRandomCocktail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRandomCocktail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      });
  },
});

export const getRandomCocktail = createAsyncThunk(
  "getRandomCocktail",
  async () => {
    const cocktailPromise = [];
    for (let i = 0; i < 5; i += 1) {
      const imageLink = getRandomData();
      cocktailPromise.push(imageLink);
    }

    try {
      const res = (await Promise.all(cocktailPromise)).map((res) => res?.data);
      return res;
    } catch (err) {
      console.error(err);
      return null;
    }
  }
);

const getRandomData = () => {
  const url = `${baseUrl}/random.php`;
  try {
    const res = axios.get(url);
    return res;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export default randomCocktailSlice.reducer;
