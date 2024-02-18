export interface CategoryDto {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
}

export interface CategoryCocktailDto {
  drinks: CategoryDto[];
  key: string;
}
