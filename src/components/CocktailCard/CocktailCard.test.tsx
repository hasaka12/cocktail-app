import { render, screen, act } from "@testing-library/react";
import user from "@testing-library/user-event";

import CocktailCard from "./CocktailCard";
import { CocktailCardProps } from "./CocktailCard";
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

describe("CocktailCard", () => {
  test("renders CocktailCard component with title and description", () => {
    const props: CocktailCardProps = {
      title: "Mojito",
      desc: "A refreshing cocktail",
      img: "mojito.jpg",
      isAddedToFavorite: false,
      cocktail,
      handleAddFavorite: jest.fn(),
    };

    render(<CocktailCard {...props} />);

    expect(screen.getByText("Mojito")).toBeInTheDocument();
    expect(screen.getByText("A refreshing cocktail")).toBeInTheDocument();
  });

  test("renders CocktailCard component without description", () => {
    const props: CocktailCardProps = {
      title: "Martini",
      desc: "",
      img: "martini.jpg",
      isAddedToFavorite: false,
      cocktail,
      handleAddFavorite: jest.fn(),
    };

    render(<CocktailCard {...props} />);

    expect(screen.getByText("Martini")).toBeInTheDocument();
    expect(screen.queryByTestId("description-text")).toBeNull();
  });

  test('clicking on "Add to Favorites" button calls handleAddFavorite function with the cocktail', () => {
    const props: CocktailCardProps = {
      title: "Margarita",
      desc: "A classic cocktail",
      img: "margarita.jpg",
      isAddedToFavorite: false,
      cocktail,
      handleAddFavorite: jest.fn(),
    };

    render(<CocktailCard {...props} />);
    const addFavButton = screen.getByRole("button", {
      name: /add to Favorites/i,
    });

    act(() => {
      user.click(addFavButton);
    });

    expect(props.handleAddFavorite).toHaveBeenCalledWith(props.cocktail);
  });

  test("Renders correctly", () => {
    const props: CocktailCardProps = {
      title: "Mojito",
      desc: "A refreshing cocktail",
      img: "mojito.jpg",
      isAddedToFavorite: false,
      cocktail,
      handleAddFavorite: jest.fn(),
    };

    const { asFragment } = render(<CocktailCard {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
