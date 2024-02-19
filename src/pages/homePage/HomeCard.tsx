import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getCategorySearchCocktail } from "../../store/cocktails/categoryCocktailSlice";
import { AppDispatch, RootState } from "../../store/store";
import { addFavoriteCocktails } from "../../store/cocktails/favoriteCocktailSlice";

import { HomeKey } from "../../constants/home-page";
import CocktailCard from "../../components/CocktailCard/CocktailCard";
import BouncingLoadingIndicator from "../../components/BouncingLoadingIndicator/BouncingLoadingIndicator";
import { CocktailsDto } from "../../models";

export interface HomeCardProps {
  keyValue: HomeKey;
}

export default function HomeCard({ keyValue }: HomeCardProps) {
  const categoryCocktail = useSelector(
    (state: RootState) => state.categoryCocktail.data
  );
  const favoriteCocktail = useSelector(
    (state: RootState) => state.favoriteCocktail.data
  );
  const dispatch = useDispatch<AppDispatch>();

  const handleAddFavorite = (cocktail: CocktailsDto) => {
    dispatch(addFavoriteCocktails(cocktail));
  };

  console.log(categoryCocktail);
  console.log(keyValue);

  useEffect(() => {
    if (!categoryCocktail.some((item) => item.key === keyValue)) {
      dispatch(getCategorySearchCocktail(keyValue));
    }
  }, [dispatch, keyValue]);

  return (
    <div className="lg:grid lg:grid-cols-5 lg:gap-4">
      {categoryCocktail && categoryCocktail.length > 0 ? (
        categoryCocktail
          .filter((item) => item.key === keyValue)
          .map((cocktails, i) => (
            <Fragment key={`${cocktails.key}-${i}`}>
              {cocktails.drinks.slice(0, 10).map((cocktail, j) => (
                <div
                  key={`${cocktails.key}-${j}`}
                  className="flex lg:mx-2 my-2 justify-center items-center"
                >
                  <CocktailCard
                    title={cocktail.strDrink}
                    img={cocktail.strDrinkThumb}
                    cocktail={cocktail as CocktailsDto}
                    isAddedToFavorite={
                      favoriteCocktail &&
                      favoriteCocktail.length > 0 &&
                      favoriteCocktail.some(
                        (item) => item.idDrink === cocktail.idDrink
                      )
                    }
                    handleAddFavorite={handleAddFavorite}
                  />
                </div>
              ))}
            </Fragment>
          ))
      ) : (
        <div className="flex m-2 items-center justify-center">
          <BouncingLoadingIndicator />
        </div>
      )}
    </div>
  );
}
