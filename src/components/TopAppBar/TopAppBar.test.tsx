import { render, screen } from "@testing-library/react";
import { Store, UnknownAction, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import favoriteCocktailSlice from "../../store/cocktails/favoriteCocktailSlice";

import TopAppBar from "./TopAppBar";

describe("TopAppBar", () => {
  let store: Store<unknown, UnknownAction, unknown>;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        favoriteCocktail: favoriteCocktailSlice,
      },
    });
  });

  test("renders app bar with navigation items", () => {
    render(
      <Provider store={store}>
        <TopAppBar />
      </Provider>
    );

    const searchButton = screen.getByText("Search");
    const favoritesButton = screen.getByText("Favorites");
    expect(searchButton).toBeInTheDocument();
    expect(favoritesButton).toBeInTheDocument();
  });

  test("Renders correctly", () => {
    const { asFragment } = render(
      <Provider store={store}>
        <TopAppBar />
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
