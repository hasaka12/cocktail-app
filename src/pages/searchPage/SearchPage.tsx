import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Typography from "@mui/material/Typography";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

import { AppDispatch, RootState } from "../../store/store";
import { getRandomCocktail } from "../../store/cocktails/randomCocktailSlice";
import { getSearchCocktail } from "../../store/cocktails/searchCocktailSlice";
import { addFavoriteCocktails } from "../../store/cocktails/favoriteCocktailSlice";

import CocktailCard from "../../components/CocktailCard/CocktailCard";
import BouncingLoadingIndicator from "../../components/BouncingLoadingIndicator/BouncingLoadingIndicator";

import { CocktailsDto } from "../../models";
import { SearchCocktailDto } from "../../models/SearchCocktailDto";

export default function SearchPage() {
  const [searchList, setSearchList] = useState<CocktailsDto[] | null>(null);
  const randomCocktail = useSelector(
    (state: RootState) => state.randomCocktail.data
  );
  const isRandomCocktailLoading = useSelector(
    (state: RootState) => state.randomCocktail.isLoading
  );
  const searchCocktail = useSelector(
    (state: RootState) => state.searchCocktail.data
  );
  const favoriteCocktail = useSelector(
    (state: RootState) => state.favoriteCocktail.data
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getRandomCocktail());
  }, [dispatch]);

  const handleAddFavorite = (cocktail: CocktailsDto) => {
    dispatch(addFavoriteCocktails(cocktail));
  };

  return (
    <>
      <div className="flex justify-center mb-4">
        <Typography variant="h4" component="h4">
          Search Cocktails
        </Typography>
      </div>
      <div className="mb-4 px-2">
        <Stack spacing={3} sx={{ width: "100%" }}>
          <Autocomplete
            multiple
            id="fav-items"
            options={
              searchCocktail &&
              searchCocktail.drinks &&
              searchCocktail.drinks.length > 0
                ? searchCocktail.drinks
                : []
            }
            getOptionLabel={(option: CocktailsDto) => option.strDrink}
            filterSelectedOptions
            onChange={(e, newValue: CocktailsDto[]) => setSearchList(newValue)}
            onInputChange={(e, value) => dispatch(getSearchCocktail(value))}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search Cocktail(s)"
                placeholder="Search"
              />
            )}
          />
        </Stack>
      </div>
      <div className="lg:grid lg:grid-cols-5 lg:gap-4 mb-4">
        {searchList &&
          searchList.map((data: CocktailsDto) => (
            <>
              <div
                key={data.idDrink}
                className="flex lg:mx-2 my-2 justify-center items-center"
              >
                <CocktailCard
                  title={data.strDrink}
                  img={data.strDrinkThumb}
                  desc={data.strInstructions}
                  cocktail={data}
                  isAddedToFavorite={
                    favoriteCocktail &&
                    favoriteCocktail.length > 0 &&
                    favoriteCocktail.some(
                      (item) => item.idDrink === data.idDrink
                    )
                  }
                  handleAddFavorite={handleAddFavorite}
                />
              </div>
            </>
          ))}
      </div>
      <div className="flex justify-center mb-4">
        <Typography variant="h4" component="h4">
          Random Cocktails
        </Typography>
      </div>
      {isRandomCocktailLoading ? (
        <BouncingLoadingIndicator />
      ) : (
        <div className="lg:grid lg:grid-cols-5 lg:gap-4">
          {randomCocktail &&
            randomCocktail.map((data: SearchCocktailDto) => (
              <div
                key={data.drinks[0].idDrink}
                className="flex lg:mx-2 my-2 justify-center items-center"
              >
                <CocktailCard
                  title={data.drinks[0].strDrink}
                  img={data.drinks[0].strDrinkThumb}
                  cocktail={data.drinks[0]}
                  desc={data.drinks[0].strInstructions}
                  isAddedToFavorite={
                    favoriteCocktail &&
                    favoriteCocktail.length > 0 &&
                    favoriteCocktail.some(
                      (item) => item.idDrink === data.drinks[0].idDrink
                    )
                  }
                  handleAddFavorite={handleAddFavorite}
                />
              </div>
            ))}
        </div>
      )}
    </>
  );
}
