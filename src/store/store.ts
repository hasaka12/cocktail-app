import { configureStore } from "@reduxjs/toolkit";

import randomCocktailReducer from "./cocktails/randomCocktailSlice";
import searchCocktailReducer from "./cocktails/searchCocktailSlice";
import categoryCocktailSlice from "./cocktails/categoryCocktailSlice";
import favoriteCocktailSlice from "./cocktails/favoriteCocktailSlice";

export const store = configureStore({
  reducer: {
    randomCocktail: randomCocktailReducer,
    searchCocktail: searchCocktailReducer,
    categoryCocktail: categoryCocktailSlice,
    favoriteCocktail: favoriteCocktailSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
