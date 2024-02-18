import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { Store, UnknownAction, configureStore } from "@reduxjs/toolkit";
import userEvent from "@testing-library/user-event";

import FavoritePage from "./FavoritePage";
import favoriteCocktailSlice, {
  addFavoriteCocktails,
} from "../../store/cocktails/favoriteCocktailSlice";
import { CocktailsDto } from "../../models";

const cocktail: CocktailsDto = {
  idDrink: "123",
  strAlcoholic: "Mojito",
  strCategory: "Alcoholic",
  strDrink: "Drink",
  strDrinkThumb: "thumb",
  strGlass: "Glass",
  strInstructions: "Instructions",
};

describe("FavoritePage", () => {
  let store: Store<unknown, UnknownAction, unknown>;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        favoriteCocktail: favoriteCocktailSlice,
      },
    });
  });

  test('renders "Favorite Cocktails" heading', () => {
    favoriteCocktailSlice({ data: [] }, addFavoriteCocktails(cocktail));
    const { asFragment, getByText } = render(
      <Provider store={store}>
        <FavoritePage />
      </Provider>
    );
    const headingElement = getByText(/Favorite Cocktails/i);
    expect(headingElement).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  test("renders no favorite cocktail message when there are no favorite cocktails", () => {
    render(
      <Provider store={store}>
        <FavoritePage />
      </Provider>
    );
    const noFavoriteMessage = screen.getByText(/No favorite cocktail/i);
    expect(noFavoriteMessage).toBeInTheDocument();
  });
});
