import { useDispatch, useSelector } from "react-redux";

import Typography from "@mui/material/Typography";

import CocktailCard from "../../components/CocktailCard/CocktailCard";
import { CocktailsDto } from "../../models";
import { AppDispatch, RootState } from "../../store/store";
import { addFavoriteCocktails } from "../../store/cocktails/favoriteCocktailSlice";

export default function FavoritePage() {
  const favoriteCocktail = useSelector(
    (state: RootState) => state.favoriteCocktail.data
  );
  const dispatch = useDispatch<AppDispatch>();

  const handleAddFavorite = (cocktail: CocktailsDto) => {
    dispatch(addFavoriteCocktails(cocktail));
  };

  return (
    <>
      <div className="flex justify-center mb-4">
        <Typography variant="h4" component="h4">
          Favorite Cocktails
        </Typography>
      </div>
      <div className="lg:grid lg:grid-cols-5 lg:gap-4">
        {favoriteCocktail && favoriteCocktail.length > 0
          ? favoriteCocktail.map((cocktail) => (
              <div
                key={cocktail.idDrink}
                className="flex lg:mx-2 my-2 justify-center items-center"
              >
                <CocktailCard
                  key={cocktail.idDrink}
                  title={cocktail.strDrink}
                  img={cocktail.strDrinkThumb}
                  desc={cocktail.strInstructions}
                  isAddedToFavorite
                  cocktail={cocktail}
                  handleAddFavorite={handleAddFavorite}
                />
              </div>
            ))
          : null}
      </div>
      {favoriteCocktail && favoriteCocktail.length === 0 ? (
        <Typography textAlign="center">No favorite cocktail</Typography>
      ) : null}
    </>
  );
}
