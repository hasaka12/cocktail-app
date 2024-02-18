import { CocktailsDto } from "../../models";
import favoriteCocktailSlice, {
  addFavoriteCocktails,
} from "./favoriteCocktailSlice";

const cocktail: CocktailsDto = {
  idDrink: "123",
  strAlcoholic: "Mojito",
  strCategory: "Alcoholic",
  strDrink: "Drink",
  strDrinkThumb: "thumb",
  strGlass: "Glass",
  strInstructions: "Instructions",
};

test("addFavoriteCocktails should add new cocktail to state data", () => {
  expect(
    favoriteCocktailSlice({ data: [] }, addFavoriteCocktails(cocktail))
  ).toEqual({
    data: [cocktail],
  });
});

test("addFavoriteCocktails should remove existing cocktail from state data", () => {
  expect(
    favoriteCocktailSlice({ data: [cocktail] }, addFavoriteCocktails(cocktail))
  ).toEqual({ data: [] });
});
