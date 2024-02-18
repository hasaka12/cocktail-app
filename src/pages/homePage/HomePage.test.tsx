import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { Store, UnknownAction, configureStore } from "@reduxjs/toolkit";

import HomePage from "./HomePage";
import categoryCocktailSlice from "../../store/cocktails/categoryCocktailSlice";
import favoriteCocktailSlice from "../../store/cocktails/favoriteCocktailSlice";
import { homePageData } from "../../constants/home-page";

describe("HomePage", () => {
  let store: Store<unknown, UnknownAction, unknown>;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        favoriteCocktail: favoriteCocktailSlice,
        categoryCocktail: categoryCocktailSlice,
      },
    });
  });

  test("renders HomeCard for each category", () => {
    const { getByText } = render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );

    Object.values(homePageData).forEach((category) => {
      expect(getByText(category.name)).toBeInTheDocument();
    });
  });

  test("Renders correctly", () => {
    const { asFragment } = render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
