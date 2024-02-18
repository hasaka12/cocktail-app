import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CocktailsDto } from "../../models";

interface CounterState {
  data: CocktailsDto[];
}

const initialState: CounterState = {
  data: [],
};

const counterSlice = createSlice({
  name: "my-counter",
  initialState,
  reducers: {
    addFavoriteCocktails: (state, action: PayloadAction<CocktailsDto>) => {
      if (state.data.some((item) => item.idDrink === action.payload.idDrink)) {
        const index = state.data.findIndex(
          (item) => item.idDrink === action.payload.idDrink
        );
        state.data.splice(index, 1);
        return;
      }
      state.data.push(action.payload);
    },
  },
});

export const { addFavoriteCocktails } = counterSlice.actions;

export default counterSlice.reducer;
